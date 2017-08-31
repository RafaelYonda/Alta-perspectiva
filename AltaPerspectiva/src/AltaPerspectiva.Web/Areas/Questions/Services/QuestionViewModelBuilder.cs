using AltaPerspectiva.Web.Areas.Questions.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using HtmlAgilityPack;
using Questions.Domain;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class QuestionViewModelBuilder
    {
        private static string FinalQuery { get; set; }

        public string SelectQuery { get; protected set; }
        public string JoinQuery { get; protected set; }
        public string WhereQuery { get; protected set; }
        public string OrderByQuery { get; protected set; }
        public string SkipTakeQuery { get; protected set; }

        public QuestionViewModelBuilder WithSelectQuery(string query)
        {
            this.SelectQuery = query;
            return this;
        }
        public QuestionViewModelBuilder WithJoinQuery(string query)
        {
            this.JoinQuery = query;
            return this;
        }
        public QuestionViewModelBuilder WithWhereQuery(string query)
        {
            this.WhereQuery = query;
            return this;
        }
        public QuestionViewModelBuilder WithOrderByQuery(string query)
        {
            this.OrderByQuery = query;
            return this;
        }
        public QuestionViewModelBuilder WithSkipTakeQuery(int pageNumber, int pageCount = 15)
        {
            string query = string.Format(@"
OFFSET {0} ROWS -- skip  rows
FETCH NEXT {1} ROWS ONLY -- take rows ", pageNumber * pageCount, pageCount);

            if (pageNumber != -1)
            {
                this.SkipTakeQuery = query;
            }
            else
            {
                this.SkipTakeQuery = "";
            }
            
            return this;
        }

        public QuestionViewModelBuilder BuildQuery()
        {
            if (String.IsNullOrEmpty(JoinQuery))
            {
                JoinQuery = String.Empty;
            }
            FinalQuery = SelectQuery + " " + JoinQuery + " " + WhereQuery + " " + OrderByQuery + " " + SkipTakeQuery;
            return this;
        }

        public int BuildCountQuery(String tableName)
        {
            int ctn = 0;
            if (String.IsNullOrEmpty(JoinQuery))
            {
                JoinQuery = String.Empty;
            }
            FinalQuery = "select COUNT(*) as Ctn from " + tableName + " " + JoinQuery + " " + WhereQuery;
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                ctn = connection.Query<int>(FinalQuery).FirstOrDefault();
            }
            return ctn;
        }
        public static implicit operator List<QuestionViewModel>(QuestionViewModelBuilder builder)
        {

            List<QuestionViewModel> questionViewModels = new List<QuestionViewModel>();
            List<QuestionDbModel> questionDbModels = null;
            List<UserViewModel> userViewModels = null;

            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                questionDbModels = connection.Query<QuestionDbModel>(FinalQuery).ToList();
                #region UserViewModels
                List<Guid> userIds = new List<Guid>();
                userIds.AddRange(questionDbModels.Select(x => x.UserId).ToList());
                userIds.AddRange(questionDbModels.Select(x => x.AnswerUserId).ToList());
                userViewModels = new UserService().GetUserViewModelsWithThumbnailImage(userIds);

                #endregion
            }
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
                        TopicName = dbModel.TopicName,
                        CategoryId = categoryId

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
                        //Text = BestAnswerTestWithFormattedImage(dbModel.Text, dbModel.FirstImageUrl),
                        IsDrafted = dbModel.IsDrafted,
                        AnswerDate = dbModel.AnswerCreatedOn,
                        IsAnonymous = dbModel.IsAnonymous
                    };

                    #region BestAnswerTestWithFormattedImage(dbModel.Text, dbModel.FirstImageUrl)

                    string answerText = dbModel.Text;
                    string firstImageUrl = dbModel.FirstImageUrl;
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
                    answerViewModel.Text = newHtml;
                    #endregion

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
                questionViewModel.UserViewModel = new UserViewModel(); ;
                questionViewModels.Add(questionViewModel);
            }
            return questionViewModels;
        }
      

    }
}
