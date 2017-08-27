﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AltaPerspectiva.Core;
using Questions.Command;
using Questions.Query;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using Microsoft.Extensions.Configuration;
using Questions.Domain;
using AltaPerspectiva.Web.Areas.Questions.Services;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Command.Commands;
using Questions.Domain.ReadModel;
using Questions.Query.Queries;
using Questions.Commands;
using System.Text.RegularExpressions;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Questions.Query.Specifications;
using Dapper;
using Microsoft.Extensions.Logging;

namespace AltaPerspectiva.Web.Area.Questions
{
    [Area("Questions")]
    public class QuestionsController : Controller
    {
        #region Ctor and config
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        private readonly IConfigurationRoot configuration;
        private readonly IHostingEnvironment hostingEnvironment;
        ILogger<QuestionsController> _logger;

        public QuestionsController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IConfigurationRoot _configuration, IHostingEnvironment _hostingEnvironment, ILogger<QuestionsController> logger)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            configuration = _configuration;
            hostingEnvironment = _hostingEnvironment;
            _logger = logger;
        }


        [HttpGet("/questions/api/questions/config")]
        public IActionResult GetConfig()
        {
            var config = new Config();
            config.ProfileImage = configuration["ProfileImage"];
            config.CategoryImage = configuration["CategoryImage"];
            config.VirtualStore = configuration["VirtualStore"];
            return Ok(config);
        }
        #endregion
        [HttpGet("/questions/api/keepalive")]
        public IActionResult keepalive()
        {
            return Ok();
        }
        // GET: /questions/api/questions
        [HttpGet("/questions/api/questions")]
        public async Task<IActionResult> Get(int pageNumber = 0)
        {
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            int pageSize = 10;
            _logger.LogInformation($"#### log start url = " + Microsoft.AspNetCore.Http.Extensions.UriHelper.GetEncodedUrl(Request));

            List<QuestionViewModel> questions = await Task.Run(() => new QuestionServiceOptimized().GetQuestionViewModels(pageNumber, pageSize,userId:loggedinUser));

            _logger.LogInformation($"#### log end url = " + Microsoft.AspNetCore.Http.Extensions.UriHelper.GetEncodedUrl(Request));
            return Ok(questions);
        }

        [HttpGet("/questions/api/questions/{questionId}/getanswers")]
        public async Task<IActionResult> GetAnswers(Guid questionId)
        {
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            var answers = await Task.Run(() => new QuestionServiceOptimized().GetAnswerViewModels(questionId, loggedinUser));
            return Ok(answers);
        }

        [HttpGet("/questions/api/{topicId}/questions/{categoryId}")]
        public async Task<IActionResult> GetQuestionByTopicNCategoryId(Guid topicId, Guid categoryId)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().GetQuestionByTopciNCategoryId(topicId, categoryId);
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            IEnumerable<QuestionViewModel> questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration, loggedinUser);

            return Ok(questions);
        }

        [HttpGet("/questions/api/questions/search")]
        public async Task<IActionResult> GetSearchQuestion()
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsSearchQuery>().Execute();
            return Ok(questionList);
        }

        [HttpGet("/questions/api/questions/notanswered/{id}")]
        public async Task<IActionResult> GetQuestyionsNotAnswered(Guid id, int pageNo = 0)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsNotAnsweredQuery>().Execute(id, pageNo);
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            IEnumerable<QuestionViewModel> questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration, loggedinUser);
            return Ok(questions);
        }

        [HttpGet("/questions/api/questions/answered/{id}")]
        public async Task<IActionResult> GetQuestyionsAnswered(Guid id, int pageNo = 0)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsAnsweredQuery>().Execute(id, pageNo);
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            IEnumerable<QuestionViewModel> questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration, loggedinUser);
            return Ok(questions);
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/{id}")]
        public IActionResult Get(Guid id)
        {
            _logger.LogInformation($"#### log start url = " + Microsoft.AspNetCore.Http.Extensions.UriHelper.GetEncodedUrl(Request));
            var questionViewModel1 = new QuestionServiceOptimized().GetQuestionViewModel(id);
            _logger.LogInformation($"#### log end url = " + Microsoft.AspNetCore.Http.Extensions.UriHelper.GetEncodedUrl(Request));
            return Ok(questionViewModel1);
        }

        [HttpGet("/questions/api/questions/category/{id}")]
        public async Task<IActionResult> GetQuestionsByCategoryId(Guid id)
        {
            _logger.LogInformation($"#### log start url = " + Microsoft.AspNetCore.Http.Extensions.UriHelper.GetEncodedUrl(Request));
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            List<QuestionViewModel> questions = await Task.Run(() => new QuestionServiceOptimized().GetQuestionViewModels(pageNumber: 0, pageCount: 10,userId:loggedinUser ,filterParameter: new FilterParameter
            {
                CategoryId = id
            }));

            _logger.LogInformation($"#### log end url = " + Microsoft.AspNetCore.Http.Extensions.UriHelper.GetEncodedUrl(Request));


            return Ok(questions);
        }
        [HttpGet("/questions/api/questions/{categoryId}/categorywithpagination/{pageNumber}")]
        public async Task<IActionResult> CategoryWithPagination(Guid categoryId, int pageNumber)
        {
            Guid? catId = null;
            if (categoryId != Guid.Empty)
            {
                catId = categoryId;
            }
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            List<QuestionViewModel> questions = await Task.Run(() => new QuestionServiceOptimized().GetQuestionViewModels(pageNumber: pageNumber, pageCount: 15,userId: loggedinUser, filterParameter: new FilterParameter
            {
                CategoryId = catId
            }) );

            return Ok(questions);
        }

        // GET /questions/api/questions/topic/{id}
        [HttpGet("/questions/api/questions/topic/{id}")]
        public async Task<IActionResult> GetQuestionsByTopicId(Guid id)
        {
            IEnumerable<Question> questions = await queryFactory.ResolveQuery<IGetQuestionByTopicId>().Execute(id);
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questions, queryFactory, configuration, loggedinUser);

            return Ok(questionViewModels);
        }

        //get  /questions/api/questions/reatedquestions/{id}
        [HttpGet("/questions/api/questions/relatedquestions/{id}")]
        public async Task<IActionResult> GetRelatedQuestions(Guid id)
        {
            IEnumerable<Question> questions = await queryFactory.ResolveQuery<IRelatedQuestionsQuery>().Execute(id);
            foreach (var question in questions)
            {
                question.Title = "¿" + question.Title + "?";
            }

            return Ok(questions);
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/{id}/comments")]
        public async Task<IActionResult> GetQuestionComments(Guid id)
        {
            //IEnumerable<Comment> comments = await queryFactory.ResolveQuery<IQuestionCommentsQuery>().Execute(id);
            //IEnumerable<QuestionCommentViewModel> commentsVM = new QuestionService().GetComments(comments, queryFactory, configuration);

            List<QuestionCommentViewModel> commentsVM = new List<QuestionCommentViewModel>();

            List<CommentDbModel> commentDbModels = new List<CommentDbModel>();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                String commentQuery = String.Format(@"select c.Id , c.CommentText ,c.QuestionId, cre.FirstName +' ' +cre.LastName as Name, cre.Occupation ,cre.ImageUrl ,cre.Id CredentialId , cre.Email ,cre.UserId
from [Questions].[Comments] c
inner join [UserProfile].[Credentials] cre on c.UserId = cre.UserId
where c.QuestionId = '{0}'", id);
                commentDbModels = await Task.Run(() => connection.Query<CommentDbModel>(commentQuery).ToList());
            }

            foreach (var commentDbModel in commentDbModels)
            {
                QuestionCommentViewModel commentViewModel = new QuestionCommentViewModel();
                commentViewModel.Id = commentDbModel.Id;
                commentViewModel.CommentText = commentDbModel.CommentText;
                commentViewModel.QuestionId = commentDbModel.QuestionId;
                commentViewModel.UserId = commentDbModel.UserId;

                UserViewModel userViewModel = new UserViewModel();
                userViewModel.UserId = commentDbModel.UserId;
                userViewModel.CredentialId = commentDbModel.CredentialId;
                AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                if (string.IsNullOrEmpty(commentDbModel.ImageUrl))
                {
                    userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage("avatar.png");
                }
                else
                {
                    userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(commentDbModel.ImageUrl);
                }
                userViewModel.Email = commentDbModel.Email;
                userViewModel.Occupation = commentDbModel.Occupation;
                userViewModel.Name = commentDbModel.Name;

                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }

                commentViewModel.UserViewModel = userViewModel;
                commentsVM.Add(commentViewModel);
            }
            return Ok(commentsVM);
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/answer/{id}/comments")]
        public async Task<IActionResult> GetAnswerComments(Guid id)
        {
            List<QuestionCommentViewModel> commentsVM = new List<QuestionCommentViewModel>();

            List<CommentDbModel> commentDbModels = new List<CommentDbModel>();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                String commentQuery = String.Format(@"select c.Id , c.CommentText ,c.QuestionId, cre.FirstName +' ' +cre.LastName as Name, cre.Occupation ,cre.ImageUrl ,cre.Id CredentialId , cre.Email ,cre.UserId
from [Questions].[Comments] c
inner join [UserProfile].[Credentials] cre on c.UserId = cre.UserId
where c.AnswerId = '{0}'", id);
                commentDbModels = await Task.Run(() => connection.Query<CommentDbModel>(commentQuery).ToList());
            }

            foreach (var commentDbModel in commentDbModels)
            {
                QuestionCommentViewModel commentViewModel = new QuestionCommentViewModel();
                commentViewModel.Id = commentDbModel.Id;
                commentViewModel.CommentText = commentDbModel.CommentText;
                commentViewModel.QuestionId = commentDbModel.QuestionId;
                commentViewModel.UserId = commentDbModel.UserId;

                UserViewModel userViewModel = new UserViewModel();
                userViewModel.UserId = commentDbModel.UserId;
                userViewModel.CredentialId = commentDbModel.CredentialId;
                AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                if (string.IsNullOrEmpty(commentDbModel.ImageUrl))
                {
                    userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage("avatar.png");
                }
                else
                {
                    userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(commentDbModel.ImageUrl);
                }
                userViewModel.Email = commentDbModel.Email;
                userViewModel.Occupation = commentDbModel.Occupation;
                userViewModel.Name = commentDbModel.Name;
                if (String.IsNullOrEmpty(commentDbModel.Name) || String.IsNullOrWhiteSpace(commentDbModel.Name))
                {
                    userViewModel.Name = commentDbModel.Email;
                }
                commentViewModel.UserViewModel = userViewModel;
                commentsVM.Add(commentViewModel);

            }


            return Ok(commentsVM);
        }
        [Authorize]
        [HttpPost("/questions/api/question/{id}/answer")]
        public async Task<IActionResult> PostAnswer([FromBody]AddAnswerViewModel answer)
        {

            var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());


            #region imageProcessing

            string firstImageUrl = null;
            var imgTags = Base64Image.GetImagesInHTMLString(answer.Text);

            foreach (var imgTag in imgTags)
            {
                string fileLink = String.Empty;
                string extension = Base64Image.GetExtension(imgTag);
                if (!String.IsNullOrEmpty(extension))
                {
                    Base64Image base64Image = Base64Image.Parse(imgTag);

                    String imageName = Guid.NewGuid().ToString() + base64Image.Extension;

                    AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                    fileLink = await azureFileUploadHelper.SaveQuestionAnswerInAzure(base64Image.baseStream,
                        imageName, base64Image.ContentType);
                    if (firstImageUrl == null)
                    {
                        firstImageUrl = Regex.Match(fileLink, "<img.+?src=[\"'](.+?)[\"'].+?>", RegexOptions.IgnoreCase).Groups[1].Value;
                    }
                }
                answer.Text = answer.Text.Replace(imgTag, fileLink);

            }
            #endregion

            if (answer.IsDrafted != true)
            {
                string webRootPath = hostingEnvironment.WebRootPath;

                //Nueva Respuesta=New Answer
                await new SendEmailService().SendAnswerEmailAsync(queryFactory, webRootPath, loggedinUser, answer.QuestionId, answer.Text, "Nueva Respuesta");
            }


            AddAnswerCommand cmd = new AddAnswerCommand(answer.Text, answer.AnswerDate, answer.QuestionId, loggedinUser, answer.IsDrafted, answer.IsAnonymous, firstImageUrl);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{answer.QuestionId}/answer/{answer.Id}", answer);

        }
        [Authorize]
        [HttpPost("/questions/api/question/{id}/comment")]
        public IActionResult PostQuestionComment([FromBody]AddCommentViewModel comment)
        {
            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());


            AddCommentCommand cmd = new AddCommentCommand(comment.CommentText, comment.QuestionId, null,
                loggedinUser);
            commandsFactory.ExecuteQuery(cmd);

            //UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, loggedinUser,
            //    configuration);
            //comment.UserViewModel = userViewModel;
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                String userQuery = String.Format(@" select UserId,
ISNULL(ISNULL(FirstName,'')+' '+ISNULL(LastName,''),Email) as Name,
ISNULL(ImageUrl,'avatar.png') ImageUrl,
Occupation,
Email
from UserProfile.Credentials
  where userId  = @id ");
                UserViewModel userViewModel =
                    connection.Query<UserViewModel>(userQuery, new {@id = loggedinUser}).FirstOrDefault();

                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }

                comment.UserViewModel = userViewModel;
            }
            return Ok(comment);


        }
        [Authorize]
        [HttpPost("/questions/api/question/answer/{answerId}/comment")]
        public IActionResult PostAnswerComment([FromBody]AddCommentViewModel comment)
        {
            var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());


            AddCommentCommand cmd = new AddCommentCommand(comment.CommentText, comment.QuestionId, comment.AnswerId,
                loggedinUser);
            commandsFactory.ExecuteQuery(cmd);

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                String userQuery = String.Format(@" select UserId,
ISNULL(ISNULL(FirstName,'')+' '+ISNULL(LastName,''),Email) as Name,
ISNULL(ImageUrl,'avatar.png') ImageUrl,
Occupation,
Email
from UserProfile.Credentials
  where userId  = @id ");
                UserViewModel userViewModel =
                    connection.Query<UserViewModel>(userQuery, new { @id = loggedinUser }).FirstOrDefault();

                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
                comment.UserViewModel = userViewModel;

            }
            return Ok(comment);

        }

        #region Question and Answer Likes
        [Authorize]
        [HttpGet("/questions/api/question/{questionId}/getqestionalreadyLiked")]
        public IActionResult GetQuestionAlreadyLiked(Guid questionId)
        {
            var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            Boolean commentAlreadyLiked = queryFactory.ResolveQuery<ILikeQuery>()
                .GetQuestionBeforeLike(questionId, loggedinUser);
            return Ok(new { result = commentAlreadyLiked });

        }
        [Authorize]
        [HttpPost("/questions/api/question/{id}/like")]
        public IActionResult PostQuestionLike([FromBody]AddLikeViewModel like)
        {

            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            like.UserId = loggedinUser;

            AddLikeCommand cmd = new AddLikeCommand(like.QuestionId, null, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);

            return Ok(new
            {
                result = cmd.Id != Guid.Empty
            });



        }
        [Authorize]
        [HttpGet("/questions/api/question/getansweralreadyliked/{answerId}")]
        public IActionResult GetAnswerAlreadyLiked(Guid answerId)
        {

            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            Boolean alreadyLiked = queryFactory.ResolveQuery<ILikeQuery>()
                .GetAnswerBeforeLike(answerId, loggedinUser);
            return Ok(new { result = alreadyLiked });

        }
        [Authorize]
        [HttpPost("/questions/api/question/answer/{answerId}/like")]
        public IActionResult PostAnswerLike([FromBody]AddLikeViewModel like)
        {

            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            like.UserId = loggedinUser;

            AddLikeCommand cmd = new AddLikeCommand(null, like.AnswerId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);

            return Ok(new
            {
                result = cmd.Id != Guid.Empty
            });


        }

        [HttpGet("/questions/api/question/{questionId}/questionlike")]
        public async Task<IActionResult> GetQuestionLike(Guid questionId)
        {
            //IEnumerable<Like> likes = await queryFactory.ResolveQuery<ILikeQuery>().Execute(questionId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();

            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                String query = String.Format(@"select cre.*  ,cre.FirstName + ' '+cre.lastName as Name ,cre.Id as CredentialId
from [Questions].[Likes] l
inner join [UserProfile].[Credentials] cre on l.UserId = cre.UserId
where l.QuestionId= '{0}'", questionId);

                userViewModels = await Task.Run(() => connection.Query<UserViewModel>(query).ToList());
            }
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            foreach (var userViewModel in userViewModels)
            {
                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
            }
            //foreach (var like in likes)
            //{
            //    Guid userId = like.UserId;
            //    UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId, configuration);
            //    userViewModels.Add(userViewModel);
            //}
            return Ok(userViewModels);

        }
        [HttpGet("/questions/api/question/{answerId}/answerlike")]
        public async Task<IActionResult> GetAnswerLike(Guid answerId)
        {
            string connectionString = Startup.ConnectionString;
            string query = String.Format(@"
                select likedUser.*,cr.[FirstName]+' '+cr.[LastName] as Name,cr.[ImageUrl] from
(select distinct UserId from [Questions].[Likes]
where AnswerId='{0}') likedUser

left join [UserProfile].[Credentials] cr on cr.[UserId]= likedUser.UserId

", answerId);
            List<UserViewModel> userViewModels = new List<UserViewModel>();
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                userViewModels = await Task.Run(() => db.Query<UserViewModel>(query).ToList());
            }
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            foreach (var userViewModel in userViewModels)
            {
                if (String.IsNullOrEmpty(userViewModel.ImageUrl))
                {
                    userViewModel.ImageUrl = "avatar.png";
                }
                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);

            }
            //IEnumerable<Like> likes = await queryFactory.ResolveQuery<ILikeQuery>().GetLikeByAnswerId(answerId);

            //List<UserViewModel> userViewModels = new List<UserViewModel>();
            //foreach (var like in likes)
            //{
            //    Guid userId = like.UserId;
            //    UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId, configuration);
            //    userViewModels.Add(userViewModel);
            //}
            return Ok(userViewModels);

        }

        #endregion


        [HttpPost("/questions/api/question/{id}/viewcount")]
        public IActionResult PostQuestionViewCount(Guid id)
        {

            UpdateViewCountCommand cmd = new UpdateViewCountCommand(id);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{cmd.Id}/viewcount/{cmd.Id}", cmd);

        }

        [HttpGet("/questions/api/answerlike/{answerId}")]
        public async Task<IActionResult> AnswerLike(Guid answerId)
        {
            IEnumerable<Like> likes = await queryFactory.ResolveQuery<ILikeQuery>().Answer(answerId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (var like in likes)
            {
                Guid userId = like.UserId;

                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId, configuration);
                userViewModels.Add(userViewModel);

            }
            return Ok(userViewModels);


        }

        #region Top Five Region
        [HttpGet("/questions/api/{categoryId}/gettopfivequestionbycategoryid")]
        public async Task<IActionResult> GetTopFiveQuestionByCategoryId(Guid categoryId)
        {
            IEnumerable<Question> topFiveQuestion = new List<Question>();
            if (categoryId == Guid.Empty)
            {
                topFiveQuestion = await queryFactory.ResolveQuery<IQuestionsQuery>().GetTopFiveQuestion();

            }
            else
            {
                topFiveQuestion = await queryFactory.ResolveQuery<IQuestionsQuery>().GetTopFiveQuestionByCategoryId(categoryId);
            }
            foreach (var question in topFiveQuestion)
            {
                question.Title = "¿" + question.Title + "?";
            }
            return Ok(topFiveQuestion);


        }
        [HttpGet("/questions/api/{categoryId}/gettopfivetopicsbycategoryid")]
        public async Task<IActionResult> GetTopFiveTopicsByCategoryId(Guid categoryId)
        {
            IEnumerable<Topic> topics = new List<Topic>();
            Guid generalCategoryId = new Guid("7639B416-8D1C-4119-B58E-143CB860E8A6");
            if (categoryId == Guid.Empty || categoryId == generalCategoryId)
            {
                topics =
                    await queryFactory.ResolveQuery<ITopicQuery>().GetTopicsWithQuestion();
                List<TopicViewModel> topicViewModels = new TopicService().GetTopicViewModels(topics);

                return Ok(topicViewModels);
            }
            else
            {
                topics =
                    await queryFactory.ResolveQuery<ITopicQuery>().GetTopFiveTopicsByCategoryId(categoryId);
            }


            return Ok(topics);

        }
        [HttpGet("/questions/api/{categoryId}/gettopicbycategoryid")]
        public async Task<IEnumerable<Topic>> GetTopicsByCategoryId(Guid categoryId)
        {
            IEnumerable<Topic> topicsByCategory = await queryFactory.ResolveQuery<ITopicQuery>().GetTopicsByCategoryId(categoryId);
            return topicsByCategory;
        }
        [HttpGet("/questions/api/{topicId}/getrelatedTopicsbytopicId")]
        public async Task<IEnumerable<Topic>> GetRelatedTopicsByTopicId(Guid topicId)
        {
            IEnumerable<Topic> relatedTopicsByCategory = await queryFactory.ResolveQuery<ITopicQuery>().GetRelatedTopicsByTopicId(topicId);
            return relatedTopicsByCategory;
        }

        #endregion

        [HttpGet("/questions/api/getlevel")]
        public async Task<IEnumerable<Level>> GetLevel()
        {
            IEnumerable<Level> levels = await queryFactory.ResolveQuery<ILevelQuery>().GetAllLevel();
            return levels;
        }
        [HttpGet("/questions/api/getlevelname/{levelId}")]
        public IActionResult GetLevelName(Guid levelId)
        {
            string levelName = string.Empty;
            if (levelId != Guid.Empty)
            {
                Level level = queryFactory.ResolveQuery<ILevelQuery>().GetLevelByLevelId(levelId);

                if (level != null)
                {
                    levelName = level.LevelName;
                }
            }
            return Ok(new
            {
                result = levelName
            });
        }

        [HttpGet("/questions/api/gettopicname/{topicId}")]
        public IActionResult GetTopicName(Guid topicId)
        {
            string topicName = string.Empty;
            if (topicId != Guid.Empty)
            {
                Topic topic = queryFactory.ResolveQuery<ITopicQuery>().GetTopicByTopicId(topicId);

                if (topic != null)
                {
                    topicName = topic.TopicName;
                }

            }

            return Ok(new
            {
                result = topicName
            });
        }


        #region Bookmark
        [HttpGet("/questions/api/getbookmark/{userId}")]
        public async Task<IActionResult> GetBookmark(Guid userId)
        {
            IEnumerable<Question> questionsByBookmarked = await queryFactory.ResolveQuery<IQuestionsQuery>().GetBookmark(userId);

            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionsByBookmarked, queryFactory, configuration, Guid.Empty);

            return Ok(questionViewModels);
        }
        [Authorize]
        [HttpPost("/questions/api/{questionId}/addbookmark")]
        public IActionResult AddBookMark(Guid questionId)
        {
            var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            AddBookmarkCommand cmd = new AddBookmarkCommand(loggedinUser, questionId);
            commandsFactory.ExecuteQuery(cmd);

            Boolean sueccessResult = false;
            if (cmd.Id != Guid.Empty)
            {
                //Already added book mark
                sueccessResult = true;
            }
            return Ok(new { result = sueccessResult });

        }


        #endregion

        #region Question
        [Authorize]
        [HttpPost("/questions/api/savequestion")]
        public IActionResult SaveQuestion([FromBody] AddQuestionViewModel question)
        {

            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            Guid? topicId;
            Guid? levelId;
            if (string.IsNullOrEmpty(question.TopicId))
            {
                topicId = null;
            }
            else
            {
                topicId = new Guid(question.TopicId);
            }
            if (string.IsNullOrEmpty(question.LevelId))
            {
                levelId = null;
            }
            else
            {
                levelId = new Guid(question.LevelId);
            }
            question.Title = new QuestionService().RemoveQuestionMark(question.Title);
            AddQuestionCommand cmd = new AddQuestionCommand(question.Title, question.Body, DateTime.Now, loggedinUser,
                question.CategoryIds, topicId, levelId, question.IsAnonymous);
            commandsFactory.ExecuteQuery(cmd);
            Guid questionId = cmd.Id;

            return Created($"questions/api/questions/{cmd.Id}", question);

        }
        [Authorize]
        [HttpPost("/questions/api/{questionId}/updatequestion")]
        public IActionResult UpdateQuestion([FromBody]AddQuestionViewModel model)
        {
            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            QuestionService questionService = new QuestionService();
            model.Title = questionService.RemoveQuestionMark(model.Title);

            UpdateQuestionCommand cmd = new UpdateQuestionCommand(model.Id, model.Title, model.Body,
                model.IsAnonymous);
            commandsFactory.ExecuteQuery(cmd);
            model.Title = "¿" + model.Title + " ?";
            return Ok(model);


        }
        [Authorize]
        [HttpPost("/questions/api/{questionId}/addquestionfollowing")]
        public IActionResult AddQuestionFollowing([FromBody]QuestionFollowingViewModel model)
        {

            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            if (loggedinUser != model.FollowedUserId)
            {
                AddQuestionFollowingCommand command = new AddQuestionFollowingCommand(loggedinUser,
                    model.FollowedUserId, model.QuestionId, model.AnswerId);
                commandsFactory.ExecuteQuery(command);
            }
            return Ok();


        }


        #endregion

        #region  latest question Best Question and More Views Region

        [HttpGet("/questions/api/{categoryId}/getlatestquestionbydate")]
        public async Task<IActionResult> GetLatestQuestionByDate(Guid categoryId)
        {
            IEnumerable<Question> questionList = null;

            Guid loggedinUser = Guid.Empty;

            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            if (categoryId == Guid.Empty)
            {
                //vertodas category soo let us fetch all category
                questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().Execute();
            }
            else
            {
                questionList = await queryFactory.ResolveQuery<IQuestionsQuery>()
                    .GetLatestQuestion(loggedinUser, categoryId);
            }


            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionList, queryFactory,
                configuration, loggedinUser);

            return Ok(questionViewModels);
        }


        [HttpGet("/questions/api/{categoryId}/getmorequestionbyviewcount")]
        public async Task<IActionResult> GetMoreViewedQuestionByViewCount(Guid categoryId)
        {
            IEnumerable<Question> questionList;
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                /// if user is logged in, then fetch questions by user following a category
                questionList = await queryFactory.ResolveQuery<IQuestionsByUserFollowingQuery>().GetMoreViewedQuestionByViewCountByCategoryFollowing(loggedinUser, categoryId);
            }
            else
            {
                questionList = await queryFactory.ResolveQuery<IQuestionsQuery>()
                    .GetMoreViewedQuestionByViewCount(categoryId);
            }

            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration, loggedinUser);

            return Ok(questionViewModels);
        }

        [HttpGet("/questions/api/{categoryId}/bestquestionbytotallike")]
        public async Task<IActionResult> GetBestQuestionbyTotalLike(Guid categoryId)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>()
                .GetBestQuestionbyTotalLike(categoryId);
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration, loggedinUser);

            return Ok(questionViewModels);
        }


        [HttpGet("/questions/api/questions/{questionId}/getlatestanswer")]
        public IActionResult GetLatestAnswer(Guid questionId)
        {
            Question question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(questionId);

            question.Answers =
                question.Answers.OrderByDescending(d => d.CreatedOn).ToList();
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            QuestionViewModel questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory, configuration, loggedinUser);
            return Ok(questionViewModel);
        }
        [HttpGet("/questions/api/questions/{questionId}/getbestanswer")]
        public IActionResult GetBestAnswer(Guid questionId)
        {
            Question question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(questionId);

            question.Answers = question.Answers.OrderByDescending(l => l.Likes.Count).ThenByDescending(x => x.CreatedOn).ToList();
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            QuestionViewModel questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory, configuration, loggedinUser);

            return Ok(questionViewModel);
        }


        #endregion

        #region Filters
        [HttpGet("/questions/api/{pageNumber}/FilterbyCategoryTopicNLevel")]
        public async Task<IActionResult> FilterbyCategoryTopicNLevel(FilterParameter filterParameter, int pageNumber = 0)
        {
            if (filterParameter.CategoryId == new Guid("7639b416-8d1c-4119-b58e-143cb860e8a6"))
            {
                filterParameter.CategoryId = null;
            }

            List<QuestionViewModel> questionViewModels = new List<QuestionViewModel>();
            //Done
            if (!filterParameter.CategoryId.HasValue &&
                !filterParameter.TopicId.HasValue &&
                !filterParameter.LevelId.HasValue
                )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategory(pageNumber,filterParameter.MostLikedQuestion,filterParameter.MostViewedQuestion));

            }
            //done
            if (filterParameter.CategoryId.HasValue &&
               !filterParameter.TopicId.HasValue &&
               !filterParameter.LevelId.HasValue
               )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryIdOnly(filterParameter.CategoryId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }
            //done
            if (filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              !filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryAndTopic(filterParameter.CategoryId.Value, filterParameter.TopicId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }

            if (filterParameter.CategoryId.HasValue &&
              !filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryAndLevel(filterParameter.CategoryId.Value, filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }

            if (filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryAndTopicAndLevel(filterParameter.CategoryId.Value, filterParameter.TopicId.Value, filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }

            /////Upto this is ok
            if (!filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategoryTopicAndLevel
                (filterParameter.TopicId.Value, filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }
            if (!filterParameter.CategoryId.HasValue &&
              !filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategoryLevel(filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }
            if (!filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              !filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategoryTopic(filterParameter.TopicId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }


            if (filterParameter.QuestionWithAnswer)
            {
                questionViewModels = questionViewModels.Where(x => x.Answers.Count != 0).ToList();
            }

            if (filterParameter.QuestionWithoutAnswer)
            {
                questionViewModels = questionViewModels.Where(x => x.Answers.Count == 0).ToList();
            }
            return Ok(questionViewModels);
        }

        [HttpGet("/questions/api/questions/countwithfilter")]
        public async Task<IActionResult> CountWithFilter(FilterParameter filterParameter)
        {
            int pageNumber = -1;
            if (filterParameter.CategoryId == new Guid("7639b416-8d1c-4119-b58e-143cb860e8a6"))
            {
                filterParameter.CategoryId = null;
            }
            List<QuestionViewModel> questionViewModels = new List<QuestionViewModel>();
            //Done
            if (!filterParameter.CategoryId.HasValue &&
                !filterParameter.TopicId.HasValue &&
                !filterParameter.LevelId.HasValue
                )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategory(pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }
            //done
            if (filterParameter.CategoryId.HasValue &&
               !filterParameter.TopicId.HasValue &&
               !filterParameter.LevelId.HasValue
               )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryIdOnly(filterParameter.CategoryId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }
            //done
            if (filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              !filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryAndTopic(filterParameter.CategoryId.Value, filterParameter.TopicId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }

            if (filterParameter.CategoryId.HasValue &&
              !filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryAndLevel(filterParameter.CategoryId.Value, filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }

            if (filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByCategoryAndTopicAndLevel(filterParameter.CategoryId.Value, filterParameter.TopicId.Value, filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }

            /////Upto this is ok
            if (!filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategoryTopicAndLevel
                (filterParameter.TopicId.Value, filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }
            if (!filterParameter.CategoryId.HasValue &&
              !filterParameter.TopicId.HasValue &&
              filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategoryLevel(filterParameter.LevelId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }
            if (!filterParameter.CategoryId.HasValue &&
              filterParameter.TopicId.HasValue &&
              !filterParameter.LevelId.HasValue
              )
            {
                questionViewModels = await Task.Run(() => new QuestionServiceOptimized().FilterQuestionByGeneralCategoryTopic(filterParameter.TopicId.Value, pageNumber, filterParameter.MostLikedQuestion, filterParameter.MostViewedQuestion));
            }

            var categoriesSummary = new CategoriesSummary();
            if (filterParameter.CategoryId.HasValue)
            {
                categoriesSummary.TotalFollowers =
                    queryFactory.ResolveQuery<ICategoriesTotalUsersQuery>().Execute(filterParameter.CategoryId.Value);
            }
            else
            {
                categoriesSummary.TotalFollowers =
                    queryFactory.ResolveQuery<ICategoriesTotalUsersQuery>().Execute(new Guid("7639B416-8D1C-4119-B58E-143CB860E8A6"));
            }
           
            categoriesSummary.TotalQuestions = questionViewModels.Count();
            categoriesSummary.TotalAnsweredQuestion = questionViewModels.Where(x => x.Answers.Count != 0).Count();
            categoriesSummary.TotalUnAnsweredQuestion = categoriesSummary.TotalQuestions -
                                                        categoriesSummary.TotalAnsweredQuestion;
            return Ok(categoriesSummary);
        }
        #endregion

        #region Popover
        //Depends on answerId.As answer not appread then that is question ...Load data according to
        [HttpGet("/questions/api/getreport/{answerId}")]
        public IActionResult GetReport(Guid? answerId)
        {
            var report = new Report();

            List<Report> reports;
            if (answerId.HasValue)
            {
                reports = report.GetAnswerReports();
            }
            else
            {
                reports = report.GetQuestionReports();
            }
            return Ok(reports);
        }
        [Authorize]
        [HttpPost("/questions/api/savereport")]
        public IActionResult SaveReport([FromBody]QuestionReportViewModel model)
        {

            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            /// if user is logged in, then fetch questions by user following a category

            QuestionReportCommand cmd = new QuestionReportCommand(model.QuestionId, model.Title, model.Comment,
                model.AnswerId, loggedinUser);

            commandsFactory.ExecuteQuery(cmd);
            return Ok();

        }

        #region posted question

        [HttpGet("/questions/api/getsharequestion/{userId}")]
        public async Task<IActionResult> GetShareQuestion(Guid userId)
        {
            IEnumerable<Question> questionByBookmarked = await queryFactory.ResolveQuery<IQuestionsQuery>().GetSharedQuestion(userId);
            Guid loggedinUser = Guid.Empty;
            if (User.Identity.IsAuthenticated)
            {
                var uId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(uId?.ElementAt(0).ToString());
            }
            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionByBookmarked, queryFactory, configuration, loggedinUser);
            return Ok(questionViewModels);
        }
        [Authorize]
        [HttpPost("/questions/api/savesharequestion/{questionId}")]
        public IActionResult SaveShareQuestion(Guid questionId)
        {

            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            AddShareQuestionCommand command = new AddShareQuestionCommand(loggedinUser, questionId);
            commandsFactory.ExecuteQuery(command);
            Boolean successResult = false;
            if (command.Id != Guid.Empty)
            {
                successResult = true;
            }

            return Ok(new
            {
                result = successResult
            });


        }
        #endregion

        #endregion

        [HttpGet("/questions/api/getdirectquestion/{questionAskedToUser}")]
        public async Task<IActionResult> GetDirectQuestion(Guid questionAskedToUser)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().ExecuteDirectQuestion(questionAskedToUser);

            IEnumerable<QuestionViewModel> questionViewModels = new QuestionService().GetDirectQuestionViewModels(questionList,
                queryFactory, configuration);

            return Ok(questionViewModels);
        }

        [Authorize]
        [HttpPost("/questions/api/savedirectquestion")]
        public async Task<IActionResult> SaveDirectQuestion([FromBody]AddQuestionViewModel question)
        {
            var userId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            Guid? topicId;
            Guid? levelId;
            if (string.IsNullOrEmpty(question.TopicId))
            {
                topicId = null;
            }
            else
            {
                topicId = new Guid(question.TopicId);
            }
            if (string.IsNullOrEmpty(question.LevelId))
            {
                levelId = null;
            }
            else
            {
                levelId = new Guid(question.LevelId);
            }
            question.Title = new QuestionService().RemoveQuestionMark(question.Title);

            DirectQuestionCommand cmd = new DirectQuestionCommand(question.Title, question.Body, DateTime.Now,
                loggedinUser, question.CategoryIds, topicId, levelId, question.IsAnonymous, true,
                question.QuestionAskedToUser.Value);
            commandsFactory.ExecuteQuery(cmd);

            Guid questionId = cmd.Id;
            if (question.QuestionAskedToUser.Value != loggedinUser)
            {
                string webRootPath = hostingEnvironment.WebRootPath;
                await new SendEmailService().SendDirectQuestionEmailAsync(queryFactory, webRootPath,
                    "Pregunta directa", question.Title, question.Body, loggedinUser,
                    question.QuestionAskedToUser.Value);
            }
            return Ok();

        }

        [Authorize]
        [HttpGet("/questions/api/getdraftedquestions")]
        public IActionResult GetDraftedQuestions()
        {
            var currentUserId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());

            IEnumerable<Question> questions =
                queryFactory.ResolveQuery<IQuestionsQuery>().DraftedQuestionAnswers(loggedinUser);

            IEnumerable<QuestionViewModel> questionViewModels =
                new QuestionService().GetQuestionViewModelsForDraftAnswer(questions, queryFactory, configuration);
            return Ok(questionViewModels);

        }
        [Authorize]
        [HttpPost("/questions/api/savedraftedanswers")]
        public async Task<IActionResult> SaveDraftedAnswers([FromBody]AddAnswerViewModel answer)
        {

            var currentUserId =
                User.Claims.Where(
                        x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                    .Select(x => x.Value);
            Guid loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());

            List<String> imgTags = Base64Image.GetImagesInHTMLString(answer.Text);

            foreach (String imgTag in imgTags)
            {
                string fileLink = String.Empty;
                string extension = Base64Image.GetExtension(imgTag);
                if (!String.IsNullOrEmpty(extension))
                {
                    Base64Image base64Image = Base64Image.Parse(imgTag);
                    var byteArray = base64Image.FileContents;

                    String imageName = Guid.NewGuid().ToString() + base64Image.Extension;

                    AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                    fileLink = await azureFileUploadHelper.SaveQuestionAnswerInAzure(base64Image.baseStream,
                        imageName, base64Image.ContentType);
                }
                answer.Text = answer.Text.Replace(imgTag, fileLink);

            }

            DraftedAnswerCommand command = new DraftedAnswerCommand(answer.Id, answer.Text);
            commandsFactory.ExecuteQuery(command);
            return Ok();

        }
    }
}

