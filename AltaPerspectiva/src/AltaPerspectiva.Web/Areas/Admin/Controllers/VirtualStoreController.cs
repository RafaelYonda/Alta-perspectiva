using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Admin.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using UserProfile.Command.Commands;
using UserProfile.Domain;
using UserProfile.Query.Interfaces;
using AltaPerspectiva.Web.Areas.Admin.Services;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class VirtualStoreController : Controller
    {
        #region Ctor

        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        IDistributedCache cache;
        private readonly IConfigurationRoot configuration;
        private readonly IHostingEnvironment environment;

        public VirtualStoreController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory,
            IDistributedCache _cache, IConfigurationRoot _configuration, IHostingEnvironment _environment)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            cache = _cache;
            configuration = _configuration;
            environment = _environment;
        }

        #endregion

        #region API

        [HttpGet("admin/virtualstore/getitems")]
        public IActionResult GetAllItems()
        {
            List<VirtualStore> virtualStores = queryFactory.ResolveQuery<IVirtualStoreQuery>().GetVirtualStores();
            List<AddVirtualStoreViewModel> addVirtualStoreViewModels =
                new VirtualStoreService().GetAddVirtualStoreViewModel(virtualStores);
            return Ok(addVirtualStoreViewModels);
        }
        [HttpGet("admin/virtualstore/getitembyid/{id}")]
        public IActionResult GetItemById(Guid id)
        {
            VirtualStore virtualStore = queryFactory.ResolveQuery<IVirtualStoreQuery>().GetVirtualStore(id);

            AddVirtualStoreViewModel model =
                new VirtualStoreService().GetAddVirtualStoreViewModel(new List<VirtualStore>
                {
                    virtualStore
                })[0];
            return Ok(model);
        }


        #endregion

        [HttpGet("Admin/VirtualStore/Index")]
        public IActionResult Index()
        {
            List<VirtualStore> virtualStores = queryFactory.ResolveQuery<IVirtualStoreQuery>().GetVirtualStores();
            AddVirtualStoreViewModel addVirtualStoreViewModel = new AddVirtualStoreViewModel();
            addVirtualStoreViewModel.VirtualStores = virtualStores;
            return View(addVirtualStoreViewModel);
        }

        [HttpPost]
        public IActionResult Index(AddVirtualStoreViewModel addVirtualStoreViewModel)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var uid =User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(uid?.ElementAt(0).ToString());

            }
            //=========Set ScreeenShot file Name and Path========
            String screenShotFileName = addVirtualStoreViewModel.ScreenShotImage.FileName;
            addVirtualStoreViewModel.ScreenShotFileName = screenShotFileName;
            var screenShotuploadPath = Path.Combine(Path.Combine(environment.WebRootPath, configuration["VirtualStoreUpload"]), screenShotFileName);
            using (var fileStream = new FileStream(screenShotuploadPath, FileMode.Create))
            {
                addVirtualStoreViewModel.ScreenShotImage.CopyTo(fileStream);
            }
            //==========Set Product file Name and Path===============
            String productFileName = addVirtualStoreViewModel.ProductFile.FileName;
            addVirtualStoreViewModel.ProductFileName = productFileName;
            var productUploadPath = Path.Combine(Path.Combine(environment.WebRootPath, configuration["VirtualStoreUpload"]), productFileName);
            using (var fileStream = new FileStream(productUploadPath, FileMode.Create))
            {
                addVirtualStoreViewModel.ProductFile.CopyTo(fileStream);
            }

            AddVirtualStoreCommand command = new AddVirtualStoreCommand(loggedinUser, addVirtualStoreViewModel.Price,
                addVirtualStoreViewModel.Title, addVirtualStoreViewModel.Description, addVirtualStoreViewModel.ProductFileName,
                addVirtualStoreViewModel.ScreenShotFileName);
            commandsFactory.ExecuteQuery(command);

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(Guid Id)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var uid =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(uid?.ElementAt(0).ToString());

            }
            return View();
        }

        [HttpGet]
        public IActionResult Delete(Guid id)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var uid =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(uid?.ElementAt(0).ToString());

            }
            VirtualStore virtualStore = queryFactory.ResolveQuery<IVirtualStoreQuery>().GetVirtualStore(id);
            AddVirtualStoreViewModel addVirtualStoreViewModel = new AddVirtualStoreViewModel
            {
                Id = virtualStore.Id,
                Description = virtualStore.Description,
                Title = virtualStore.Title,
                ProductFileName = virtualStore.ProductFileName,
                ScreenShotFileName = virtualStore.ScreenShotFileName,
                Price = virtualStore.Price,
                VirtualStores = null
            };
            return View(addVirtualStoreViewModel);
        }

        [HttpPost]
        public IActionResult Delete(AddVirtualStoreViewModel addVirtualStoreViewModel)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var uid =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(uid?.ElementAt(0).ToString());

            }
            Guid id = addVirtualStoreViewModel.Id;
            DeleteVirtualStoreCommand command = new DeleteVirtualStoreCommand(loggedinUser, id);
            commandsFactory.ExecuteQuery(command);

            return RedirectToAction("Index");
        }
    }
}
