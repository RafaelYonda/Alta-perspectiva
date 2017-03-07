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
    public class UpdateSocialLinkCommandHandler : EFCommandHandlerBase<UpdateSocialLinkCommand, UserProfileDbContext>, ICommandHandler<UpdateSocialLinkCommand>
    {
        public UpdateSocialLinkCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }
        public override void Execute(UpdateSocialLinkCommand command)
        {
            Debug.WriteLine("UpdateSocialLinkCommandHandler executed");

            Credential credential = DbContext.Credentials.Where(x => x.UserId == command.UserId).FirstOrDefault();
            if (credential != null)
            {
                if (!String.IsNullOrEmpty(command.TwitterLink))
                {
                    credential.TwitterLink = command.TwitterLink;
                }
                if (!string.IsNullOrEmpty(command.FacebookLink))
                {
                    credential.FacebookLink = command.FacebookLink;
                }
                if (!String.IsNullOrEmpty(command.LinkedinLink))
                {
                    credential.LinkedinLink = command.LinkedinLink;
                }
                

                DbContext.Credentials.Update(credential);
            }
            
            DbContext.SaveChanges();


        }

    }

}
