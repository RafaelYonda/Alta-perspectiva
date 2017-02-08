using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Blog.Command.Commands;
using Blog.Query.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.Blog.Controllers
{
    [Area("Blog")]
    public class BlogController : Controller
    {
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        IDistributedCache cache;
        private readonly IConfigurationRoot configuration;
        private readonly IHostingEnvironment environment;

        public BlogController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IDistributedCache _cache, IConfigurationRoot _configuration, IHostingEnvironment _environment)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            cache = _cache;
            configuration = _configuration;
            environment = _environment;
        }

        [HttpGet("blog/api/test")]
        public IActionResult Test()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            //refractoring:My add from User Repository 
            AddBlogCommand  command=new AddBlogCommand(loggedinUser,"test","test");
            commandsFactory.ExecuteQuery(command);

            var blogs = queryFactory.ResolveQuery<IBlogQuery>().GetBlog(loggedinUser);

            return Ok();
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
