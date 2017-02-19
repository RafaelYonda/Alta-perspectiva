using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Blog.Command.Commands;
using Blog.Domain;
using Blog = Blog.Domain.Blog;

namespace Blog.Command.CommandHandler
{
    public class AddBlogPostCommandHandler : EFCommandHandlerBase<AddBlogPostCommand, BlogDbContext.BlogDbContext>,
        ICommandHandler<AddBlogPostCommand>
    {
        public AddBlogPostCommandHandler(BlogDbContext.BlogDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddBlogPostCommand command)
        {
            Debug.WriteLine("AddBlogPostCommandHandler executed");

            BlogPost blogPost=new BlogPost
            {
                UserId = command.UserId,
                CreatedOn = DateTime.Now,
                Title = command.Title,
                Description = command.Description,
                BlogId = command.BlogId,
                CreatedBy = command.UserId,
               
            };
            blogPost.GenerateNewIdentity();
            DbContext.BlogPosts.Add(blogPost);
            DbContext.SaveChanges();
        }
    }
}
