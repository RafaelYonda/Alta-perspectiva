using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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


//using Questions.Domain;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Area.Questions
{
    [Area("Questions")]
    public class QuestionsController : Controller
    {
        #region Ctor and config
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        private readonly IConfigurationRoot configuration;

        public QuestionsController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IConfigurationRoot _configuration)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            configuration = _configuration;
        }


        [HttpGet("/questions/api/questions/config")]
        public IActionResult GetConfig()
        {
            var config = new Config();
            config.ProfileImage = configuration["ProfileImage"];
            config.CategoryImage = configuration["CategoryImage"];
            return Ok(config);
        }
        #endregion
        // GET: /questions/api/questions
        [HttpGet("/questions/api/questions")]
        public async Task<IActionResult> Get()
        {
            IEnumerable<Question> questionList = null;

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                /// if user is logged in, then fetch questions by user following a category
                questionList = await queryFactory.ResolveQuery<IQuestionsByUserFollowingQuery>().Execute(loggedinUser);
            }
            else
            {
                questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().Execute();
            }
            List<Guid> userList = new List<Guid>();

            foreach (var question in questionList)
            {
                userList.Add(question.UserId);
                List<Guid> anserUserList = question.Answers.Select(x => x.UserId).Distinct().ToList();
                if (anserUserList.Any())
                {
                    userList.AddRange(anserUserList);
                }
                List<Guid> answerLikeUser = question.Answers.SelectMany(x => x.Likes.Select(l => l.UserId)).Distinct().ToList();
                if (answerLikeUser.Any())
                {
                    userList.AddRange(answerLikeUser);
                }

            }
            userList = userList.Distinct().ToList();
            List<UserViewModel> userViewModels = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(userList).Select(x => new UserViewModel
            {
                CredentialId = x.Id,
                UserId = x.UserId,
                Name = x.FirstName + "" + x.LastName,
                ImageUrl = x.ImageUrl,
                Occupation = "Plz add"
            }).ToList();

            List<QuestionViewModel> questions = new List<QuestionViewModel>();

            questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory, userViewModels);

            

            return Ok(questions);
        }

        [HttpGet("/questions/api/{topicId}/questions/{categoryId}")]
        public async Task<IActionResult> GetQuestionByTopicNCategoryId(Guid topicId, Guid categoryId)
        {
            IEnumerable<Question> questionList = null;

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                // if user is logged in, then fetch questions by user following a category
                questionList = await queryFactory.ResolveQuery<IQuestionsByUserFollowingQuery>().GetQuestionByTopciNCategoryId(loggedinUser, topicId, categoryId);
            }
            else
            {
                questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().GetQuestionByTopciNCategoryId(topicId, categoryId);
            }
            List<Guid> userList = new List<Guid>();

            foreach (var question in questionList)
            {
                userList.Add(question.UserId);
                List<Guid> anserUserList = question.Answers.Select(x => x.UserId).Distinct().ToList();
                if (anserUserList.Any())
                {
                    userList.AddRange(anserUserList);
                }
                List<Guid> answerLikeUser = question.Answers.SelectMany(x => x.Likes.Select(l => l.UserId)).Distinct().ToList();
                if (answerLikeUser.Any())
                {
                    userList.AddRange(answerLikeUser);
                }

            }
            userList = userList.Distinct().ToList();
            List<UserViewModel> UserViewModels = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(userList).Select(x => new UserViewModel
            {
                CredentialId = x.Id,
                UserId = x.UserId,
                Name = x.FirstName + "" + x.LastName,
                ImageUrl = x.ImageUrl
            }).ToList();
            List<QuestionViewModel> questions = new List<QuestionViewModel>();

            questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory, UserViewModels);

            return Ok(questions);
        }

        [HttpGet("/questions/api/questions/search")]
        public async Task<IActionResult> GetSearchQuestion()
        {
            var questionList = await queryFactory.ResolveQuery<IQuestionsSearchQuery>().Execute();
            return Ok(questionList);
        }

        [HttpGet("/questions/api/questions/notanswered/{id}")]
        public async Task<IActionResult> GetQuestyionsNotAnswered(Guid id)
        {
            IEnumerable<Question> questionList = null;
            questionList = await queryFactory.ResolveQuery<IQuestionsNotAnsweredQuery>().Execute(id);

            var questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory);
            return Ok(questions);
        }

        [HttpGet("/questions/api/questions/answered/{id}")]
        public async Task<IActionResult> GetQuestyionsAnswered(Guid id)
        {
            IEnumerable<Question> questionList = null;
            questionList = await queryFactory.ResolveQuery<IQuestionsAnsweredQuery>().Execute(id);
            var questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory);
            return Ok(questions);
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/{id}")]
        public IActionResult Get(Guid id)
        {
            var question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(id);

            var questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory);
            return Ok(questionViewModel);
        }

        // GET /questions/api/questions/category/{id}
        [HttpGet("/questions/api/questions/category/{id}")]
        public async Task<IActionResult> GetQuestionsByCategoryId(Guid id)
        {
            IEnumerable<Question> questionList = null;
            questionList = await queryFactory.ResolveQuery<IQuestionsByCategoryIdQuery>().Execute(id);

            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory);

            return Ok(questions);
        }

        // GET /questions/api/questions/topic/{id}
        [HttpGet("/questions/api/questions/topic/{id}")]
        public async Task<IActionResult> GetQuestionsByTopicId(Guid id)
        {
            IEnumerable<Question> questionList = null;
            questionList = await queryFactory.ResolveQuery<IGetQuestionByTopicId>().Execute(id);

            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory);

            return Ok(questions);
        }

        //get  /questions/api/questions/reatedquestions/{id}
        [HttpGet("/questions/api/questions/reatedquestions/{id}")]
        public async Task<IActionResult> GetRelatedQuestions(Guid id)
        {
            var questions = await queryFactory.ResolveQuery<IRelatedQuestionsQuery>().Execute(id);
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
            var comments = await queryFactory.ResolveQuery<IQuestionCommentsQuery>().Execute(id);
            var commentsVM = new QuestionService().GetComments(comments, queryFactory);
            return Ok(commentsVM);
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/answer/{id}/comments")]
        public async Task<IActionResult> GetAnswerComments(Guid id)
        {
            var comments = await queryFactory.ResolveQuery<IAnswerCommentsQuery>().Execute(id);
            var commentsVM = new QuestionService().GetComments(comments, queryFactory);
            return Ok(commentsVM);
        }

        // POST /questions/api/question/{id}/answer
        [HttpPost("/questions/api/question/{id}/answer")]
        public IActionResult PostAnswer([FromBody]AddAnswerViewModel answer)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            AddAnswerCommand cmd = new AddAnswerCommand(answer.Text, answer.AnswerDate, answer.QuestionId, loggedinUser, answer.IsDrafted, answer.IsAnonymous);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{answer.QuestionId}/answer/{answer.Id}", answer);
        }

        [HttpPost("/questions/api/question/{id}/comment")]
        public AddCommentViewModel PostQuestionComment([FromBody]AddCommentViewModel comment)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            AddCommentCommand cmd = new AddCommentCommand(comment.CommentText, comment.QuestionId, null, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            var userViewModel = new UserService().GetUserViewModel(queryFactory, loggedinUser);
            comment.UserViewModel = userViewModel;
            return comment;


        }

        [HttpPost("/questions/api/question/answer/{answerId}/comment")]
        public AddCommentViewModel PostAnswerComment([FromBody]AddCommentViewModel comment)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            AddCommentCommand cmd = new AddCommentCommand(comment.CommentText, comment.QuestionId, comment.AnswerId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            var userViewModel = new UserService().GetUserViewModel(queryFactory, loggedinUser);
            comment.UserViewModel = userViewModel;
            return comment;
        }

        #region Question and Answer Likes

        [HttpGet("/questions/api/question/{questionId}/getqestionalreadyLiked")]
        public IActionResult GetQuestionAlreadyLiked(Guid questionId)
        {

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            Boolean alreadyLiked = queryFactory.ResolveQuery<ILikeQuery>()
               .GetQuestionBeforeLike(questionId, loggedinUser);
            return Ok(new { result = alreadyLiked });
        }

        [HttpPost("/questions/api/question/{id}/like")]
        public IActionResult PostQuestionLike([FromBody]AddLikeViewModel like)
        {

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            like.UserId = loggedinUser;

            AddLikeCommand cmd = new AddLikeCommand(like.QuestionId, null, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{like.QuestionId}/comment/{like.Id}", like);


        }

        [HttpGet("/questions/api/question/getansweralreadyliked/{answerId}")]
        public IActionResult GetAnswerAlreadyLiked(Guid answerId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            Boolean alreadyLiked = queryFactory.ResolveQuery<ILikeQuery>()
              .GetAnswerBeforeLike(answerId, loggedinUser);
            return Ok(new { result = alreadyLiked });
        }

        [HttpPost("/questions/api/question/answer/{answerId}/like")]
        public IActionResult PostAnswerLike([FromBody]AddLikeViewModel like)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            like.UserId = loggedinUser;

            AddLikeCommand cmd = new AddLikeCommand(like.QuestionId, like.AnswerId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{like.QuestionId}/answer/{like.AnswerId}/comment/{like.Id}", like);

        }

        [HttpGet("/questions/api/question/{questionId}/questionlike")]
        public async Task<IActionResult> GetQuestionLike(Guid questionId)
        {
            var likes = await queryFactory.ResolveQuery<ILikeQuery>().Execute(questionId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (var like in likes)
            {
                Guid userId = like.UserId;
                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId);
                userViewModels.Add(userViewModel);
            }
            return Ok(userViewModels);

        }
        [HttpGet("/questions/api/question/{answerId}/answerlike")]
        public async Task<IActionResult> GetAnswerLike(Guid answerId)
        {
            var likes = await queryFactory.ResolveQuery<ILikeQuery>().GetLikeByAnswerId(answerId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (var like in likes)
            {
                Guid userId = like.UserId;
                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId);
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
        //all like added 

        [HttpGet("/questions/api/answerlike/{answerId}")]
        public async Task<IActionResult> AnswerLike(Guid answerId)
        {
            var likes = await queryFactory.ResolveQuery<ILikeQuery>().Answer(answerId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (var like in likes)
            {
                Guid userId = like.UserId;

                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId);
                userViewModels.Add(userViewModel);

            }
            return Ok(userViewModels);


        }

        [HttpPost("/questions/api/savequestionasblog/{questionId}")]
        public IActionResult SaveQuestionAsBlog(Guid questionId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            AddShareQuestionCommand command = new AddShareQuestionCommand(loggedinUser, questionId);
            commandsFactory.ExecuteQuery(command);


            //List<UserViewModel> userViewModels = new List<UserViewModel>();
            //foreach (var like in likes)
            //{
            //    Guid userId = like.UserId;

            //    UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId);
            //    userViewModels.Add(userViewModel);

            //}
            //return Ok(userViewModels);
            return Ok();
        }

        #region Top Five Region
        //Questions
        //[HttpGet("/questions/api/gettopfivequestion")]
        //public async Task<IActionResult> GetTopFiveQuestion()
        //{

        //    var topFiveQuestion = await queryFactory.ResolveQuery<IQuestionsQuery>().GetTopFiveQuestion();

        //    foreach (var question in topFiveQuestion)
        //    {
        //        question.Title = "¿" + question.Title + "?";
        //    }


        //    return Ok(topFiveQuestion);


        //}
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
            IEnumerable<Topic> topFiveTopics = new List<Topic>();
            //  IEnumerable<Question> questions=new List<Question>();
            if (categoryId == Guid.Empty)
            {
                topFiveTopics =
                    await queryFactory.ResolveQuery<ITopicQuery>().GetTopFiveTopics();


            }
            else
            {
                topFiveTopics =
                    await queryFactory.ResolveQuery<ITopicQuery>().GetTopFiveTopicsByCategoryId(categoryId);


            }


            return Ok(topFiveTopics);

        }
        [HttpGet("/questions/api/{categoryId}/gettopicbycategoryid")]
        public async Task<IEnumerable<Topic>> GetTopicsByCategoryId(Guid categoryId)
        {
            var topicsByCategory = await queryFactory.ResolveQuery<ITopicQuery>().GetTopicsByCategoryId(categoryId);
            return topicsByCategory;
        }
        [HttpGet("/questions/api/{topicId}/getrelatedTopicsbytopicId")]
        public async Task<IEnumerable<Topic>> GetRelatedTopicsByTopicId(Guid topicId)
        {
            var relatedTopicsByCategory = await queryFactory.ResolveQuery<ITopicQuery>().GetRelatedTopicsByTopicId(topicId);
            return relatedTopicsByCategory;
        }

        #endregion



        [HttpGet("/questions/api/getlevel")]
        public async Task<IEnumerable<Level>> GetLevel()
        {
            var levels = await queryFactory.ResolveQuery<ILevelQuery>().GetAllLevel();
            return levels;
        }
        [HttpGet("/questions/api/getlevelname/{levelId}")]
        public IActionResult GetLevelName(Guid levelId)
        {
            var level = queryFactory.ResolveQuery<ILevelQuery>().GetLevelByLevelId(levelId);
            return Ok(level?.LevelName);
        }

        [HttpGet("/questions/api/gettopicname/{topicId}")]
        public IActionResult GetTopicName(Guid topicId)
        {
            var topic = queryFactory.ResolveQuery<ITopicQuery>().GetTopicByTopicId(topicId);
            return Ok(topic?.TopicName);
        }


        #region Bookmark
        [HttpGet("/questions/api/getbookmark")]
        public async Task<IActionResult> GetBookmark()
        {

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            var questionByBookmarked = await queryFactory.ResolveQuery<IQuestionsQuery>().GetBookmark(loggedinUser);
            List<QuestionViewModel> questions = new List<QuestionViewModel>();

            questions = new QuestionService().GetQuestionViewModel(questionByBookmarked, queryFactory);

            return Ok(questions);
        }




        [HttpPost("/questions/api/{questionId}/addbookmark")]
        public IActionResult AddBookMark(Guid questionId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            AddBookmarkCommand cmd = new AddBookmarkCommand(loggedinUser, questionId);

            commandsFactory.ExecuteQuery(cmd);

            return Created($"/questions/api/{cmd.Id}/addbookmark", questionId);
        }


        #endregion


        #region Question
        [HttpPost("/questions/api/savequestion")]
        public IActionResult SaveQuestion([FromBody]AddQuestionViewModel question)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
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
            AddQuestionCommand cmd = new AddQuestionCommand(question.Title, question.Body, DateTime.Now, loggedinUser, question.CategoryIds, topicId, levelId, question.IsAnonymous);
            commandsFactory.ExecuteQuery(cmd);
            Guid questionId = cmd.Id;

            return Created($"questions/api/questions/{cmd.Id}", question);
        }
        [HttpPost("/questions/api/{questionId}/updatequestion")]
        public IActionResult UpdateQuestion([FromBody]AddQuestionViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }


            UpdateQuestionCommand cmd = new UpdateQuestionCommand(model.Id, model.Title, model.Body, model.IsAnonymous);
            commandsFactory.ExecuteQuery(cmd);
            return Ok();

        }

        [HttpPost("/questions/api/{questionId}/addquestionfollowing")]
        public IActionResult AddQuestionFollowing([FromBody]QuestionFollowingViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            AddQuestionFollowingCommand command = new AddQuestionFollowingCommand(loggedinUser, model.FollowedUserId, model.QuestionId, model.AnswerId);
            commandsFactory.ExecuteQuery(command);

            return Ok();

        }


        #endregion

        #region  latest question Best Question and More Views Region
        [HttpGet("/questions/api/{categoryId}/getlatestquestionbydate")]
        public async Task<IActionResult> GetLatestQuestionByDate(Guid categoryId)
        {
            IEnumerable<Question> questionList = null;

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
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

            List<QuestionViewModel> questions = new List<QuestionViewModel>();

            questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory);

            return Ok(questions);
        }

        [HttpGet("/questions/api/{categoryId}/getmorequestionbyviewcount")]
        public async Task<IActionResult> GetMoreViewedQuestionByViewCount(Guid categoryId)
        {
            IEnumerable<Question> questionList = null;

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

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

            List<QuestionViewModel> questions = new List<QuestionViewModel>();

            questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory);

            return Ok(questions);
        }
        //not done with api
        [HttpGet("/questions/api/{categoryId}/bestquestionbytotallike")]
        public async Task<IActionResult> GetBestQuestionbyTotalLike(Guid categoryId)
        {
            IEnumerable<Question> questionList = null;

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                /// if user is logged in, then fetch questions by user following a category
                questionList = await queryFactory.ResolveQuery<IQuestionsByUserFollowingQuery>().GetBestQuestionbyTotalLike(loggedinUser, categoryId);
            }
            else
            {
                questionList = await queryFactory.ResolveQuery<IQuestionsQuery>()
                    .GetBestQuestionbyTotalLike(categoryId);
            }

            List<QuestionViewModel> questions = new List<QuestionViewModel>();

            questions = new QuestionService().GetQuestionViewModel(questionList, queryFactory);

            return Ok(questions);
        }


        [HttpGet("/questions/api/questions/{questionId}/getlatestanswer")]
        public IActionResult GetLatestAnswer(Guid questionId)
        {
            var question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(questionId);
            //if (question == null)
            //{
            //    return NotFound("The content you are looking for is not avaliable/Removed");
            //}
            question.Answers =
                question.Answers.OrderByDescending(d => d.AnswerDate.Date)
                            .ThenBy(h => h.AnswerDate.Hour)
                            .ThenBy(m => m.AnswerDate.Minute)
                            .ThenBy(s => s.AnswerDate.Second).ToList();

            var questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory);
            return Ok(questionViewModel);
        }
        [HttpGet("/questions/api/questions/{questionId}/getbestanswer")]
        public IActionResult GetBestAnswer(Guid questionId)
        {
            var question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(questionId);

            question.Answers = question.Answers.OrderByDescending(l => l.Likes.Count).ToList();
            var questionViewModel = new QuestionService().GetQuestionViewModel(question, queryFactory);
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
            List<QuestionViewModel> questionViewModels = new List<QuestionViewModel>();

            questionViewModels = new QuestionService().GetQuestionViewModel(questions, queryFactory);

            return Ok(questionViewModels);
        }
        #endregion



        #region Popover
        //Depends on answerId.As answer not appread then that is question ...Load data according to
        [HttpGet("/questions/api/getreport/{answerId}")]
        public IActionResult GetReport(Guid? answerId)
        {
            List<Report> reports = new List<Report>();
            if (answerId.HasValue)
            {
                reports = new Report().GetAnswerReports();
            }
            else
            {
                reports = new Report().GetQuestionReports();
            }


            return Ok(reports);
        }

        [HttpPost("/questions/api/savereport")]
        public IActionResult SaveReport([FromBody]QuestionReportViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                /// if user is logged in, then fetch questions by user following a category
            }
            QuestionReportCommand cmd = new QuestionReportCommand(model.QuestionId, model.Title, model.Comment, model.AnswerId, loggedinUser);

            commandsFactory.ExecuteQuery(cmd);
            return Ok();
        }

        #endregion

        [HttpGet("/questions/api/getdirectquestion")]
        public async Task<IActionResult> GetDirectQuestion()
        {
           

           var   questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().ExecuteDirectQuestion();
          // var   questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().Execute();
            return Ok(questionList);
        }


        [HttpPost("/questions/api/savedirectquestion")]
        public IActionResult SaveDirectQuestion([FromBody]AddQuestionViewModel question)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
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
            Guid profileUserId = Guid.NewGuid();
            DirectQuestionCommand cmd = new DirectQuestionCommand(question.Title, question.Body, DateTime.Now, loggedinUser, question.CategoryIds, topicId, levelId, question.IsAnonymous, true,profileUserId);
            commandsFactory.ExecuteQuery(cmd);
            Guid questionId = cmd.Id;

           
            return Ok();
        }

    }
}

