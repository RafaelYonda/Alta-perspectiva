using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AltaPerspectiva.Core;
using Questions.Command;


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

        // GET: api/questions
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/questions/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/questions
        [Route("/add")]
        [HttpPost]
        public void Post([FromBody]string value)
        {
            AddQuestionCommand cmd = new AddQuestionCommand("Title","Body",new DateTime(2016,11,2), null, null, null, null );
            commandsFactory.ExecuteQuery(cmd);

            Guid customerId = cmd.Id;
            
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
