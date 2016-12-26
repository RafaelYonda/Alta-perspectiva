using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AltaPerspectiva.Core;
using Questions.Command;
using Questions.Query;
using AltaPerspectiva.Web.Areas.Questions.Models;
using Microsoft.Extensions.Configuration;
//using Questions.Domain;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Area.Questions
{
    //http://localhost:5273/questions/api/questions
    [Area("Questions")]    
    public class QuestionsController : Controller
    {
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        private readonly IConfigurationRoot configuration;

        public QuestionsController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IConfigurationRoot _configuration) {
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

        // GET: /questions/api/questions
        [HttpGet("/questions/api/questions")]
        public async Task<IActionResult> Get()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

                var questionsList = await queryFactory.ResolveQuery<IQuestionsByUserFollowingQuery>().Execute(loggedinUser);
                return Ok(questionsList);

            }
            else
            {
                var questionsList = await queryFactory.ResolveQuery<IQuestionsQuery>().Execute();
                return Ok(questionsList);
            }
        }

        [HttpGet("/questions/api/questions/notanswered/{id}")]
        public async Task<IActionResult> GetQuestyionsNotAnswered(Guid CategoryId)
        {
            var questionsList = await queryFactory.ResolveQuery<IQuestionsQuery>().Execute();
            return Ok(questionsList);
              
        }
        [HttpGet("/questions/api/questions/answered/{id}")]
        public async Task<IActionResult> GetQuestyionsAnswered(Guid CategoryId)
        {
            var questionsList = await queryFactory.ResolveQuery<IQuestionsAnsweredQuery>().Execute(CategoryId);
            return Ok(questionsList);           
        }

        // GET /questions/api/questions/{id}
        [HttpGet("/questions/api/questions/{id}")]
        public IActionResult Get(Guid id)
        {
            var question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(id);
            return Ok(question);
        }

        // GET /questions/api/questions/category/{id}
        [HttpGet("/questions/api/questions/category/{id}")]
        public async Task<IActionResult> GetQuestionsByCategoryId(Guid id)
        {
            var question = await queryFactory.ResolveQuery<IQuestionsByCategoryIdQuery>().Execute(id);
            return Ok(question);
        }

        //get  /questions/api/questions/reatedquestions/{id}
        [HttpGet("/questions/api/questions/reatedquestions/{id}")]
        public async Task<IActionResult> GetRelatedQuestions(Guid id)
        {
            var questions = await queryFactory.ResolveQuery<IRelatedQuestionsQuery>().Execute(id);
            return Ok(questions);
        }


        // POST /questions/api/questions       
        [HttpPost("/questions/api/questions")]
        public IActionResult Post([FromBody]AddQuestionViewModel question)
        {

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
                        
            AddQuestionCommand cmd = new AddQuestionCommand(question.Title, question.Body, DateTime.Now, loggedinUser, question.CategoryIds);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"questions/api/questions/{cmd.Id}", question);
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
           
            AddAnswerCommand cmd = new AddAnswerCommand(answer.Text,answer.AnswerDate,answer.QuestionId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{answer.QuestionId}/answer/{answer.Id}", answer);
        }

        [HttpPost("/questions/api/question/{id}/comment")]
        public IActionResult PostQuestionComment([FromBody]AddCommentViewModel comment)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            AddCommentCommand cmd = new AddCommentCommand(comment.CommentText,comment.QuestionId,null, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{comment.QuestionId}/comment/{comment.Id}", comment);
            
        }

        [HttpPost("/questions/api/question/{id}/answer/{answerId}/comment")]
        public IActionResult PostAnswerComment([FromBody]AddCommentViewModel comment)
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

            return Created($"/questions/api/question/{comment.QuestionId}/answer/{comment.AnswerId}/comment/{comment.Id}", comment);
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

            AddLikeCommand cmd = new AddLikeCommand(like.QuestionId, null, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{like.QuestionId}/comment/{like.Id}", like);

        }

        [HttpPost("/questions/api/question/{id}/answer/{answerId}/like")]
        public IActionResult PostAnswerLike([FromBody]AddLikeViewModel like)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            AddLikeCommand cmd = new AddLikeCommand(like.QuestionId, like.AnswerId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{like.QuestionId}/answer/{like.AnswerId}/comment/{like.Id}", like);

        }

        // PUT api/questions/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/questions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
