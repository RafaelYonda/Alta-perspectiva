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
    public class DeleteSocialLinkCommandHandler : EFCommandHandlerBase<DeleteSocialLinkCommand, UserProfileDbContext>, ICommandHandler<DeleteSocialLinkCommand>
    {
        public DeleteSocialLinkCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }
        public override void Execute(DeleteSocialLinkCommand command)
        {
            Credential credential = DbContext.Credentials.Where(x => x.UserId == command.UserId).FirstOrDefault();
            if (credential != null)
            {
                if (!String.IsNullOrEmpty(command.TwitterLink))
                {
                    credential.TwitterLink = null;
                }
                if (!string.IsNullOrEmpty(command.FacebookLink))
                {
                    credential.FacebookLink = null;
                }
                if (!String.IsNullOrEmpty(command.LinkedinLink))
                {
                    credential.LinkedinLink = null;
                }
                DbContext.Credentials.Update(credential);
            }
            
            DbContext.SaveChanges();


        }

    }

}
