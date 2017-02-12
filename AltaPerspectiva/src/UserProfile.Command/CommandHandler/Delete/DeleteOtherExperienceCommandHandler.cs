using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Command.Commands.Delete;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler.Delete
{
    public class DeleteOtherExperienceCommandHandler : EFCommandHandlerBase<DeleteOtherExperienceCommand, UserProfileDbContext>, ICommandHandler<DeleteOtherExperienceCommand>
    {
        public DeleteOtherExperienceCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(DeleteOtherExperienceCommand command)
        {
            OtherExperience otherExperience =
                DbContext.OtherExperiences.FirstOrDefault(
                    x => x.Id == command.OtherExperienceId && x.CredentialId == command.CredentialId);
            if (otherExperience != null)
            {
                DbContext.OtherExperiences.Remove(otherExperience);
                DbContext.SaveChanges();
            }


        }

        
    }
}
