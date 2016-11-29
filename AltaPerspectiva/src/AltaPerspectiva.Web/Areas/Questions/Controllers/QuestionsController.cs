using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AltaPerspectiva.Core;
using Questions.Command;
using Questions.Query;
using AltaPerspectiva.Web.Areas.Questions.Models;
using Questions.Domain;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Area.Questions
{
    //http://localhost:5273/questions/api/questions
    [Area("Questions")]
    [Route("questions/api/[controller]")]
    public class QuestionsController : Controller
    {
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;

        public QuestionsController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory) {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
        }

        // GET: /questions/api/questions
        [HttpGet]
        public IActionResult Get()
        {
            var questionsList = queryFactory.ResolveQuery<IQuestionsQuery>().Execute();
            return Ok(questionsList);         
        }

        // GET /questions/api/questions/{id}
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var question = queryFactory.ResolveQuery<IQuestionByIdQuery>().Execute(id);
            return Ok(question);
        }

        // POST api/questions        
        [HttpPost]
        public IActionResult Post([FromBody]QuestionViewModel question)
        {
            AddQuestionCommand cmd = new AddQuestionCommand(question.Title, question.Body, DateTime.Now, null, question.CategoryIds);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"questions/api/questions/{cmd.Id}", question);
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
