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
using UserProfile.Domain.AllModels;

namespace UserProfile.Command.CommandHandler
{
    public class UpdateCredentialCommandHandler : EFCommandHandlerBase<UpdateCredentialCommand, UserProfileDbContext>, ICommandHandler<UpdateCredentialCommand>
    {
        public UpdateCredentialCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateCredentialCommand command)
        {
            Debug.WriteLine("UpdateCredentialCommandHandler executed");

            Credential credential = DbContext.Credentials.Where(x => x.Id == command.CredentialId).FirstOrDefault();
            if (credential != null)
            {
                if (!string.IsNullOrEmpty(command.Description))
                {
                    credential.Description = command.Description;
                }
                if (!string.IsNullOrEmpty(command.FirstName))
                {
                    credential.FirstName = command.FirstName;
                }
                if (!string.IsNullOrEmpty(command.LastName))
                {
                    credential.LastName = command.LastName;
                }
               
                if (!string.IsNullOrEmpty(command.Title))
                {
                    credential.Title = command.Title;
                }
               
            }
            DbContext.Credentials.Update(credential);
            DbContext.SaveChanges();


        }

    }
    
}
