using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Data;
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
using UserProfile.Command.Commands;
using UserProfile.Domain;
using UserProfile.Query.Queries;
using System.Text.RegularExpressions;
using System.IO;
using AltaPerspectiva.Core.Helpers;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using Microsoft.AspNetCore.Authorization;
using UserProfile.Domain.ReadModel;
using UserProfile.Query;
using UserProfile.Query.Interfaces;
using Microsoft.AspNetCore.Hosting;

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

        public QuestionsController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IConfigurationRoot _configuration, IHostingEnvironment _hostingEnvironment)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            configuration = _configuration;
            hostingEnvironment = _hostingEnvironment;
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
        public async Task<IActionResult> Get()
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().Execute();

            List<QuestionViewModel> questions;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                questions = new QuestionService().GetQuestionViewModelForLoggedinUser(questionList, queryFactory, configuration,loggedinUser);

            }
            else
            {
                questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);

            }

            return Ok(questions);
        }

        [HttpGet("/questions/api/{topicId}/questions/{categoryId}")]
        public async Task<IActionResult> GetQuestionByTopicNCategoryId(Guid topicId, Guid categoryId)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().GetQuestionByTopciNCategoryId(topicId, categoryId);

            IEnumerable<QuestionViewModel> questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);

            return Ok(questions);
        }

        [HttpGet("/questions/api/questions/search")]
        public async Task<IActionResult> GetSearchQuestion()
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsSearchQuery>().Execute();
            return Ok(questionList);
        }

        [HttpGet("/questions/api/questions/notanswered/{id}")]
        public async Task<IActionResult> GetQuestyionsNotAnswered(Guid id)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsNotAnsweredQuery>().Execute(id);

            IEnumerable<QuestionViewModel> questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);
            return Ok(questions);
        }

        [HttpGet("/questions/api/questions/answered/{id}")]
        public async Task<IActionResult> GetQuestyionsAnswered(Guid id)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsAnsweredQuery>().Execute(id);
            IEnumerable<QuestionViewModel> questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);
            return Ok(questions);
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/{id}")]
        public IActionResult Get(Guid id)
        {
            Question question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(id);

            QuestionViewModel questionViewModel = new QuestionViewModel();
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                questionViewModel = new QuestionService().GetQuestionViewModelForLoggedinUser(question, queryFactory, configuration, loggedinUser);
            }
            else
            {
                questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory, configuration);
            }

            return Ok(questionViewModel);
        }

        // GET /questions/api/questions/category/{id}
        [HttpGet("/questions/api/questions/category/{id}")]
        public async Task<IActionResult> GetQuestionsByCategoryId(Guid id)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsByCategoryIdQuery>().Execute(id);

            List<QuestionViewModel> questions = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);

            return Ok(questions);
        }

        // GET /questions/api/questions/topic/{id}
        [HttpGet("/questions/api/questions/topic/{id}")]
        public async Task<IActionResult> GetQuestionsByTopicId(Guid id)
        {
            IEnumerable<Question> questions = await queryFactory.ResolveQuery<IGetQuestionByTopicId>().Execute(id);

            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questions, queryFactory, configuration);

            return Ok(questionViewModels);
        }

        //get  /questions/api/questions/reatedquestions/{id}
        [HttpGet("/questions/api/questions/reatedquestions/{id}")]
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
            IEnumerable<Comment> comments = await queryFactory.ResolveQuery<IQuestionCommentsQuery>().Execute(id);
            IEnumerable<QuestionCommentViewModel> commentsVM = new QuestionService().GetComments(comments, queryFactory, configuration);
            return Ok(commentsVM);
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/answer/{id}/comments")]
        public async Task<IActionResult> GetAnswerComments(Guid id)
        {
            IEnumerable<Comment> comments = await queryFactory.ResolveQuery<IAnswerCommentsQuery>().Execute(id);
            IEnumerable<QuestionCommentViewModel> commentsVM = new QuestionService().GetComments(comments, queryFactory, configuration);
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

            UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, loggedinUser,
                configuration);
            comment.UserViewModel = userViewModel;
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

            UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, loggedinUser, configuration);
            comment.UserViewModel = userViewModel;
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
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{like.QuestionId}/comment/{like.Id}", like);



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

            AddLikeCommand cmd = new AddLikeCommand(like.QuestionId, like.AnswerId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{like.QuestionId}/answer/{like.AnswerId}/comment/{like.Id}",
                like);


        }

        [HttpGet("/questions/api/question/{questionId}/questionlike")]
        public async Task<IActionResult> GetQuestionLike(Guid questionId)
        {
            IEnumerable<Like> likes = await queryFactory.ResolveQuery<ILikeQuery>().Execute(questionId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (var like in likes)
            {
                Guid userId = like.UserId;
                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId, configuration);
                userViewModels.Add(userViewModel);
            }
            return Ok(userViewModels);

        }
        [HttpGet("/questions/api/question/{answerId}/answerlike")]
        public async Task<IActionResult> GetAnswerLike(Guid answerId)
        {
            IEnumerable<Like> likes = await queryFactory.ResolveQuery<ILikeQuery>().GetLikeByAnswerId(answerId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (var like in likes)
            {
                Guid userId = like.UserId;
                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId, configuration);
                userViewModels.Add(userViewModel);
            }
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

            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionsByBookmarked, queryFactory, configuration);

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

            Guid loggedinUser;

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
                configuration);

            return Ok(questionViewModels);
        }


        [HttpGet("/questions/api/{categoryId}/getmorequestionbyviewcount")]
        public async Task<IActionResult> GetMoreViewedQuestionByViewCount(Guid categoryId)
        {
            IEnumerable<Question> questionList;
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                /// if user is logged in, then fetch questions by user following a category
                questionList = await queryFactory.ResolveQuery<IQuestionsByUserFollowingQuery>().GetMoreViewedQuestionByViewCountByCategoryFollowing(loggedinUser, categoryId);
            }
            else
            {
                questionList = await queryFactory.ResolveQuery<IQuestionsQuery>()
                    .GetMoreViewedQuestionByViewCount(categoryId);
            }

            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);

            return Ok(questionViewModels);
        }

        [HttpGet("/questions/api/{categoryId}/bestquestionbytotallike")]
        public async Task<IActionResult> GetBestQuestionbyTotalLike(Guid categoryId)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>()
                .GetBestQuestionbyTotalLike(categoryId);

            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);

            return Ok(questionViewModels);
        }


        [HttpGet("/questions/api/questions/{questionId}/getlatestanswer")]
        public IActionResult GetLatestAnswer(Guid questionId)
        {
            Question question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(questionId);

            question.Answers =
                question.Answers.OrderByDescending(d => d.CreatedOn).ToList();

            QuestionViewModel questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory, configuration);
            return Ok(questionViewModel);
        }
        [HttpGet("/questions/api/questions/{questionId}/getbestanswer")]
        public IActionResult GetBestAnswer(Guid questionId)
        {
            Question question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(questionId);

            question.Answers = question.Answers.OrderByDescending(l => l.Likes.Count).ThenByDescending(x => x.CreatedOn).ToList();


            QuestionViewModel questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory, configuration);

            return Ok(questionViewModel);
        }


        #endregion



        #region Filters
        [HttpGet("/questions/api/FilterbyCategoryTopicNLevel")]
        public async Task<IActionResult> FilterbyCategoryTopicNLevel(FilterParameter filterParameter)
        {
            // Guid emptyGuid=Guid.Empty;

            var categoryId = filterParameter.CategoryId;
            var topicId = filterParameter.TopicId;
            var levelId = filterParameter.LevelId;
            IEnumerable<Question> questions = new List<Question>();


            //Filter by Category ,Topic   and level
            if (categoryId.HasValue && topicId.HasValue && levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilterbyCategoryTopicandlevel(categoryId.Value, topicId.Value, levelId.Value);
            }
            //Filter by category AND TOPIC
            else if (categoryId.HasValue && topicId.HasValue && !levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilterbycategoryANDTOPIC(categoryId.Value, topicId.Value);

            }
            //Filter by category and level
            else if (categoryId.HasValue && !topicId.HasValue && levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .Filterbycategoryandlevel(categoryId.Value, levelId.Value);

            }
            //Filter by Topic and level
            else if (!categoryId.HasValue && topicId.HasValue && levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilterbyTopicAndLevel(topicId.Value, levelId.Value);

            }
            //Filter by category only
            else if (categoryId.HasValue && !topicId.HasValue && !levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .Filterbycategoryonly(categoryId.Value);

            }

            //Filtered by topic only
            else if (!categoryId.HasValue && topicId.HasValue && !levelId.HasValue)
            {
                questions =
                     await queryFactory.ResolveQuery<IQuestionsQuery>()
                         .Filteredbytopiconly(topicId.Value);

            }
            //Filtered by level only
            else if (!categoryId.HasValue && !topicId.HasValue && levelId.HasValue)
            {
                questions =
                     await queryFactory.ResolveQuery<IQuestionsQuery>()
                         .Filteredbylevelonly(levelId.Value);

            }
            //Filtered General Category only
            else //(categoryId == emptyGuid && topicId == emptyGuid && levelId == emptyGuid)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilteredGeneralCategoryonly();

            }
            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questions, queryFactory, configuration);

            return Ok(questionViewModels);
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

            List<QuestionViewModel> questionViewModels = new QuestionService().GetQuestionViewModels(questionByBookmarked, queryFactory, configuration);
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

