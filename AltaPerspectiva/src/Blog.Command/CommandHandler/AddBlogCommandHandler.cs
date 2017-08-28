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

            Domain.Blog alreadyExist = DbContext.Blogs.Where(x => x.Url == command.Url ||  (x.Title == command.Title && x.UserId == command.UserId)).FirstOrDefault();
            if (alreadyExist == null)
            {
                Domain.Blog blog = new Domain.Blog
                {
                    UserId = command.UserId,
                    CreatedOn = DateTime.Now,
                    Title = command.Title,
                    Description = command.Description,
                    Url = command.Url,
                    CreatedBy = command.UserId
                };
                blog.GenerateNewIdentity();
                DbContext.Blogs.Add(blog);
                DbContext.SaveChanges();
                command.Id = blog.Id;
            }
            else
            {
               command.Id=Guid.Empty;
            }

            
            

            
        }
    }
}
