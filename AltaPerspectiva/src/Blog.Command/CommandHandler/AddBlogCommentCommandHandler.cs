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
    public class AddBlogCommentCommandHandler : EFCommandHandlerBase<AddBlogCommentCommand, BlogDbContext.BlogDbContext>,
        ICommandHandler<AddBlogCommentCommand>
    {
        public AddBlogCommentCommandHandler(BlogDbContext.BlogDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddBlogCommentCommand command)
        {
            Debug.WriteLine("Add BlogPost Comment CommandHandler executed");
                       

            BlogComment comment = new BlogComment();
            comment.GenerateNewIdentity();

            comment.BlogPostId = command.BlogPostId;
            comment.CommentText = command.CommentText;
            comment.UserId = command.UserId;
            
            comment.CreatedOn = DateTime.Now;
            comment.CreatedBy = command.UserId;
            comment.DTS = DateTime.Now;

            DbContext.BlogComments.Add(comment);
            DbContext.SaveChanges();

            command.Id = comment.Id;
        }
    }
}
