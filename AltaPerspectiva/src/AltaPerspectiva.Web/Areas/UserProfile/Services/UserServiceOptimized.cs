using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Dapper;
using HtmlAgilityPack;
using Questions.Domain;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserServiceOptimized
    {
        private string connectionString = Startup.ConnectionString;
        private AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();

        public UserViewModel UserViewModelFromUserId(IDbConnection db, Guid userId)
        {
            String userQuery = String.Format(@"
 select UserId,
ISNULL(ISNULL(FirstName,'')+' '+ISNULL(LastName,''),Email) as Name,
Email,
ISNULL(ImageUrl,'avatar.png') ImageUrl,
Occupation
from UserProfile.Credentials
  where userId =@userId
");
            var userViewModel = db.Query<UserViewModel>(userQuery, new { @userId = userId }).FirstOrDefault();

            userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);

            if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
            {
                userViewModel.Name = userViewModel.Email;
            }
            return userViewModel;
        }

        private List<UserViewModel> UserViewModelsFromUserIds(IDbConnection db, List<Guid> userIds)
        {
            String userQuery = String.Format(@"
 select UserId,
ISNULL(ISNULL(FirstName,'')+' '+ISNULL(LastName,''),Email) as Name,
ISNULL(ImageUrl,'avatar.png') ImageUrl,
Occupation,
Email
from UserProfile.Credentials
  where UserId in @ids
");

            List<UserViewModel> userViewModels = db.Query<UserViewModel>(userQuery, new { @ids = userIds }).ToList();
            foreach (var userViewModel in userViewModels)
            {
                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
            }
            return userViewModels;

        }

        private string BestAnswerTestWithFormattedImage(string answerText, string firstImageUrl)
        {
            string htmlDocument = answerText;
            List<string> imgTags = Base64Image.GetImagesInHTMLString(answerText);
            foreach (var imgTag in imgTags)
            {
                htmlDocument = answerText.Replace(imgTag, "");
            }
            HtmlDocument htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(htmlDocument);
            string result = htmlDoc.DocumentNode.InnerText;

            string formatedImage = string.Empty;
            if (!string.IsNullOrEmpty(firstImageUrl))
            {
                formatedImage = @"<img src='" + firstImageUrl + "' > ";
            }
            string newHtml = "<p>" + formatedImage + result + "</p>";
            return newHtml;
        }

        public List<QuestionViewModel> GetQuestionViewModelsByUserId(Guid userId,int pageNumber)
        {
            List<QuestionDbModel> questionDbModels = null;
            List<UserViewModel> userViewModels = null;

            String filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn,q.IsAnonymous, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null 
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion = 0 and q.UserId = '{0}'
order by q.CreatedOn desc
OFFSET {1} ROWS -- skip 10 rows
FETCH NEXT 15 ROWS ONLY; -- take 10 rows
", userId,pageNumber*15);
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                questionDbModels = db.Query<QuestionDbModel>(filterQuery).ToList();

                List<Guid> userList = new List<Guid>();
                userList.AddRange(questionDbModels.Select(x => x.UserId).ToList());
                userList.AddRange(questionDbModels.Select(x => x.AnswerUserId).ToList());
                userViewModels = UserViewModelsFromUserIds(db, userList);
            }
            List<QuestionViewModel> questionViewModels = new List<QuestionViewModel>();
            foreach (var dbModel in questionDbModels)
            {
                QuestionViewModel questionViewModel = new QuestionViewModel();
                questionViewModel.Id = dbModel.Id;
                questionViewModel.Title = dbModel.Title;
                questionViewModel.Body = dbModel.Body;
                questionViewModel.CreatedOn = dbModel.CreatedOn;
                questionViewModel.AnswerCount = dbModel.AnswerCount;
                questionViewModel.Likes = new List<QuestionLikeViewModel>();

                questionViewModel.ViewCount = dbModel.ViewCount;
                questionViewModel.UserId = dbModel.UserId;
                questionViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == dbModel.UserId);
                Guid categoryId = dbModel.CategoryId;
                Guid topicId = dbModel.TopicId;
                Guid levelId = dbModel.LevelId;

                if (categoryId != Guid.Empty)
                {
                    questionViewModel.Categories = new List<CategoryViewModel>();
                    var categoryViewModel = new CategoryViewModel
                    {
                        Id = categoryId,
                        Name = dbModel.CategoryName
                    };
                    questionViewModel.Categories.Add(categoryViewModel);
                }
                if (topicId != Guid.Empty)
                {
                    questionViewModel.QuestionTopics = new List<QuestionTopic>();
                    var topicViewModel = new TopicViewModel
                    {
                        Id = topicId,
                        TopicName = dbModel.TopicName
                    };

                    QuestionTopic questionTopic = new QuestionTopic
                    {
                        QuestionId = questionViewModel.Id,
                        TopicId = topicViewModel.Id
                    };
                    questionViewModel.QuestionTopics = new List<QuestionTopic>();
                    questionViewModel.QuestionTopics.Add(questionTopic);

                    questionViewModel.QuestionTopicNames = new List<string>();
                    questionViewModel.QuestionTopicNames.Add(topicViewModel.TopicName);
                }
                if (levelId != Guid.Empty)
                {
                    questionViewModel.QuestionLevels = new List<QuestionLevel>();
                    var levelViewModel = new LevelViewModel
                    {
                        Id = levelId,
                        LevelName = dbModel.LevelName
                    };

                    QuestionLevel questionLevel = new QuestionLevel
                    {
                        QuestionId = questionViewModel.Id,
                        LevelId = levelViewModel.Id
                    };
                    questionViewModel.QuestionLevels = new List<QuestionLevel>();
                    questionViewModel.QuestionLevels.Add(questionLevel);

                    questionViewModel.QuestionLevelNames = new List<string>();
                    questionViewModel.QuestionLevelNames.Add(levelViewModel.LevelName);
                }
                if (dbModel.AnswerId != Guid.Empty)
                {
                    AnswerViewModel answerViewModel = new AnswerViewModel
                    {
                        Id = dbModel.AnswerId,
                        UserId = dbModel.AnswerUserId,
                        AnswerId = dbModel.AnswerId,
                        QuestionId = dbModel.Id,
                        FirstImageUrl = dbModel.FirstImageUrl,
                        Text = BestAnswerTestWithFormattedImage(dbModel.Text, dbModel.FirstImageUrl),
                        IsDrafted = dbModel.IsDrafted,
                        AnswerDate = dbModel.AnswerCreatedOn
                    };
                    answerViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == dbModel.AnswerUserId);
                    answerViewModel.Likes = new List<AnswerLikeViewModel>();
                    for (int i = 0; i < dbModel.AnswerLikeCount; i++)
                    {
                        answerViewModel.Likes.Add(new AnswerLikeViewModel());
                    }
                    answerViewModel.Comments = new List<AnswerCommentViewModel>();
                    for (int i = 0; i < dbModel.AnswerCommentCount; i++)
                    {
                        answerViewModel.Comments.Add(new AnswerCommentViewModel());
                    }
                    questionViewModel.Answers = new List<AnswerViewModel>();
                    questionViewModel.Answers.Add(answerViewModel);
                }
                questionViewModel.UserViewModel = new UserViewModel();
                ;
                questionViewModels.Add(questionViewModel);
            }
            return questionViewModels;
        }

        public List<QuestionViewModel> GetQuestionViewModelsForAnswers(Guid userId,int pageNumber)
        {
            List<QuestionDbModel> questionDbModels = null;
            List<UserViewModel> userViewModels = null;

            String filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn,q.IsAnonymous, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId = q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
inner join
(
select * from (select * ,Row_number() OVER( partition BY a.questionId ORDER BY a.questionId) RowNumber
from Questions.Answers a 
where a.UserId='{0}' and a.IsDrafted is null and a.IsDeleted is null
and exists (select 1 from Questions.Questions q where q.Id=a.QuestionID and q.IsDirectQuestion=0 and q.Isdeleted is  null)
) X where X.RowNumber = 1

) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion = 0 
order by q.CreatedOn desc
OFFSET {1} ROWS -- skip 10 rows
FETCH NEXT 15 ROWS ONLY; -- take 10 rows
", userId, pageNumber*15);
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                questionDbModels = db.Query<QuestionDbModel>(filterQuery).ToList();

                List<Guid> userList = new List<Guid>();
                userList.AddRange(questionDbModels.Select(x => x.UserId).ToList());
                userList.AddRange(questionDbModels.Select(x => x.AnswerUserId).ToList());
                userViewModels = UserViewModelsFromUserIds(db, userList);
            }
            List<QuestionViewModel> questionViewModels = new List<QuestionViewModel>();
            foreach (var dbModel in questionDbModels)
            {
                QuestionViewModel questionViewModel = new QuestionViewModel();
                questionViewModel.Id = dbModel.Id;
                questionViewModel.Title = dbModel.Title;
                questionViewModel.Body = dbModel.Body;
                questionViewModel.CreatedOn = dbModel.CreatedOn;
                questionViewModel.AnswerCount = dbModel.AnswerCount;
                questionViewModel.Likes = new List<QuestionLikeViewModel>();

                questionViewModel.ViewCount = dbModel.ViewCount;
                questionViewModel.UserId = dbModel.UserId;
                questionViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == dbModel.UserId);
                Guid categoryId = dbModel.CategoryId;
                Guid topicId = dbModel.TopicId;
                Guid levelId = dbModel.LevelId;

                if (categoryId != Guid.Empty)
                {
                    questionViewModel.Categories = new List<CategoryViewModel>();
                    var categoryViewModel = new CategoryViewModel
                    {
                        Id = categoryId,
                        Name = dbModel.CategoryName
                    };
                    questionViewModel.Categories.Add(categoryViewModel);
                }
                if (topicId != Guid.Empty)
                {
                    questionViewModel.QuestionTopics = new List<QuestionTopic>();
                    var topicViewModel = new TopicViewModel
                    {
                        Id = topicId,
                        TopicName = dbModel.TopicName
                    };

                    QuestionTopic questionTopic = new QuestionTopic
                    {
                        QuestionId = questionViewModel.Id,
                        TopicId = topicViewModel.Id
                    };
                    questionViewModel.QuestionTopics = new List<QuestionTopic>();
                    questionViewModel.QuestionTopics.Add(questionTopic);

                    questionViewModel.QuestionTopicNames = new List<string>();
                    questionViewModel.QuestionTopicNames.Add(topicViewModel.TopicName);
                }
                if (levelId != Guid.Empty)
                {
                    questionViewModel.QuestionLevels = new List<QuestionLevel>();
                    var levelViewModel = new LevelViewModel
                    {
                        Id = levelId,
                        LevelName = dbModel.LevelName
                    };

                    QuestionLevel questionLevel = new QuestionLevel
                    {
                        QuestionId = questionViewModel.Id,
                        LevelId = levelViewModel.Id
                    };
                    questionViewModel.QuestionLevels = new List<QuestionLevel>();
                    questionViewModel.QuestionLevels.Add(questionLevel);

                    questionViewModel.QuestionLevelNames = new List<string>();
                    questionViewModel.QuestionLevelNames.Add(levelViewModel.LevelName);
                }
                if (dbModel.AnswerId != Guid.Empty)
                {
                    AnswerViewModel answerViewModel = new AnswerViewModel
                    {
                        Id = dbModel.AnswerId,
                        UserId = dbModel.AnswerUserId,
                        AnswerId = dbModel.AnswerId,
                        QuestionId = dbModel.Id,
                        FirstImageUrl = dbModel.FirstImageUrl,
                        Text = BestAnswerTestWithFormattedImage(dbModel.Text, dbModel.FirstImageUrl),
                        IsDrafted = dbModel.IsDrafted,
                        AnswerDate = dbModel.AnswerCreatedOn
                    };
                    answerViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == dbModel.AnswerUserId);
                    answerViewModel.Likes = new List<AnswerLikeViewModel>();
                    for (int i = 0; i < dbModel.AnswerLikeCount; i++)
                    {
                        answerViewModel.Likes.Add(new AnswerLikeViewModel());
                    }
                    answerViewModel.Comments = new List<AnswerCommentViewModel>();
                    for (int i = 0; i < dbModel.AnswerCommentCount; i++)
                    {
                        answerViewModel.Comments.Add(new AnswerCommentViewModel());
                    }
                    questionViewModel.Answers = new List<AnswerViewModel>();
                    questionViewModel.Answers.Add(answerViewModel);
                }
                questionViewModel.UserViewModel = new UserViewModel();
                ;
                questionViewModels.Add(questionViewModel);
            }
            return questionViewModels;
        }
    }
}
