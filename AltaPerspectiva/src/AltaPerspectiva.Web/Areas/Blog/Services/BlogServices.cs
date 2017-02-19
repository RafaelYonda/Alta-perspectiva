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
            List<BlogViewModel> blogViewModels=new List<BlogViewModel>();
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
                    blogViewModel.UserViewModel = userViewModel;
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
            blogViewModel.UserViewModel = new UserService().GetUserViewModel(queryFactory, blog.UserId);


            return blogViewModel;
        }

        public List<BlogPostViewModel> GetBlogPostViewModels(IQueryFactory queryFactory, List<BlogPost> blogPosts)
        {
            List<BlogPostViewModel> blogPostViewModels=new List<BlogPostViewModel>();
            foreach (var blogPost in blogPosts)
            {
                BlogPostViewModel blogPostViewModel = new BlogPostViewModel
                {
                    CreatedOn = blogPost.CreatedOn,
                    Title = blogPost.Title,
                    Description = blogPost.Description,
                    BlogId = blogPost.BlogId
                };
                blogPostViewModels.Add(blogPostViewModel);
            }
            return blogPostViewModels;
        } 
    }
}
