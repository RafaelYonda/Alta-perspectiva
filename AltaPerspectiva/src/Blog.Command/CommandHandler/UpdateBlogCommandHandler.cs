using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Blog.Command.Commands;
using Blog = Blog.Domain.Blog;

namespace Blog.Command.CommandHandler
{
    public class UpdateBlogCommandHandler : EFCommandHandlerBase<UpdateBlogCommand, BlogDbContext.BlogDbContext>,
        ICommandHandler<UpdateBlogCommand>
    {
        public UpdateBlogCommandHandler(BlogDbContext.BlogDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(UpdateBlogCommand command)
        {
            Debug.WriteLine("UpdateBlogCommand executed");

            Domain.Blog blog = DbContext.Blogs.FirstOrDefault(x => x.Id == command.BlogId);
            if (blog != null)
            {
                blog.Description = command.Description;
                blog.Title = command.Title;
                DbContext.Blogs.Update(blog);
                DbContext.SaveChanges();
            }





        }
    }
}
