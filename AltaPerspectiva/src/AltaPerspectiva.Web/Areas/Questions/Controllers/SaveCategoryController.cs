using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Hosting.Internal;
using Questions.Command.Commands;
using AltaPerspectiva.Core;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.Questions.Controllers
{
    [Area("Questions")]
    public class SaveCategoryController : Controller
    {
        private readonly IHostingEnvironment _environment;
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;

        public SaveCategoryController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory,IHostingEnvironment environment)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            _environment = environment;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult FileUpload(String name, IFormFile file,String description)
        {
            //IHostingEnvironment environment = new HostingEnvironment();
            String image = file.FileName;
            var uploads = Path.Combine(_environment.WebRootPath, "categories");
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
            AddCategoryCommand cmd = new AddCategoryCommand(loggedinUser, name, null, null, description, 1, image);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return View();
        }
    }
}
