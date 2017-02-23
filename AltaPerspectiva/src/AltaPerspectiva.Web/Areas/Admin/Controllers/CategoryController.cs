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
using AltaPerspectiva.Web.Areas.Admin.Models;
using Questions.Command.Commands;
using Questions.Command;
using Microsoft.AspNetCore.Authorization;

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
        [HttpGet("sitemanagement/")]
        public IActionResult Index()
        {
            return RedirectToAction("AddCategory");
        }
        [HttpPost]
        public IActionResult SaveTopic(Guid categoryId, String topicName)
        {
            AddTopicCommand cmd = new AddTopicCommand(topicName, categoryId);
            commandsFactory.ExecuteQuery(cmd);
            Guid id = cmd.Id;

            return Ok(topicName);
        }

        [HttpGet("Admin/addcategory")]
        public IActionResult AddCategory()
        {
            ViewData["Title"] = "Add category";
            ViewData["Category"] = "Add category";
            CategoryViewModel categoryViewModel = new CategoryViewModel();
            ViewBag.Message = null;
            return View(categoryViewModel);
        }
        [HttpGet("Admin/addcategory/{id}")]
        public IActionResult AddCategory(Guid id)
        {
           
            CategoryViewModel categoryViewModel = new CategoryViewModel();
            ModelState.Remove("categoryViewModel.Name");
            
            Category model = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryById(id);

            String imageNameWithPath =String.Empty;

            if (model.Image != null)
            {
                imageNameWithPath= Path.Combine(Path.Combine(environment.WebRootPath, configuration["CategoryUpload"]), model.Image);
            }
            
            categoryViewModel = new CategoryViewModel
            {
                Id = model.Id,
                Description = model.Description,
                Name = model.Name,
                ImagePath = imageNameWithPath,
                Icon = model.Icon
            };
            ViewData["Title"] = "Add category of "+categoryViewModel.Name;
            ViewData["Category"] = "Add category of "+categoryViewModel.Name;
            return View("AddCategory", categoryViewModel);
        }

        [HttpPost("Admin/addcategory/{id}")]
        public IActionResult AddCategory(Guid id, CategoryViewModel categoryViewModel)
        {
            //Update 
            if (!ModelState.IsValid)
            { // re-render the view when validation failed.
                return View("AddCategory", categoryViewModel);
            }
            if (String.IsNullOrEmpty(categoryViewModel.Name))
            {
                ModelState.AddModelError("categoryViewModel.Name", "CategoryName is required");
            }
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            String image = categoryViewModel.Image.FileName;

            var uploadPath = Path.Combine(Path.Combine(environment.WebRootPath, configuration["CategoryUpload"]), image);
            using (var fileStream = new FileStream(uploadPath, FileMode.Create))
            {
                categoryViewModel.Image.CopyTo(fileStream);
            }
            
            UpdateCategoryCommand command=new UpdateCategoryCommand(loggedinUser, categoryViewModel.Id, categoryViewModel.Name,categoryViewModel.Description, image, categoryViewModel.Icon);
            commandsFactory.ExecuteQuery(command);
            ModelState.Clear();
            ViewData["Title"] = "Add category";
            ViewBag.Message = categoryViewModel.Name + " updated Successfully";
            return RedirectToAction("AddKeyword");

        }
        //[HttpGet("Admin/category/IsCategoryNameExist")]

        [AllowAnonymous]
        [HttpPost]
        public IActionResult IsCategoryNameExist(string Name)
        {
            bool isExist = queryFactory.ResolveQuery<ICategoriesQuery>().IsCategoryExists(Name);
            return Ok(!isExist);
        }

        [HttpPost("Admin/addcategory")]
        public IActionResult AddCategory(CategoryViewModel categoryViewModel)
        {
            ViewData["Title"] = "Add category";
            //Update 
            if (!ModelState.IsValid)
            { // re-render the view when validation failed.
                return View("AddCategory", categoryViewModel);
            }
            

            String image = categoryViewModel.Image.FileName;

            var uploadPath = Path.Combine(Path.Combine(environment.WebRootPath, configuration["CategoryUpload"]), image);
            using (var fileStream = new FileStream(uploadPath, FileMode.Create))
            {
                categoryViewModel.Image.CopyTo(fileStream);
            }

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            int maxSequnce = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().OrderByDescending(x => x.Sequence).Select(x => x.Sequence).FirstOrDefault();
            //int maxSequnce=
            AddCategoryCommand cmd = new AddCategoryCommand(loggedinUser, categoryViewModel.Name, categoryViewModel.Icon, true, categoryViewModel.Description, maxSequnce + 1, image);
            commandsFactory.ExecuteQuery(cmd);
            ModelState.Clear();
            ViewBag.Message = categoryViewModel.Name + " Added Successfully";
            return View(new CategoryViewModel());
        }


        [HttpGet("Admin/addkeyword")]
        public IActionResult AddKeyword()
        {
            ViewData["Title"] = "Add keyword";
            List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().ToList();
            return View(categoriesList);
        }

        [HttpGet("Admin/QuestionReport")]
        public IActionResult QuestionReport()
        {
            ViewData["Title"] = "QuestionReport";
            return View();
        }
        [HttpGet("Admin/DeleteCategory")]
        public IActionResult DeleteCategory()
        {
            ViewData["Title"] = "Delete Category";
            IEnumerable<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            return View("DeleteCategory", categoriesList);
        }
        [HttpPost("Admin/DeleteCategory")]
        public IActionResult DeleteCategory(Guid categoryId)
        {
            ViewData["Title"] = "Delete Category";
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            DeleteCategoryCommand command = new DeleteCategoryCommand(loggedinUser, categoryId);
            commandsFactory.ExecuteQuery(command);
            return Ok();
        }
    }
}
