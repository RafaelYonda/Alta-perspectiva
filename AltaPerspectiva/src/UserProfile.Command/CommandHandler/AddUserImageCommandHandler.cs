using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class AddUserImageCommandHandler : EFCommandHandlerBase<AddUserImageCommand, UserProfileDbContext>, ICommandHandler<AddUserImageCommand>
    {
        public AddUserImageCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddUserImageCommand command)
        {
            Debug.WriteLine("AddUserImageCommandHandler executed");

            UserImage image=new UserImage();
            image.GenerateNewIdentity();
            image.UserId = command.UserId;
            image.Image = command.Image;
            DbContext.UserImage.Add(image);
            DbContext.SaveChanges();

        }

    }
    
}
