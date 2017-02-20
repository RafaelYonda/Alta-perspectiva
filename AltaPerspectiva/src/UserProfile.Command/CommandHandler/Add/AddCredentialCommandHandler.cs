using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class AddCredentialCommandHandler : EFCommandHandlerBase<AddCredentialCommand, UserProfileDbContext>, ICommandHandler<AddCredentialCommand>
    {
        public AddCredentialCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddCredentialCommand command)
        {
            Debug.WriteLine("AddCredentialCommandHandler executed");

            var previousCredential = DbContext.Credentials.Where(x => x.UserId == command.UserId).FirstOrDefault();

            if (previousCredential != null)
            {
                previousCredential.FirstName = command.FirstName??"";
                previousCredential.LastName = command.LastName??"";
                command.Id = previousCredential.Id;
            }
            else
            {
                Credential credential = new Credential
                {
                    UserId = command.UserId,
                    ImageUrl = command.ImageUrl,
                    Title = command.Title,
                    FirstName = command.FirstName,
                    LastName = command.LastName,
                    ProfileViewCount = 0,
                    CreatedOn = DateTime.Now,
                    Description = command.Description
                };
                credential.GenerateNewIdentity();
                DbContext.Credentials.Add(credential);
                command.Id = credential.Id;
            }

            

            DbContext.SaveChanges();
            

        }
    }
}
