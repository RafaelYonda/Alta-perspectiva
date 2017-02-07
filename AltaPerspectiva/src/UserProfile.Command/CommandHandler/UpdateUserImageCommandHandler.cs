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
    public class UpdateUserImageCommandHandler : EFCommandHandlerBase<UpdateUserImageCommand, UserProfileDbContext>, ICommandHandler<UpdateUserImageCommand>
    {
        public UpdateUserImageCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateUserImageCommand command)
        {
            Debug.WriteLine("AddUserImageCommandHandler executed");

          //  UserImage image = DbContext.UserImage.FirstOrDefault(x => x.UserId == command.UserId);
          //  //image.GenerateNewIdentity();
          //  image.UserId = command.UserId;
          //  image.Image = command.Image;
          ////  DbContext.UserImage.Add(image);
          //  DbContext.SaveChanges();
        }

    }
    
}
