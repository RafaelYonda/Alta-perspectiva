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
            return RedirectToAction("DeleteCategory");
        }


        [HttpGet("Admin/addcategory")]
        public IActionResult AddCategory()
        {
           
            CategoryViewModel categoryViewModel = new CategoryViewModel();
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            
            return View(categoryViewModel);
        }
        [HttpPost("Admin/addcategory")]
        public async Task<IActionResult> AddCategory(CategoryViewModel categoryViewModel)
        {
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            //Update 
            if (!ModelState.IsValid)
            {
                // re-render the view when validation failed.
                categoryViewModel.Icon = null;
                return View("AddCategory", categoryViewModel);
            }
            bool isCategoryExists = queryFactory.ResolveQuery<ICategoriesQuery>().IsCategoryExists(categoryViewModel.Name);
            if (isCategoryExists)
            {
                ModelState.AddModelError("Name", "Category name already exists");
                categoryViewModel.Icon = null;
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
            return View(new CategoryViewModel());
        }
        [HttpGet]
        public IActionResult EditCategory(Guid id)
        {
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            Category model = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryById(id);
            if (model == null)
            {
                throw new Exception("Something wrong in your url");
            }
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            String imageNameWithPath = String.Empty;
            if (model.Image != null)
            {
                imageNameWithPath = azureFileUploadHelper.GetCategoryImage(model.Image);
            }

            var categoryViewModel = new CategoryViewModel
            {
                Id = model.Id,
                Description = model.Description,
                Name = model.Name,
                ImagePath = imageNameWithPath,
                Icon = model.Icon,
                PreviousName = model.Name
            };

            return View("EditCategory", categoryViewModel);
        }
        [HttpPost]
        public async Task<IActionResult> EditCategory(CategoryViewModel categoryViewModel)
        {
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            
            
            ViewBag.CategoryIconList = CategoryList.GetCategoryIconViewModels(queryFactory);
            if (categoryViewModel.IsPreviousImage || categoryViewModel.Image != null)
            {
                ModelState.Remove("Image");
            }
            else
            {
                ModelState.AddModelError("Image", "Please select a image");
                return View("EditCategory", categoryViewModel);
            }
            //   string categoryName =
            if (!ModelState.IsValid)
            {
                return View("EditCategory", categoryViewModel);
            }
            String catgeoryName = categoryViewModel.Name.Trim();
            bool isCategoryExists = queryFactory.ResolveQuery<ICategoriesQuery>().IsCategoryExists(catgeoryName);
            if (isCategoryExists &&categoryViewModel.PreviousName!=catgeoryName)
            {
                ModelState.AddModelError("Name", "Category name already exists");
                return View("EditCategory", categoryViewModel);
            }

            if (String.IsNullOrWhiteSpace(catgeoryName))
            {
                ModelState.AddModelError("Name", "Name can not be empty");
                return View("EditCategory", categoryViewModel);
            }
            String image=String.Empty	;
            if (categoryViewModel.IsPreviousImage && categoryViewModel.Image == null)
            {
                image = String.Empty;
            }
            else
            {
                image = categoryViewModel.Image.FileName;

                await azureFileUploadHelper.SaveCategoryImage(categoryViewModel.Image);
            }
           
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            UpdateCategoryCommand command = new UpdateCategoryCommand(loggedinUser, categoryViewModel.Id, categoryViewModel.Name, categoryViewModel.Description, image, categoryViewModel.Icon);
            commandsFactory.ExecuteQuery(command);
            ModelState.Clear();
            ViewData["Title"] = "Add category";
            ViewBag.Message = categoryViewModel.Name + " updated Successfully";
            categoryViewModel.ImagePath = azureFileUploadHelper.GetCategoryImage(command.Image);
            categoryViewModel.PreviousName = categoryViewModel.Name;
            return View	("EditCategory",categoryViewModel);
        }

        [HttpGet("Admin/DeleteCategory")]
        public IActionResult DeleteCategory()
        {
            ViewData["Title"] = "Delete Category";
            //the 7639B416-8D1C-4119-B58E-143CB860E8A6 is General Vertodas
            IEnumerable<Category> categoriesList = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().Where(x => x.Sequence != 1).ToList();
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

        #region Topic
        [HttpGet]
        public IActionResult EditTopic()
        {
            TopicNKeywordViewModel topicNKeywordViewModel = new TopicNKeywordViewModel();
            topicNKeywordViewModel.Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().Where(x => x.Sequence != 1).ToList();

            return View(topicNKeywordViewModel);
        }

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
        [HttpGet]
        public async Task<IActionResult> AddTopic(Guid Id)
        {
            TopicViewModel topicViewModel = new TopicViewModel();
            topicViewModel.CategoryId = Id;

            Category category = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryById(Id);
            if (category != null)
            {
                topicViewModel.CategoryName = category.Name;
            }
            else
            {
                throw new Exception("Some thing wrong with your url");
            }

            topicViewModel.Topics = await queryFactory.ResolveQuery<ITopicQuery>().GetTopicsByCategoryId(Id);

            topicViewModel.Topics = topicViewModel.Topics.OrderByDescending(x => x.CreatedOn).ToList();
            return View("AddTopic", topicViewModel);
        }
        [HttpPost]
        public async Task<IActionResult> AddTopic(TopicViewModel topicViewModel)
        {
            var topics = await queryFactory.ResolveQuery<ITopicQuery>().GetTopicsByCategoryId(topicViewModel.CategoryId);

            topics = topics.OrderByDescending(x => x.CreatedOn).ToList();
            Category category = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryById(topicViewModel.CategoryId);
            if (category != null)
            {
                
                topicViewModel.CategoryName = category.Name;
            }

            if (!ModelState.IsValid)
            {
                topicViewModel.Topics = topics;
                return View("AddTopic", topicViewModel);
            }
            String topicName = topicViewModel.TopicName.Trim();
            var isTopicExists =
              queryFactory.ResolveQuery<ITopicQuery>().IsTopicExists(topicName);
            if (isTopicExists)
            {
                ModelState.AddModelError("TopicName", "TopicName already exists");
                return View("AddTopic", topicViewModel);
            }

            if (String.IsNullOrWhiteSpace(topicName))
            {
                ModelState.AddModelError("TopicName", "TopicName can not be empty");
                return View("AddTopic", topicViewModel);
            }

            AddTopicCommand cmd = new AddTopicCommand(topicName, topicViewModel.CategoryId);
            commandsFactory.ExecuteQuery(cmd);
            Guid id = cmd.Id;
            ViewBag.Message = topicName + " Added Successfully";

           
            return View("AddTopic", new TopicViewModel
            {
                CategoryId = topicViewModel.CategoryId,
                CategoryName = topicViewModel.CategoryName,
                Topics =topics
            });
        }
        [HttpPost]
        public IActionResult UpdateTopic(Guid id, String topicName)
        {
            String modifiedTopicName = topicName.TrimStart().TrimEnd().Trim();
            var isTopicExists =
                queryFactory.ResolveQuery<ITopicQuery>().IsTopicExists(modifiedTopicName);

            Boolean successResult = false;
            if (!isTopicExists)
            {
                UpdateTopicCommand command = new UpdateTopicCommand(id, modifiedTopicName, null);
                commandsFactory.ExecuteQuery(command);

                if (command.Id != Guid.Empty)
                {
                    successResult = true;
                }
            }
            return Ok(new
            {
                result = successResult
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

        #endregion

        #region Keyword
        [HttpGet]
        public IActionResult EditKeyword()
        {
            TopicNKeywordViewModel topicNKeywordViewModel = new TopicNKeywordViewModel();
            topicNKeywordViewModel.Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute().Where(x=>x.Sequence!=1).ToList();

            return View(topicNKeywordViewModel);
        }
        [HttpPost]
        public ActionResult EditKeyword(TopicNKeywordViewModel model)
        {
            model.Categories = queryFactory.ResolveQuery<ICategoriesQuery>().Execute();
            model.Keywords = queryFactory.ResolveQuery<IKeywordsQuery>().Execute(new Guid(model.CategoryId));
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            return View(model);
        }
        [HttpGet]
        public IActionResult AddKeyword(Guid Id)
        {
            KeywordViewModel keywordViewModel = new KeywordViewModel();
            keywordViewModel.CategoryId = Id;

            Category category = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryById(Id);
            if (category != null)
            {
                keywordViewModel.CategoryName = category.Name;
            }
            else
            {
                throw new Exception("Some thing wrong with your url");
            }

            var keywords =
                queryFactory.ResolveQuery<IKeywordsQuery>()
                    .Execute(keywordViewModel.CategoryId)
                    .OrderByDescending(x => x.Id)
                    .ToList();
            keywordViewModel.Keywords = keywords;



            return View("AddKeyword", keywordViewModel);
        }
        [HttpPost]
        public IActionResult AddKeyword(KeywordViewModel keywordViewModel)
        {
            var keywords =
              queryFactory.ResolveQuery<IKeywordsQuery>()
                  .Execute(keywordViewModel.CategoryId)
                  .OrderByDescending(x => x.Id)
                  .ToList();
            Category category = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryById(keywordViewModel.CategoryId);
            if (category != null)
            {
                keywordViewModel.CategoryName = category.Name;
            }

            if (!ModelState.IsValid)
            {
                keywordViewModel.Keywords = keywords;
                return View("AddKeyword", keywordViewModel);
            }
            String text = keywordViewModel.Text.Trim();
            var isTopicExists =
              queryFactory.ResolveQuery<IKeywordsQuery>().IsKeywordExists(text);
            if (isTopicExists)
            {
                ModelState.AddModelError("Text", "Keyword already exists");
                return View("AddKeyword", keywordViewModel);
            }

            if (String.IsNullOrWhiteSpace(text))
            {
                ModelState.AddModelError("Text", "Keyword can not be empty");
                return View("AddKeyword", keywordViewModel);
            }

            AddKeywordCommand cmd = new AddKeywordCommand(keywordViewModel.CategoryId, text);
            commandsFactory.ExecuteQuery(cmd);
            Guid id = cmd.Id;
            ViewBag.Message = text + " Added Successfully";

           
            return View("AddKeyword", new KeywordViewModel
            {
                CategoryId = keywordViewModel.CategoryId,
                CategoryName = keywordViewModel.CategoryName,
                Keywords = keywords
            });
        }
        [HttpPost]
        public IActionResult UpdateKeyword(long id, String Text)
        {
            String modifiedKeywordName = Text.TrimStart().TrimEnd().Trim();
            var isTopicExists =
                queryFactory.ResolveQuery<IKeywordsQuery>().IsKeywordExists(modifiedKeywordName);
            Boolean successResult = false;
            if (!isTopicExists)
            {
                UpdateKeywordCommand command = new UpdateKeywordCommand(id, modifiedKeywordName, null);
                commandsFactory.ExecuteQuery(command);
                if (command.Id != Guid.Empty)
                {
                    successResult = true;
                }
            }
            return Ok(new
            {
                result = successResult
            });

        }
        [HttpPost]
        public IActionResult DeleteKeyword(long id)
        {
            UpdateKeywordCommand command = new UpdateKeywordCommand(id, null, true);
            commandsFactory.ExecuteQuery(command);
            Boolean successResult = false;
            if (command.Id != Guid.Empty)
            {
                successResult = true;
            }
            return Ok(new
            {
                result = successResult
            });
            //return Ok();
        }
        #endregion
    }
}
