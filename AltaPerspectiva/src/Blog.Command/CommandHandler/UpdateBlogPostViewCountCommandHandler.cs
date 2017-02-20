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
    public class UpdateBlogPostViewCountCommandHandler : EFCommandHandlerBase<UpdateBlogPostViewCountCommand, BlogDbContext.BlogDbContext>,
        ICommandHandler<UpdateBlogPostViewCountCommand>
    {
        public UpdateBlogPostViewCountCommandHandler(BlogDbContext.BlogDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(UpdateBlogPostViewCountCommand command)
        {
            Debug.WriteLine("UpdateBlogPostViewCountCommand executed");

            BlogPost blogPost = DbContext.BlogPosts.FirstOrDefault(x => x.Id == command.BlogPostId);

            if (blogPost != null)
            {
                long viewCount = blogPost.BlogViewCount;
                blogPost.BlogViewCount = viewCount + 1;
                DbContext.BlogPosts.Update(blogPost);
                DbContext.SaveChanges();
            }




        }
    }
}
