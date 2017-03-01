using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class AddProductCommentCommandHandler : EFCommandHandlerBase<AddProductCommentCommand, UserProfileDbContext>, ICommandHandler<AddProductCommentCommand>
    {
        public AddProductCommentCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddProductCommentCommand command)
        {
            Debug.WriteLine("AddProductCommentCommandHandler executed");

            ProductComment productComment = new ProductComment
            {
                UserId = command.UserId,
                CreatedOn = DateTime.Now,
                VirtualStoreId = command.VirtualStoreId,
                CommentText = command.CommentText
            };
            productComment.GenerateNewIdentity();
            DbContext.ProductComments.Add(productComment);
            DbContext.SaveChanges();
            

        }
    }
}
