using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Blog.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using AltaPerspectiva.Core;
using Blog.Domain;

namespace AltaPerspectiva.Web.Areas.Blog.Services
{
    public class BlogServices
    {
        public List<BlogViewModel> GetBlogViewModels(IQueryFactory queryFactory, List<global::Blog.Domain.Blog> blogs)
        {
            List<BlogViewModel> blogViewModels = new List<BlogViewModel>();
            if (blogs.Any())
            {
                UserViewModel userViewModel = new UserService().GetUserViewModel(queryFactory, blogs[0].UserId);
                foreach (var blog in blogs)
                {
                    BlogViewModel blogViewModel = new BlogViewModel();
                    blogViewModel.Description = blog.Description;
                    blogViewModel.Id = blog.Id;
                    blogViewModel.Title = blog.Title;
                    blogViewModel.Url = blog.Url;

                    blogViewModel.UserId = blog.UserId;
                    blogViewModel.User = userViewModel;
                    blogViewModels.Add(blogViewModel);
                }
            }
            return blogViewModels;
        }
        public BlogViewModel GetBlogViewModel(IQueryFactory queryFactory, global::Blog.Domain.Blog blog)
        {
            BlogViewModel blogViewModel = new BlogViewModel();
            blogViewModel.Description = blog.Description;
            blogViewModel.Id = blog.Id;
            blogViewModel.Title = blog.Title;
            blogViewModel.Url = blog.Url;

            blogViewModel.UserId = blog.UserId;
            blogViewModel.User = new UserService().GetUserViewModel(queryFactory, blog.UserId);


            return blogViewModel;
        }

        public List<BlogPostViewModel> GetBlogPostViewModels(IQueryFactory queryFactory, List<BlogPost> blogPosts)
        {
            List<BlogPostViewModel> blogPostViewModels = new List<BlogPostViewModel>();
            foreach (var blogPost in blogPosts)
            {
                BlogPostViewModel blogPostViewModel = new BlogPostViewModel
                {
                    Id = blogPost.Id,
                    CreatedOn = blogPost.CreatedOn,
                    Title = blogPost.Title,
                    Description = blogPost.Description,
                    BlogId = blogPost.BlogId,
                    User = new UserService().GetUserViewModel(queryFactory, blogPost.UserId),
                    UserId=blogPost.UserId
                };

                //BlogCommentViewModel
                List<BlogCommentViewModel> blogCommentViewModels = blogPost.BlogComments.Select(x => new BlogCommentViewModel
                {
                    CommentText = x.CommentText,
                    UserId = x.UserId,
                    Id = x.Id,
                    BlogPostId = x.BlogPostId,
                    User = new UserService().GetUserViewModel(queryFactory, x.UserId)
                }).ToList();
                blogPostViewModel.Comments = blogCommentViewModels;

                //BlogLikeViewModel
                List<BlogLikeViewModel> blogLikes = blogPost.BlogLikes.Select(x => new BlogLikeViewModel
                {
                    UserId = x.UserId,
                    Id = x.Id,
                    BlogPostId = x.BlogPostId,
                    User = new UserService().GetUserViewModel(queryFactory, x.UserId)
                }).ToList();
                blogPostViewModel.Likes = blogLikes;

                blogPostViewModels.Add(blogPostViewModel);
            }
            return blogPostViewModels;
        }

        public List<BlogCommentViewModel> GetBlogPostCommentViewModels(List<BlogComment> blogPosts, IQueryFactory queryFactory)
        {
            List<BlogCommentViewModel> commentsVM = new List<BlogCommentViewModel>();
            foreach (var vm in commentsVM)
            {
                BlogCommentViewModel commentViewModel = new BlogCommentViewModel
                {
                    Id = vm.Id,
                    UserId = vm.UserId,
                    User = new UserService().GetUserViewModel(queryFactory, vm.UserId),
                    CommentText = vm.CommentText,
                    BlogPostId = vm.BlogPostId
                };
                commentsVM.Add(commentViewModel);
            }
            return commentsVM;
        }

        public List<BlogLikeViewModel> GetBlogPostLikeViewModels(IQueryFactory queryFactory, List<BlogLike> likes)
        {
            List<BlogLikeViewModel> likesVM = new List<BlogLikeViewModel>();
            foreach (var vm in likes)
            {
                BlogLikeViewModel lvm = new BlogLikeViewModel
                {
                    Id = vm.Id,
                    BlogPostId = vm.BlogPostId,
                    UserId = vm.BlogPostId,
                    User = new UserService().GetUserViewModel(queryFactory, vm.UserId)
                };
                likesVM.Add(lvm);
            }
            return likesVM;
        }
    }
}
