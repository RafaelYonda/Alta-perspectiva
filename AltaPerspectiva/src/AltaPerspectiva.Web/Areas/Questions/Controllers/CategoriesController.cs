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
using Microsoft.Extensions.Configuration;
using Questions.Command.Commands;
using Microsoft.AspNetCore.Http;
using System.IO;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using Microsoft.AspNetCore.Hosting;
using Questions.Query.Queries;

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
        private readonly IConfigurationRoot configuration;
        private readonly IHostingEnvironment environment;

        public CategoriesController(IConfigurationRoot _configuration, ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IDistributedCache _cache, IHostingEnvironment _environment)
        {
            configuration = _configuration;
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            cache = _cache;
            environment = _environment;
        }

        // GET:/questions/api/categories
        [HttpGet("questions/api/categories")]
        public IActionResult Get()
        {
            if (cache.GetString("categories") != null)
            {
                var keys = JsonConvert.DeserializeObject<CategoryViewModel[]>(cache.GetString("categories"));
                return Ok(keys);
            }
            var categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().Select(x => new CategoryViewModel
            {
                Id = x.Id,
                Description = x.Description,
                Name = x.Name,
                Image = x.Image,
                Icon = x.Icon,
                Active = x.Active,
                Sequence = x.Sequence
            }).ToList();

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            foreach (var category in categories)
            {
                category.Image = azureFileUploadHelper.GetCategoryImage(category.Image);
            }
            DistributedCacheEntryOptions options=new DistributedCacheEntryOptions();
            options.SlidingExpiration=TimeSpan.FromSeconds(300);
            options.AbsoluteExpiration= DateTimeOffset.Now.AddMinutes(5);
            
            cache.SetString("categories", JsonConvert.SerializeObject(categories),options);

            return Ok(categories);
        }
        //questions/api/categories/keywords/{categoryId}
        [HttpGet("questions/api/categories/totalcount/{categoryId}")]
        public async Task<IActionResult> GetTotalUserQuestions(Guid categoryId)
        {
            var categoriesSummary = new CategoriesSummary();
            categoriesSummary.Id = categoryId;
            //categoriesSummary.TotalQuestions = queryFactory.ResolveQuery<ICategoriesTotalQuestionsQuery>().Execute(categoryId);
            categoriesSummary.TotalFollowers = queryFactory.ResolveQuery<ICategoriesTotalUsersQuery>().Execute(categoryId);

            IEnumerable<Question> questionList = null;
            questionList = await queryFactory.ResolveQuery<IQuestionsNotAnsweredQuery>().Execute(categoryId);
            //[HttpGet("/questions/api/questions/notanswered/{id}")]
            categoriesSummary.TotalUnAnsweredQuestion =
                questionList.Count();


            // [HttpGet("/questions/api/questions/answered/{id}")]
            questionList = await queryFactory.ResolveQuery<IQuestionsAnsweredQuery>().Execute(categoryId);
            categoriesSummary.TotalAnsweredQuestion = questionList.Count();
            categoriesSummary.TotalQuestions = categoriesSummary.TotalAnsweredQuestion +
                                               categoriesSummary.TotalUnAnsweredQuestion;

            return Ok(categoriesSummary);
        }
        //questions/api/categories/addfollowers
        [HttpPost("questions/api/categories/addfollowers/{categoryId}")]
        public IActionResult AddFollowers(Guid categoryId)
        {
            Guid loggedinUser;

            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());


                FollowCategoryCommand cmd = new FollowCategoryCommand(categoryId, loggedinUser);
                commandsFactory.ExecuteQuery(cmd);

                return Created($"questions/api/categories/addfollowers/{cmd.Id}", cmd);
            }
            return Unauthorized();

        }

        //questions/api/categories/totalcount
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
            if (cache.GetString("keywords") != null)
            {
                var keys = JsonConvert.DeserializeObject<Keyword[]>(cache.GetString("keywords"));
                return Ok(keys);
            }
            var keywords = queryFactory.ResolveQuery<ICategoriesKeywordsAllQuery>().Execute();
            DistributedCacheEntryOptions options = new DistributedCacheEntryOptions();
            options.SlidingExpiration = TimeSpan.FromSeconds(300);//30
            options.AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(5);
            cache.SetString("keywords", JsonConvert.SerializeObject(keywords), options);
            return Ok(keywords);
        }
      
    }

}
