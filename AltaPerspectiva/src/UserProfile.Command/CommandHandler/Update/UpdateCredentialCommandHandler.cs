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


namespace UserProfile.CommandHandler
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

                credential.Description = command.Description;

                credential.FirstName = command.FirstName;


                credential.LastName = command.LastName;



                credential.Title = command.Title;


            }
            DbContext.Credentials.Update(credential);
            DbContext.SaveChanges();


        }

    }

}
