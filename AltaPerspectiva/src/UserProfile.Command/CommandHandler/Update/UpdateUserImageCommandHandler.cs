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
            Debug.WriteLine("UpdateUserImageCommandHandler executed");
            Credential credential = DbContext.Credentials.Where(x => x.UserId == command.UserId).FirstOrDefault();

            if (credential != null)
            {
                credential.ImageUrl = command.ImageUrl;
                DbContext.Credentials.Update(credential);
            }
            else
            {
                Credential newcredential = new Credential
                {
                    UserId = command.UserId,
                    CreatedOn = DateTime.Now,
                    Title = "",
                    ProfileViewCount = 0,
                    FirstName = "",
                    LastName = "",
                    Description = "",
                    ImageUrl = command.ImageUrl,

                };
                DbContext.Credentials.Add(newcredential);
                DbContext.SaveChanges();
                

            }
            
            DbContext.SaveChanges();

        }

    }
    
}
