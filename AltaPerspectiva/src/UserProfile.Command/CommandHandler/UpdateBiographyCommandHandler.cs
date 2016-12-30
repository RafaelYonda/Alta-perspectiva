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
    public class UpdateBiographyCommandHandler : EFCommandHandlerBase<UpdateBiographyCommand, UserProfileDbContext>, ICommandHandler<UpdateBiographyCommand>
    {
        public UpdateBiographyCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateBiographyCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

            Biography biography = DbContext.Biography.FirstOrDefault(x => x.UserId == command.UserId);
            //biography.GenerateNewIdentity();
            biography.UserId = command.UserId;
            biography.AboutMe = command.AboutMe;
            biography.TagLine = command.TagLine;

            DbContext.Biography.Add(biography);
            DbContext.SaveChanges();

        }
        
    }
}
