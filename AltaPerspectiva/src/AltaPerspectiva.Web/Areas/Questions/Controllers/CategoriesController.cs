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
using System.ServiceModel.Channels;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

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
        IDistributedCache cache;

        public CategoriesController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IDistributedCache _cache)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            cache = _cache;
        }

        // GET:/questions/api/categories
        [HttpGet("questions/api/categories")]
        public IActionResult Get()
        {
            var categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            return Ok(categoriesList);
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

        //questions/api/categories/category/{keyword}   
        //http://localhost:5273/questions/api/categories/category/Demanda     
        [HttpGet("questions/api/categories/keywords")]
        public IActionResult GetAllkeywords()
        {

            var keywords = JsonConvert.DeserializeObject<Keyword[]>(cache.GetString("Keywords"));
            return Ok(keywords);
        }
        
        // PUT questions/api/categories/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE questions/api/categories/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

}
