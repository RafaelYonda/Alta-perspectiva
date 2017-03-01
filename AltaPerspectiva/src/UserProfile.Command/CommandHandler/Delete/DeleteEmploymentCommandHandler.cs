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
    public class DeleteEmploymentCommandHandler : EFCommandHandlerBase<DeleteEmploymentCommand, UserProfileDbContext>, ICommandHandler<DeleteEmploymentCommand>
    {
        public DeleteEmploymentCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(DeleteEmploymentCommand command)
        {
            Employment employment =
                DbContext.Employments.FirstOrDefault(
                    x => x.CredentialId == command.CredentialId && x.Id == command.EmployementId);

            if (employment != null)
            {
                DbContext.Employments.Remove(employment);
                DbContext.SaveChanges();
            }

        }

        
    }
}
