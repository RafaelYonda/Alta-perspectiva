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

        //Demo post Call
        [HttpPost("questions/api/categories/contact")]
        public IActionResult Post(Contact contact)
        {
            var x = contact;
            return Created($"questions/api/questions/", contact);
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

    #region=======Profile=============
    public class Profile
    {
        public Contact contact { get; set; }
        public Biography biography { get; set; }
        public Education education { get; set; }
        public Experience experience { get; set; }
        public Skills skills { get; set; }
        public PracticeArea practiceArea { get; set; }
        public Insight insight { get; set; }
        public int completePercent { get; set; }
    }
    public class Contact
    {
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
        public string City { get; set; }
    }
    public class Biography
    {
        public string userId { get; set; }
        public string tagLine { get; set; }
        public string aboutMe { get; set; }
    }
    public class Education
    {
        public string userId { get; set; }
        public string institute { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public bool studyStatus { get; set; }
        public string description { get; set; }
        public string especiality { get; set; }
    }
    public class Experience
    {
        public string userId { get; set; }
        public string employer { get; set; }
        public string positionHeld { get; set; }
        public string employerLocation { get; set; }
        public int startMonth { get; set; }
        public int startYear { get; set; }
        public int endMonth { get; set; }
        public int endYear { get; set; }
        public bool currentlyWorking { get; set; }
        public string description { get; set; }
    }
    public class Skills
    {
        public string userId { get; set; }
        public string skillArea { get; set; }
        public string newSkill { get; set; }
    }
    public class PracticeArea
    {
        public string userId { get; set; }
        public string[] practiceArea { get; set; }
    }
    public class Insight
    {
        public string userId { get; set; }
        public string title { get; set; }
        public string publication { get; set; }
        public string dateMonth { get; set; }
        public string dateYear { get; set; }
        public bool isHyperLink { get; set; }
        public bool isDocument { get; set; }
        public string documentLink { get; set; }
        public string description { get; set; }
    }
    #endregion

}
