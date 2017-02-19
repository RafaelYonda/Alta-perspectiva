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
using AltaPerspectiva.Web.Areas.Blog.Services;
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

        [HttpGet("blog/api/getblogs/{userId}")]
        public IActionResult GetBlogs(Guid userId)
        {
           List< global::Blog.Domain.Blog> blogs = queryFactory.ResolveQuery<IBlogQuery>().GetBlogs(userId);
            List<BlogViewModel> blogViewModels = new BlogServices().GetBlogViewModels(queryFactory, blogs);

            return Ok(blogViewModels);
        }
        [HttpGet("blog/api/getblogbyid/{blogId}")]
        public IActionResult GetBlogById(Guid blogId)
        {
            global::Blog.Domain.Blog blog = queryFactory.ResolveQuery<IBlogQuery>().GetBlogById(blogId);

            BlogViewModel blogViewModel = new BlogServices().GetBlogViewModel(queryFactory, blog);
            return Ok(blogViewModel);
        
        [HttpPost("blog/api/saveblog")]
        public IActionResult SaveBlog([FromBody]BlogViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            ////  if (model.Id == Guid.Empty)
            //{
            AddBlogCommand command = new AddBlogCommand(model.UserId, model.Title, model.Url, model.Description);
            commandsFactory.ExecuteQuery(command);
            model.Id = command.Id;
            // }
            // else
            // {
            //Update
            // }
            if (model.Id == Guid.Empty)
            {
                return Ok("Blog already created");
            }
            return Ok(model);
        }
        #region BlogPost

        //One blog contains multiple blogposts
        [HttpGet("blog/api/getblogpostsbyblogid/{blogId}")]
        public async Task<IActionResult> GetBlogPostsByBlogId(Guid blogId)
        {

            List<BlogPost> blogPosts = await queryFactory.ResolveQuery<IBlogPostQuery>
                ().GetBlogPostsByBlogId(blogId);

            List<BlogPostViewModel> blogPostViewModels = new BlogServices().GetBlogPostViewModels(queryFactory, blogPosts);

            return Ok(blogPostViewModels);
        }

        //saves a blog post
        [HttpPost("blog/api/saveblogpost")]
        public IActionResult SaveBlogPost([FromBody]BlogPostViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            AddBlogPostCommand command = new AddBlogPostCommand(loggedinUser, model.Title, model.Description, model.BlogId);
            commandsFactory.ExecuteQuery(command);
            return Ok();
        }
        //delete a blogpost
        [HttpPost("blog/api/deleteblogpost/{blogPostId}")]
        public IActionResult DeleteBlogPost(Guid blogPostId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            DeleteBlogPostCommand command = new DeleteBlogPostCommand(blogPostId);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion


    }
}
