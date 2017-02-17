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
            
            DbContext.SaveChanges();
        }
    }
}
