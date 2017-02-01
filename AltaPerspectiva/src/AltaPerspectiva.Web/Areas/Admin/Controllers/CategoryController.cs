using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Questions.Domain;
using AltaPerspectiva.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Questions.Query;
using Microsoft.AspNetCore.Http;
using System.IO;
using Questions.Command.Commands;
using Questions.Command;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoryController : Controller
    {
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        private readonly IConfigurationRoot configuration;
        private readonly IHostingEnvironment environment;

        public CategoryController(IConfigurationRoot _configuration, ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IHostingEnvironment _environment)
        {
            configuration = _configuration;
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            environment = _environment;
        }

        [HttpPost]
        public IActionResult SaveTopic(Guid categoryId, String topicName)
        {
            AddTopicCommand cmd = new AddTopicCommand(topicName, categoryId);
            commandsFactory.ExecuteQuery(cmd);
            Guid id = cmd.Id;

            return Ok(topicName);
        }

        [HttpGet("Admin/getcategory")]
        public IActionResult GetCategory()
        {
            List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().ToList();

            return View(categoriesList);
        }

        [HttpGet("Admin/addcategory")]
        public IActionResult AddCategory()
        {
            List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().ToList();

            return View(categoriesList);
        }
        [HttpPost("Admin/addcategory")]
        public IActionResult AddCategory(String name, String description, IFormFile file)
        {
            if (file != null)
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
            }

            return RedirectToAction("AddCategory");
        }
       

        [HttpGet("Admin/addkeyword")]
        public IActionResult AddKeyword()
        {
            List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().ToList();
            return View(categoriesList);
        }

        [HttpGet("Admin/QuestionReport")]
        public IActionResult QuestionReport()
        {
            return View();
        }
        [HttpGet("Admin/DeleteCategory")]
        public IActionResult DeleteCategory()
        {
            IEnumerable<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            return View("DeleteCategory", categoriesList);
        }
        [HttpPost("Admin/DeleteCategory")]
        public IActionResult DeleteCategory(Guid categoryId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            DeleteCategoryCommand command=new DeleteCategoryCommand(loggedinUser,categoryId);
            commandsFactory.ExecuteQuery(command);
            return Ok();
        }
    }
}
