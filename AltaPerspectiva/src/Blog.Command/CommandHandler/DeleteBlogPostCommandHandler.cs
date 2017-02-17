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
    public class DeleteBlogPostCommandHandler : EFCommandHandlerBase<DeleteBlogPostCommand, BlogDbContext.BlogDbContext>,
        ICommandHandler<DeleteBlogPostCommand>
    {
        public DeleteBlogPostCommandHandler(BlogDbContext.BlogDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(DeleteBlogPostCommand command)
        {
            Debug.WriteLine("DeleteBlogCommandHandler executed");

            BlogPost blogPost = DbContext.BlogPosts.FirstOrDefault(x => x.Id == command.BlogPostId);
            if (blogPost != null)
            {
                blogPost.IsDeleted = true;
            }
            DbContext.BlogPosts.Update(blogPost);

            DbContext.SaveChanges();
        }
    }
}
