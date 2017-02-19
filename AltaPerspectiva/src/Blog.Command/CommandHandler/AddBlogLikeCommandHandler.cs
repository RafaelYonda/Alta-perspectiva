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
    public class AddBlogLikeCommandHandler : EFCommandHandlerBase<AddBlogLikeCommand, BlogDbContext.BlogDbContext>,
        ICommandHandler<AddBlogLikeCommand>
    {
        public AddBlogLikeCommandHandler(BlogDbContext.BlogDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddBlogLikeCommand command)
        {
            Debug.WriteLine("Add BlogPost Like CommandHandler executed");
                       

            BlogLike like = new BlogLike();
            like.GenerateNewIdentity();

            like.BlogPostId = command.BlogPostId;           
            like.UserId = command.UserId;

            like.CreatedOn = DateTime.Now;
            like.CreatedBy = command.UserId;
            like.DTS = DateTime.Now;

            DbContext.BlogLikes.Add(like);
            DbContext.SaveChanges();

            command.Id = like.Id;
        }
    }
}
