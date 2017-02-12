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
    public class DeleteEducationCommandHandler : EFCommandHandlerBase<DeleteEducationCommand, UserProfileDbContext>, ICommandHandler<DeleteEducationCommand>
    {
        public DeleteEducationCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(DeleteEducationCommand command)
        {
            Education education =
                DbContext.Educations.FirstOrDefault(
                    x => x.Id == command.EducationId && x.CredentialId == command.CredentialId);

            if (education != null)
            {
                DbContext.Educations.Remove(education);
                DbContext.SaveChanges();
            }


        }

        
    }
}
