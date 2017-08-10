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
    public class UpdateEmploymentCommandHandler : EFCommandHandlerBase<UpdateEmploymentCommand, UserProfileDbContext>, ICommandHandler<UpdateEmploymentCommand>
    {
        public UpdateEmploymentCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateEmploymentCommand command)
        {
            Employment employment= DbContext.Employments.FirstOrDefault(x => x.CredentialId == command.CredentialId);
            if (employment != null)
            {
                if (!string.IsNullOrEmpty(command.CompanyName))
                {
                    employment.CompanyName = command.CompanyName;
                }
                if (!string.IsNullOrEmpty(command.Position))
                {
                    employment.Position = command.Position;
                    Credential credential = DbContext.Credentials.FirstOrDefault(x => x.Id == employment.CredentialId);
                    if (credential != null)
                    {
                        credential.Occupation = command.Position;
                        DbContext.Credentials.Update(credential);
                    }
                }
                if (command.EndDate!=null)
                {
                    employment.EndDate = command.EndDate;
                }
                employment.IsCurrentlyWorking = command.IsCurrentlyWorking;
                if (command.StartDate != null)
                {
                    employment.StartDate = command.StartDate;
                }
            }

            DbContext.Employments.Update(employment);
            DbContext.SaveChanges();

        }

        
    }
    
}
