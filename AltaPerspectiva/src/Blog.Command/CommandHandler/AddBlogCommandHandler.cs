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
    public class AddBlogCommandHandler : EFCommandHandlerBase<AddBlogCommand, BlogDbContext.BlogDbContext>,
        ICommandHandler<AddBlogCommand>
    {
        public AddBlogCommandHandler(BlogDbContext.BlogDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddBlogCommand command)
        {
            Debug.WriteLine("AddBlogCommandHandler executed");
            Domain.Blog blog = new Domain.Blog
            {
                UserId = command.UserId,
                BlogName = command.BlogName,
                Url = command.Url,
                CreatedOn = DateTime.Now
            };
            DbContext.Blogs.Add(blog);
            DbContext.SaveChanges();
        }
    }
}
