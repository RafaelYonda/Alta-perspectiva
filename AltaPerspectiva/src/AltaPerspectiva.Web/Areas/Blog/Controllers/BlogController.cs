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
using AltaPerspectiva.Web.Areas.Blog.Models;
using Blog.Domain;

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

        [HttpGet("blog/api/getblog/{userId}")]
        public IActionResult GetBlog(Guid userId)
        {
           global::Blog.Domain.Blog blog = queryFactory.ResolveQuery<IBlogQuery>().GetBlog(userId);
            return Ok(blog);
        }
        [HttpGet("blog/api/getbloglist/{userId}")]
        public IActionResult GetBlogList(Guid userId)
        {
          List< global::Blog.Domain.Blog> blogs = queryFactory.ResolveQuery<IBlogQuery>().GetBlogList(userId);
            return Ok(blogs);
        }
        [HttpPost("blog/api/saveblog")]
        public IActionResult SaveBlog([FromBody]AddBlogViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            if (model.Id == Guid.Empty)
            {
                AddBlogCommand command = new AddBlogCommand(model.UserId, model.Title, model.Url, model.Description);
                commandsFactory.ExecuteQuery(command);
                model.Id = command.Id;
            }
            else
            {
                //Update
            }
          

            return Ok();
        }
        [HttpGet("blog/api/getblogpost/{userId}")]
        public async Task<IActionResult> GetBlogPost(Guid userId)
        {
            List<BlogPost> blogPost=new List<BlogPost>();
            global::Blog.Domain.Blog blog = queryFactory.ResolveQuery<IBlogQuery>().GetBlog(userId);
            if (blog != null)
            {
                //add blog 
                blogPost = await queryFactory.ResolveQuery<IBlogPostQuery>().GetBlogPostsByBlogId(blog.Id);
            }
            else
            {
                //you have not create a blog yet
            }
            
            return Ok(blogPost);
        }

        [HttpPost("blog/api/saveblogpost")]
        public IActionResult SaveBlogPost([FromBody]AddBlogPostViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            

            AddBlogPostCommand command=new AddBlogPostCommand(loggedinUser,model.Title,model.Description,Guid.Empty);
            commandsFactory.ExecuteQuery(command);

            global::Blog.Domain.Blog blog = queryFactory.ResolveQuery<IBlogQuery>().GetBlog(loggedinUser);
            if (blog != null)
            {
                //add blog 
            }
            else
            {
                //you have not create a blog yet
            }


            return Ok();
        }

        [HttpPost("blog/api/deleteblogpost/{id}")]
        public IActionResult DeleteBlogPost(Guid id)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            DeleteBlogPostCommand command=new DeleteBlogPostCommand(id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }



    }
}
