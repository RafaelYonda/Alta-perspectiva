﻿using AltaPerspectiva.Web.Areas.Questions.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Dapper;
using Questions.Domain;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using HtmlAgilityPack;
using AltaPerspectiva.Web.Areas.Admin.Helpers;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class QuestionServiceOptimized
    {
        private string connectionString = Startup.ConnectionString;
        private AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();

        public List<AnswerViewModel> GetAnswerViewModels(Guid questionId)
        {
            List<AnswerViewModel> answerViewModels = new List<AnswerViewModel>();
            List<UserViewModel> userViewModels = null;
            String answerQuery = String.Format(@"
select * ,
(select COUNT(*) from Questions.Likes l where l.AnswerId =a.Id) LikeCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId =a.Id) CommentCount
from Questions.Answers a 
where QuestionId = '{0}'
", questionId);

            String multipleQuery = String.Format(@"
 select CONVERT(uniqueidentifier,asp.Id) as UserId ,
   ISNULL((select top 1 ISNULL(FirstName,'')+' '+ISNULL(LastName,'') from UserProfile.Credentials where UserId=asp.Id),asp.UserName) as Name,
   CONVERT(uniqueidentifier,(select Id from UserProfile.Credentials where UserId=asp.Id)) CredentialId,
   ISNULL((select ImageUrl from UserProfile.Credentials where UserId=asp.Id),'avatar.png') ImageUrl,
   (
   select Position
   from UserProfile.Employments e
   inner join UserProfile.Credentials c
   on e.CredentialID=c.Id
   where c.UserID=asp.Id

   ) Occupation
   from   [AltaPerspectiva].[dbo].[AspNetUsers] asp  where asp.Id in @ids ;

");
            
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                answerViewModels = db.Query<AnswerViewModel>(answerQuery).ToList();

                List<Guid> userIds = new List<Guid>();
                userIds.AddRange(answerViewModels.Select(x => x.UserId).ToList());
                var multiple = db.QueryMultiple(multipleQuery, new { @ids = userIds });
                userViewModels = multiple.Read<UserViewModel>().ToList();
                foreach (var userViewModel in userViewModels)
                {
                    userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                }
            }

            foreach (var answerViewModel in answerViewModels)
            {
                answerViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == answerViewModel.UserId);
                answerViewModel.Comments = new List<AnswerCommentViewModel>();
                for (int i = 0; i < answerViewModel.CommentCount; i++)
                {
                    answerViewModel.Comments.Add(new AnswerCommentViewModel());
                }
                answerViewModel.Likes = new List<AnswerLikeViewModel>();
                for (int i = 0; i < answerViewModel.LikeCount; i++)
                {
                    answerViewModel.Likes.Add(new AnswerLikeViewModel());
                }
            }
            return answerViewModels;
        }
        public QuestionViewModel GetQuestionViewModel(Guid questionId)
        {
            QuestionViewModel questionViewModel=new QuestionViewModel();
            //List<AnswerViewModel> answerViewModels = new List<AnswerViewModel>();
            

            //After question and answer thier will be only related topics category and level
            List<UserViewModel> userViewModels = null;
            List<CategoryViewModel> categoryViewModels = null;
            List<TopicViewModel> topics = null;
            List<LevelViewModel> levels = null;
          
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                string questionQuery = String.Format(@"
select q.Id,q.Title,q.Body,q.UserId,q.ViewCount,q.CreatedOn ,
(select COUNT(*) from Questions.Answers a where a.QuestionId=q.Id) AnswerCount,
(select COUNT(*) from Questions.Likes l where l.QuestionId =q.Id) LikeCount,
(select COUNT(*) from Questions.Comments c where c.QuestionId =q.Id) CommentCount,
(select top 1 CategoryId from Questions.QuestionCategories qc where qc.QuestionId=q.id) CategoryId,
(select TopicId from Questions.QuestionTopics qt where qt.QuestionId=q.id) TopicId,
(select LevelId from Questions.QuestionLevels ql where ql.QuestionId=q.id) LevelId
from Questions.Questions q
where q.Id = '{0}'
", questionId);
                questionViewModel = db.Query<QuestionViewModel>(questionQuery).FirstOrDefault();

                String answerQuery = String.Format(@"
select * ,
(select COUNT(*) from Questions.Likes l where l.AnswerId =a.Id) LikeCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId =a.Id) CommentCount
from Questions.Answers a 
where QuestionId = '{0}'
", questionId);
               // answerViewModels = db.Query<AnswerViewModel>(answerQuery).ToList();

                List<Guid> userIds = new List<Guid>();
                userIds.Add(questionViewModel.UserId);
              //  userIds.AddRange(answerViewModels.Select(x=>x.UserId).ToList());
                Guid categoryId = questionViewModel.CategoryId;
                Guid topicId = questionViewModel.TopicId;
                Guid levelId = questionViewModel.LevelId;

                String multipleQuery = String.Format(@"
 select CONVERT(uniqueidentifier,asp.Id) as UserId ,
   ISNULL((select top 1 ISNULL(FirstName,'')+' '+ISNULL(LastName,'') from UserProfile.Credentials where UserId=asp.Id),asp.UserName) as Name,
   CONVERT(uniqueidentifier,(select Id from UserProfile.Credentials where UserId=asp.Id)) CredentialId,
   ISNULL((select ImageUrl from UserProfile.Credentials where UserId=asp.Id),'avatar.png') ImageUrl,
   (
   select Position
   from UserProfile.Employments e
   inner join UserProfile.Credentials c
   on e.CredentialID=c.Id
   where c.UserID=asp.Id

   ) Occupation
   from   [AltaPerspectiva].[dbo].[AspNetUsers] asp  where asp.Id in @ids ;
select * from [Questions].[Categories] where id = '{0}';
select  * from Questions.Topics where id = '{1}';
select * from Questions.Levels where id ='{2}';

",categoryId,topicId,levelId);
                var multiple = db.QueryMultiple(multipleQuery ,new { @ids = userIds });
                userViewModels = multiple.Read<UserViewModel>().ToList();
                foreach (var userViewModel in userViewModels)
                {
                    userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                }
                questionViewModel.UserViewModel =
                    userViewModels.FirstOrDefault(x => x.UserId == questionViewModel.UserId);
                for (int i = 0; i < questionViewModel.CommentCount; i++)
                {
                    questionViewModel.Comments = new List<QuestionCommentViewModel>();
                    questionViewModel.Comments.Add(new QuestionCommentViewModel());
                }
                for (int i = 0; i < questionViewModel.LikeCount; i++)
                {
                    questionViewModel.Likes = new List<QuestionLikeViewModel>();
                    questionViewModel.Likes.Add(new QuestionLikeViewModel());
                }
                
                questionViewModel.Categories = new List<CategoryViewModel>();
                if (categoryId != Guid.Empty)
                {
                    categoryViewModels = multiple.Read<CategoryViewModel>().ToList();
                    var categoryViewModel = categoryViewModels.FirstOrDefault(x => x.Id == categoryId);
                    questionViewModel.Categories.Add(categoryViewModel);

                }
                questionViewModel.QuestionTopics = new List<QuestionTopic>();

                if (topicId != Guid.Empty)
                {
                    topics = multiple.Read<TopicViewModel>().ToList();
                    var topicViewModel = topics.FirstOrDefault(x => x.Id == topicId);
                    if (topicViewModel != null)
                    {
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
                }
                questionViewModel.QuestionLevels = new List<QuestionLevel>();

                if (levelId != Guid.Empty)
                {
                    levels = multiple.Read<LevelViewModel>().ToList();
                    var levelViewModel = levels.FirstOrDefault(x => x.Id == levelId);
                    if (levelViewModel != null)
                    {
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
                }

                //foreach (var answerViewModel in answerViewModels)
                //{
                //    answerViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == answerViewModel.UserId);
                //    answerViewModel.Comments = new List<AnswerCommentViewModel>();
                //    for (int i = 0; i < answerViewModel.CommentCount; i++)
                //    {
                //        answerViewModel.Comments.Add(new AnswerCommentViewModel());
                //    }
                //    answerViewModel.Likes = new List<AnswerLikeViewModel>();
                //    for (int i = 0; i < answerViewModel.LikeCount; i++)
                //    {
                //        answerViewModel.Likes.Add(new AnswerLikeViewModel());
                //    }
                //}
            }
           // questionViewModel.Answers = answerViewModels;
            return questionViewModel;
        }
        
        
        public List<QuestionViewModel> GetQuestionViewModels(int pageNumber,int pageCount)
        {
            String query =String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn,q.IsAnonymous, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
INNER JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id INNER  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

INNER JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id INNER JOIN
Questions.Topics t ON t.Id=qt.TopicId

INNER JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id INNER JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)

) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion=0
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows
", pageNumber* pageCount,pageCount);
            List<QuestionDbModel> questionDbModels = null;
            List<UserViewModel> userViewModels = null;
           // List<CategoryViewModel> categoryViewModels = null;
           // List<TopicViewModel> topics = null;
           // List<LevelViewModel> levels = null;
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                questionDbModels = db.Query<QuestionDbModel>(query).ToList();


                List<Guid> userList = new List<Guid>();

                userList.AddRange(questionDbModels.Select(x => x.UserId).ToList());
                userList.AddRange(questionDbModels.Select(x=>x.AnswerUserId).ToList());

               String userQuery = String.Format(@"
 select CONVERT(uniqueidentifier,asp.Id) as UserId ,
   ISNULL((select top 1 ISNULL(FirstName,'')+' '+ISNULL(LastName,'') from UserProfile.Credentials where UserId=asp.Id),asp.UserName) as Name,
   CONVERT(uniqueidentifier,(select Id from UserProfile.Credentials where UserId=asp.Id)) CredentialId,
   ISNULL((select ImageUrl from UserProfile.Credentials where UserId=asp.Id),'avatar.png') ImageUrl,
   (
   select Position
   from UserProfile.Employments e
   inner join UserProfile.Credentials c
   on e.CredentialID=c.Id
   where c.UserID=asp.Id

   ) Occupation
   from   [AltaPerspectiva].[dbo].[AspNetUsers] asp
  where asp.Id in @ids
");
               
                userViewModels = db.Query<UserViewModel>(userQuery,new { @ids = userList }).ToList();
                foreach (var userViewModel in userViewModels)
                {
                    userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                }
               // categoryViewModels = multiple.Read<CategoryViewModel>().ToList();
              //  topics = multiple.Read<TopicViewModel>().ToList();
              //  levels = multiple.Read<LevelViewModel>().ToList();

            }

            List<QuestionViewModel> questionViewModels=new List<QuestionViewModel>();
            foreach (var dbModel in questionDbModels)
            {
                QuestionViewModel questionViewModel=new QuestionViewModel();
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
                    questionViewModel.Categories=new List<CategoryViewModel>();
                    var categoryViewModel = new CategoryViewModel
                    {
                        Id = categoryId,
                        Name = dbModel.CategoryName
                    };
                    questionViewModel.Categories.Add(categoryViewModel);

                }
                if (topicId != Guid.Empty)
                {
                    questionViewModel.QuestionTopics=new List<QuestionTopic>();
                    var topicViewModel = new TopicViewModel
                    {
                        Id = topicId,
                        TopicName = dbModel.TopicName
                    };
                    if (topicViewModel != null)
                    {
                        QuestionTopic questionTopic = new QuestionTopic
                        {
                            QuestionId = questionViewModel.Id,
                            TopicId = topicViewModel.Id
                        };
                        questionViewModel.QuestionTopics=new List<QuestionTopic>();
                        questionViewModel.QuestionTopics.Add(questionTopic);

                        questionViewModel.QuestionTopicNames=new List<string>();
                        questionViewModel.QuestionTopicNames.Add(topicViewModel.TopicName);
                    }
                }
                if (levelId != Guid.Empty)
                {
                    questionViewModel.QuestionLevels=new List<QuestionLevel>();
                    var levelViewModel = new LevelViewModel
                    {
                        Id = levelId,
                        LevelName = dbModel.LevelName
                    };
                    if (levelViewModel != null)
                    {
                        QuestionLevel questionLevel = new QuestionLevel
                        {
                            QuestionId = questionViewModel.Id,
                            LevelId = levelViewModel.Id
                        };
                        questionViewModel.QuestionLevels=new List<QuestionLevel>();
                        questionViewModel.QuestionLevels.Add(questionLevel);

                        questionViewModel.QuestionLevelNames=new List<string>();
                        questionViewModel.QuestionLevelNames.Add(levelViewModel.LevelName);
                    }
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
                        Text = BestAnswerTestWithFormattedImage( dbModel.Text, dbModel.FirstImageUrl),
                        IsDrafted = dbModel.IsDrafted,
                        AnswerDate = dbModel.AnswerCreatedOn
                        
                    };
                    answerViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == dbModel.AnswerUserId);
                    answerViewModel.Likes=new List<AnswerLikeViewModel>();
                    for (int i = 0; i < dbModel.AnswerLikeCount; i++)
                    {
                        answerViewModel.Likes.Add(new AnswerLikeViewModel());
                    }
                    answerViewModel.Comments=new List<AnswerCommentViewModel>();
                    for (int i = 0; i < dbModel.AnswerCommentCount; i++)
                    {
                        answerViewModel.Comments.Add(new AnswerCommentViewModel());
                    }
                    //if (answerViewModel.UserViewModel != null)
                    //{
                    //    answerViewModel.UserViewModel.ImageUrl =
                    //        azureFileUploadHelper.GetProfileImage(answerViewModel.UserViewModel.ImageUrl);
                    //}
                    questionViewModel.Answers = new List<AnswerViewModel>();
                    questionViewModel.Answers.Add(answerViewModel);

                }
                questionViewModel.UserViewModel=new UserViewModel();;
                questionViewModels.Add(questionViewModel);


            }
            return questionViewModels;
        }
        private string BestAnswerTestWithFormattedImage(string answerText, string firstImageUrl)
        {
            //if (answerText == null)
            //{
            //    return "";
            //}
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
    }
}
