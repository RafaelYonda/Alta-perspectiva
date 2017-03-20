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
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;

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
            List<global::Blog.Domain.Blog> blogs = queryFactory.ResolveQuery<IBlogQuery>().GetBlogs(userId);
            List<BlogViewModel> blogViewModels = new BlogServices().GetBlogViewModels(queryFactory, blogs, configuration);

            return Ok(blogViewModels);
        }

        [HttpGet("blog/api/getblogbyid/{blogId}")]
        public IActionResult GetBlogById(Guid blogId)
        {
            global::Blog.Domain.Blog blog = queryFactory.ResolveQuery<IBlogQuery>().GetBlogById(blogId);

            BlogViewModel blogViewModel = new BlogServices().GetBlogViewModel(queryFactory, blog, configuration);
            return Ok(blogViewModel);
        }

        [HttpPost("blog/api/saveblog")]
        public IActionResult SaveBlog([FromBody]BlogViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }

            AddBlogCommand command = new AddBlogCommand(model.UserId, model.Title, model.Url, model.Description);
            commandsFactory.ExecuteQuery(command);
            model.Id = command.Id;
            bool sueccessResult = false;
            if (model.Id != Guid.Empty)
            {
                sueccessResult = true;
                //return Ok("Blog already created");
            }
            return Ok(new
            {
                result= sueccessResult
            });
        }
        [HttpPost("blog/api/updateblog")]
        public IActionResult UpdateBlog([FromBody]BlogViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            if (model.Id == Guid.Empty)
            {
                return Ok("Blog already created");
            }
            UpdateBlogCommand command = new UpdateBlogCommand(model.Id,model.Title,model.Description);
            commandsFactory.ExecuteQuery(command);
            model.Id = command.Id;

            
            return Ok(model);
        }
        #region BlogPost

        //One blog contains multiple blogposts
        [HttpGet("blog/api/getblogpostsbyblogid/{blogId}")]
        public async Task<IActionResult> GetBlogPostsByBlogId(Guid blogId)
        {

            List<BlogPost> blogPosts = await queryFactory.ResolveQuery<IBlogPostQuery>
                ().GetBlogPostsByBlogId(blogId);

            List<BlogPostViewModel> blogPostViewModels = new BlogServices().GetBlogPostViewModels(queryFactory, blogPosts, configuration);

            return Ok(blogPostViewModels);
        }

        [HttpPost("blog/api/increaseblogpostviewcount/{blogPostId}")]
        public IActionResult IncreaseBlogPostViewCount([FromBody] BlogPostViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            Boolean increased = false;
            if (loggedinUser != model.UserId)
            {

                UpdateBlogPostViewCountCommand command = new UpdateBlogPostViewCountCommand(model.Id);
                commandsFactory.ExecuteQuery(command);
                increased = true;
            }

            return Ok(increased);
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


        [HttpPost("blog/api/{blogPostId}/addcomment")]
        public IActionResult AddCommentToBlogPost([FromBody]BlogCommentViewModel comment)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }
            
            AddBlogCommentCommand command = new AddBlogCommentCommand(comment.CommentText,comment.BlogPostId, loggedinUser);
            commandsFactory.ExecuteQuery(command);

            comment.User = new UserService().GetUserViewModel(queryFactory, loggedinUser, configuration);
            comment.Id = command.Id;
            return Ok(comment);
        }


        [HttpPost("blog/api/{blogPostId}/addlike")]
        public IActionResult AddLikeToBlogPost([FromBody]BlogLikeViewModel like)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var currentUserId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(currentUserId?.ElementAt(0).ToString());
            }

            AddBlogLikeCommand command = new AddBlogLikeCommand(like.BlogPostId,like.UserId);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }


        [HttpGet("blog/api/{blogPostId}/getalreadyLiked")]
        public async Task<IActionResult> GetBlogAlreadyLiked(Guid blogPostId)
        {

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            var likes = await queryFactory.ResolveQuery<IBlogPostLikeQuery>().GetBlogPostIdUserAlreadyLiked(blogPostId, loggedinUser);
            Boolean alreadyLiked = false;
            if (likes.Count > 0)
                alreadyLiked = true;
            return Ok( alreadyLiked );
        }


        [HttpGet("blog/api/{{blogPostId}}/like")]
        public async Task<IActionResult> GetBlogLikes(Guid blogPostId)
        {
            var likes = await queryFactory.ResolveQuery<IBlogPostLikeQuery>().GetBlogPostLikesById(blogPostId);

            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (var like in likes)
            {
                Guid userId = like.UserId;
                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, userId, configuration);
                userViewModels.Add(userViewModel);
            }
            return Ok(userViewModels);

        }

        [HttpGet("blog/api/{blogPostId}/comments")]
        public async Task<IActionResult> GetBlogComments(Guid blogPostId)
        {
            var comments = await queryFactory.ResolveQuery<IBlogPostCommentQuery>().GetBlogPostCommentsById(blogPostId);
            var commentsVM = new BlogServices().GetBlogPostCommentViewModels(comments,queryFactory, configuration);
            return Ok(commentsVM);
        }

        #endregion


    }
}
