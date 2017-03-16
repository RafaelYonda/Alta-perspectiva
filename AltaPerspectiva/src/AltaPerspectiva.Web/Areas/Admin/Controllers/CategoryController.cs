using System;
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
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using AltaPerspectiva.Web.Areas.Admin.Models;
using Questions.Command.Commands;
using Questions.Command;
using Microsoft.AspNetCore.Authorization;
using Questions.Query.Queries;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "Admin")]
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
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            ViewBag.Message = null;
            return View(categoryViewModel);
        }
        [HttpGet("Admin/addcategory/{id}")]
        public IActionResult AddCategory(Guid id)
        {

            CategoryViewModel categoryViewModel = new CategoryViewModel();
            Category model = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryById(id);
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            String imageNameWithPath = String.Empty;
            if (categoryViewModel.Image != null)
            {
                imageNameWithPath = azureFileUploadHelper.GetCategoryImage(categoryViewModel.Image.Name);
            }

            categoryViewModel = new CategoryViewModel
            {
                Id = model.Id,
                Description = model.Description,
                Name = model.Name,
                ImagePath = imageNameWithPath,
                Icon = model.Icon
            };
            ViewData["Title"] = "Add category of " + categoryViewModel.Name;
            ViewData["Category"] = "Add category of " + categoryViewModel.Name;
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            return View("AddCategory", categoryViewModel);
        }

        [HttpPost("Admin/addcategory/{id}")]
        public async Task<IActionResult> AddCategory(Guid id, CategoryViewModel categoryViewModel)
        {
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            //Update 
            if (!ModelState.IsValid)
            {
                // re-render the view when validation failed.
                return View("AddCategory", categoryViewModel);
            }

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            String image = categoryViewModel.Image.FileName;
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            await azureFileUploadHelper.SaveCategoryImage(categoryViewModel.Image);

            UpdateCategoryCommand command = new UpdateCategoryCommand(loggedinUser, categoryViewModel.Id, categoryViewModel.Name, categoryViewModel.Description, image, categoryViewModel.Icon);
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
        public async Task<IActionResult> AddCategory(CategoryViewModel categoryViewModel)
        {

            ViewData["Title"] = "Add category";
            //Update 
            if (!ModelState.IsValid)
            { // re-render the view when validation failed.
                ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
                return View("AddCategory", categoryViewModel);
            }


            String image = categoryViewModel.Image.FileName;

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            await azureFileUploadHelper.SaveCategoryImage(categoryViewModel.Image);

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
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            return View(new CategoryViewModel());
        }


        [HttpGet("Admin/addkeyword")]
        public IActionResult AddKeyword()
        {
            ViewData["Title"] = "Add keyword";
            List<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().Where(x => x.Name != "Ver todas").ToList();
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
            IEnumerable<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().Where(x => x.Name != "Ver todas").ToList();
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

        #region Keyword and Topic


        [HttpPost]
        public IActionResult GetKeyWords(Guid Id)
        {
            List<String> keywords = queryFactory.ResolveQuery<IKeywordsQuery>().Execute(Id).Select(x => x.Text).ToList();

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

        [HttpGet]
        public IEnumerable<String> GetTopics(Guid Id)
        {
            var topics = queryFactory.ResolveQuery<ITopicQuery>().GetTopics(Id).Select(x => x.TopicName).ToList();
            return topics;
        }

      //  [HttpGet("Admin/EditTopic")]
        public IActionResult EditTopic()
        {
            TopicNKeywordViewModel topicNKeywordViewModel = new TopicNKeywordViewModel();
            topicNKeywordViewModel.Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();

            return View(topicNKeywordViewModel);
        }
      //  [HttpPost("Admin/EditTopic")]
        [HttpPost]
        public ActionResult EditTopic(TopicNKeywordViewModel model)
        {
            model.Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            model.Topics = queryFactory.ResolveQuery<ITopicQuery>().GetTopics(new Guid(model.CategoryId));
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            // At this stage the model is OK => do something with the selected category
            return View(model);
        }

        [HttpPost]
        public IActionResult UpdateTopic(Guid id, String topicName)
        {
            String modifiedTopicName = topicName.TrimStart().TrimEnd().Trim();
            var isTopicExists =
                queryFactory.ResolveQuery<ITopicQuery>().IsTopicExists(modifiedTopicName);
            if (!isTopicExists)
            {
                UpdateTopicCommand command = new UpdateTopicCommand(id, modifiedTopicName, null);
                commandsFactory.ExecuteQuery(command);

                if (command.Id != Guid.Empty)
                {
                    return Ok(new
                    {
                        result = true
                    });
                }
            }
            return Ok(new
            {
                result = false
            });
        }
        [HttpPost]
        public IActionResult DeleteTopic(Guid id)
        {

            UpdateTopicCommand command = new UpdateTopicCommand(id, null, true);
            commandsFactory.ExecuteQuery(command);

            if (command.Id != Guid.Empty)
            {
                return Ok(new
                {
                    result = true
                });
            }

            return Ok(new
            {
                result = false
            });
        }


        //[HttpGet("Admin/EditKeyword")]
        [HttpGet]
        public IActionResult EditKeyword()
        {
            //var   = new TopicNKeywordViewModel
            //{
            //    Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            //}

            TopicNKeywordViewModel topicNKeywordViewModel = new TopicNKeywordViewModel();
            topicNKeywordViewModel.Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();

            return View(topicNKeywordViewModel);
        }
        [HttpPost("Admin/EditKeyword")]
        //[HttpPost]
        public ActionResult EditKeyword(TopicNKeywordViewModel model)
        {
            model.Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            model.Keywords = queryFactory.ResolveQuery<IKeywordsQuery>().Execute(new Guid(model.CategoryId));
            if (!ModelState.IsValid)
            {
                // there was a validation error =>
                // rebind categories and redisplay view


                return View(model);
            }
            // At this stage the model is OK => do something with the selected category
            return View(model);
        }

        [HttpPost]
        public IActionResult UpdateKeyword(long id, String Text)
        {
            String modifiedKeywordName = Text.TrimStart().TrimEnd().Trim();
            var isTopicExists =
                queryFactory.ResolveQuery<IKeywordsQuery>().IsKeywordExists(modifiedKeywordName);
            if (!isTopicExists)
            {
                UpdateKeywordCommand command = new UpdateKeywordCommand(id, modifiedKeywordName, null);
                commandsFactory.ExecuteQuery(command);

                if (command.Id != Guid.Empty)
                {
                    return Ok(new
                    {
                        result = true
                    });
                }
            }
            return Ok(new
            {
                result = false
            });

        }
        [HttpPost]
        public IActionResult DeleteKeyword(long id)
        {

             UpdateKeywordCommand command = new UpdateKeywordCommand(id, null, true);
            commandsFactory.ExecuteQuery(command);

            if (command.Id != Guid.Empty)
            {
                return Ok(new
                {
                    result = true
                });
            }

            return Ok(new
            {
                result = false
            });
            //return Ok();
        }
        #endregion
    }
}
