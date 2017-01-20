﻿using System;
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
            var categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            return Ok(categoriesList);
        }
        //questions/api/categories/keywords/{categoryId}
        [HttpGet("questions/api/categories/totalcount/{categoryId}")]
        public IActionResult GetTotalUserQuestions(Guid categoryId)
        {
            var categoriesSummary = new CategoriesSummary();
            categoriesSummary.Id = categoryId;
            categoriesSummary.TotalQuestions = queryFactory.ResolveQuery<ICategoriesTotalQuestionsQuery>().Execute(categoryId);
            categoriesSummary.TotalFollowers = queryFactory.ResolveQuery<ICategoriesTotalUsersQuery>().Execute(categoryId);

            return Ok(categoriesSummary);
        }
        //questions/api/categories/addfollowers
        [HttpPost("questions/api/categories/addfollowers/{categoryId}")]        
        public IActionResult AddFollowers(Guid categoryId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            FollowCategoryCommand cmd = new FollowCategoryCommand(categoryId, loggedinUser);
            commandsFactory.ExecuteQuery(cmd);

            return Created($"questions/api/categories/addfollowers/{cmd.Id}", cmd);

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
            // neeed to work on here to modify cacheing for categories and keywords
            //if (cache.GetString("Keywords") != null)
            //{

            //    var keys = JsonConvert.DeserializeObject<Keyword[]>(cache.GetString("Keywords"));
            //    var keywords = keys.ToList();
            //    return Ok(keywords);
            //}
            //else
            //{
                var keywords = queryFactory.ResolveQuery<ICategoriesKeywordsAllQuery>().Execute();                
               
                //cache.SetString("Keywords", JsonConvert.SerializeObject(keywords));
                return Ok(keywords);
            //}

        }
        
        // PUT questions/api/categories/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        //// DELETE questions/api/categories/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
        /*FromPost For CategoriesFile*/

        #region Admin
        [HttpGet("questions/getcategory")]
        public IActionResult GetCategory()
        {
            AddLevelCommand cmd=new AddLevelCommand(1,"akash");

            commandsFactory.ExecuteQuery(cmd);

            List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().ToList();

            return View(categoriesList);
        }
        //Ajax file pathFor Modal
        [HttpGet]
        public IActionResult CategoryFilePath(Guid Id)
        {
            Category category = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().FirstOrDefault(x => x.Id == Id);
            var categoryImagepath = configuration["CategoryUpload"];
            //IHostingEnvironment environment = new HostingEnvironment();
            String image = category.Image;

            var webRoot = environment.WebRootPath;


            var uploads = Path.Combine(webRoot, categoryImagepath);

            category.Image = "/"+categoryImagepath+image;
            return Ok(category);
        }

        [HttpPost]
        public IActionResult CategoryUpdate()
        {
            Guid Id = new Guid(Request.Form["Id"]);
            String Name = Request.Form["Name"];
            String Description = Request.Form["Description"];


            String image = String.Empty;
            if (Request.Form.Files.Count > 0)
            {
                IFormFile file = Request.Form.Files[0];
                var webRoot = environment.WebRootPath;

                var categoryImagepath = configuration["CategoryUpload"];
                var uploads = Path.Combine(webRoot, categoryImagepath);
                image = file.FileName;


                using (var fileStream = new FileStream(Path.Combine(uploads, image), FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                
            }
            else
            {
                Category category = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().FirstOrDefault(x=>x.Id==Id);
                image = category.Image;
            }
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            UpdateCategoryCommand cmd = new UpdateCategoryCommand(loggedinUser, Id, Name,Description, image);
            commandsFactory.ExecuteQuery(cmd);

            return Json(new { success = "ok" });
        }

        

        //Implemented But excluded
        //[HttpPost]
        //public JsonResult Delete(Guid Id)
        //{
        //    Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

        //    if (User.Identity.IsAuthenticated)
        //    {
        //        var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
        //        loggedinUser = new Guid(loggedinUser.ToString());
        //    }
        //    DeleteCategoryCommand cmd = new DeleteCategoryCommand(loggedinUser,Id);
        //    commandsFactory.ExecuteQuery(cmd);
        //    commandsFactory.ExecuteQuery(cmd);
        //    return Json(new { success = "ok" });
        //}
        [HttpPost]
        public IActionResult CategoryFileUpload(String name, String description, IFormFile file)
        {
            var categoryImagepath = configuration["CategoryUpload"];
            //IHostingEnvironment environment = new HostingEnvironment();
            String image = file.FileName;

            var webRoot = environment.WebRootPath;


            var uploads = Path.Combine(webRoot, categoryImagepath);
            using (var fileStream = new FileStream(Path.Combine(uploads, image), FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            int maxSequnce = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().OrderByDescending(x => x.Sequence).Select(x => x.Sequence).FirstOrDefault();
            //int maxSequnce=
            AddCategoryCommand cmd = new AddCategoryCommand(loggedinUser, name, "icon-dice", null, description, maxSequnce + 1, image);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().ToList();
            return RedirectToAction("GetCategory");
        }

        [HttpPost]
        public IActionResult GetKeyWords(Guid Id)
        {
            List<String> keywords = queryFactory.ResolveQuery<IKeywordsQuery>().Execute(Id).Select(x=>x.Text).ToList();

            return Ok(keywords);
        }
        [HttpPost]
        public IActionResult SaveKeyWords(Guid categoryId, String newKeyword)
        {
            //List<String> keywords = queryFactory.ResolveQuery<IKeywordsQuery>().Execute(Id).Select(x => x.Text).ToList();
            AddKeywordCommand cmd = new AddKeywordCommand(categoryId, newKeyword);
            commandsFactory.ExecuteQuery(cmd);
            return Ok();
        }


        /*Keyword added sccessfully*/
        [HttpGet]
        public IEnumerable<String> GetTopics(Guid Id)
        {
            var topics = queryFactory.ResolveQuery<ITopicQuery>().GetTopics(Id).Select(x=>x.TopicName).ToList();
            return topics;
        }

        [HttpPost]
        public IActionResult SaveTopic(Guid categoryId,String topicName)
        {
            AddTopicCommand cmd = new AddTopicCommand(topicName, categoryId);
            commandsFactory.ExecuteQuery(cmd);
            Guid id = cmd.Id;

            return Ok(topicName);
        }



        [HttpGet("questions/getlevel")]
        public IActionResult GetLevel()
        {
            //AddLevelCommand cmd = new AddLevelCommand(1, "akash");

            //commandsFactory.ExecuteQuery(cmd);

            //List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().ToList();

            return View();
        }
        #endregion
    }

}
