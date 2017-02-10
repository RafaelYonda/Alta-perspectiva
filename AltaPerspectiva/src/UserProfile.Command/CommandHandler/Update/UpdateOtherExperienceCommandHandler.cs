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
    public class UpdateOtherExperienceCommandHandler : EFCommandHandlerBase<UpdateOtherExperienceCommand, UserProfileDbContext>, ICommandHandler<UpdateOtherExperienceCommand>
    {
        public UpdateOtherExperienceCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateOtherExperienceCommand command)
        {
            Debug.WriteLine("UpdateOtherExperienceCommand executed");


            //Biography biography = DbContext.Biography.FirstOrDefault(x => x.UserId == command.UserId);
            ////biography.GenerateNewIdentity();
            //biography.UserId = command.UserId;
            //biography.AboutMe = command.AboutMe;
            //biography.TagLine = command.TagLine;

            //DbContext.Biography.Update(biography);
            //DbContext.SaveChanges();

        }
        
    }
}
