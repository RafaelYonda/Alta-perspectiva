using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AltaPerspectiva.Core;
using Questions.Command;
using Questions.Query;
using AltaPerspectiva.Web.Areas.Questions.Models;
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

        public QuestionsController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory) {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
        }

        // GET: /questions/api/questions
        [HttpGet("/questions/api/questions")]
        public async Task<IActionResult> Get()
        {
            var questionsList = await queryFactory.ResolveQuery<IQuestionsQuery>().Execute();
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

        // POST /questions/api/questions       
        [HttpPost("/questions/api/questions")]
        public IActionResult Post([FromBody]QuestionViewModel question)
        {

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
                        
            AddQuestionCommand cmd = new AddQuestionCommand(question.Title, question.Body, DateTime.Now, loggedinUser, question.CategoryIds);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"questions/api/questions/{cmd.Id}", question);
        }


        // POST /questions/api/question/{id}/answer
        [HttpPost("/questions/api/question/{id}/answer")]
        public IActionResult PostAnswer([FromBody]AnswerViewModel answer)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
           
            AddAnswerCommand cmd = new AddAnswerCommand(answer.Text,answer.AnswerDate,answer.QuestionId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{answer.QuestionId}/answer/{answer.Id}", answer);
        }

        [HttpPost("/questions/api/question/{id}/comment")]
        public IActionResult PostQuestionComment([FromBody]CommentViewModel comment)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }

            AddCommentCommand cmd = new AddCommentCommand(comment.CommentText,comment.QuestionId,null, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{comment.QuestionId}/comment/{comment.Id}", comment);
            
        }

        [HttpPost("/questions/api/question/{id}/answer/{answerId}")]
        public IActionResult PostAnswerComment([FromBody]CommentViewModel comment)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }

            AddCommentCommand cmd = new AddCommentCommand(comment.CommentText, comment.QuestionId, comment.AnswerId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"/questions/api/question/{comment.QuestionId}/answer/{comment.AnswerId}/comment/{comment.Id}", comment);
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
