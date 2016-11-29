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
    //http://localhost:5273/questions/api/categories
    [Area("Questions")]
    //[Route("questions/api/[controller]")]
    public class CategoriesController : Controller
    {
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;

        public CategoriesController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory) {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
        }

        // GET:/questions/api/categories
        [HttpGet("questions/api/categories")]
        public IActionResult Get()
        {
            var questionsList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            return Ok(questionsList);
        }
        //questions/api/categories/keywords/{categoryId}
        [HttpGet("questions/api/categories/keywords/{categoryId}")]        
        public IActionResult GetKeywordsByCategoryId(Guid categoryId)
        {
            var questionsList = queryFactory.ResolveQuery<IKeywordsQuery>().Execute(categoryId);
            return Ok(questionsList);
        }

        //questions/api/categories/category/{keyword}   
        //http://localhost:5273/questions/api/categories/category/Demanda     
        [HttpGet("questions/api/categories/category/{keyword}")]
        public IActionResult GetCategoryBykeyword(string keyword)
        {
            var keywords = keyword.Trim().Split(' ');
            var categoryies = queryFactory.ResolveQuery<ICategoryMatchKeywordQuery>().Execute(keywords);
            return Ok(categoryies);
        }        

        // POST api/questions        
        [HttpPost]
        public IActionResult Post([FromBody]QuestionViewModel question)
        {
            AddQuestionCommand cmd = new AddQuestionCommand(question.Title, question.Body, DateTime.Now, null, null, null, null);
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
