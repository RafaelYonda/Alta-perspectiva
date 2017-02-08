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
    public class AddFollowingCommandHandler : EFCommandHandlerBase<AddFollowingCommand, UserProfileDbContext>, ICommandHandler<AddFollowingCommand>
    {
        public AddFollowingCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }
        public override void Execute(AddFollowingCommand command)
        {
            Debug.WriteLine("AddThankCommandHandler executed");

            Credential credential = DbContext.Credentials.Where(x => x.UserId == command.UserId).FirstOrDefault();
            if (credential != null)
            {
                Following following = new Following
                {
                    CredentialId = credential.Id,
                    FollowingUserId = command.FollowingUserId,
                    CreatedOn = DateTime.Now,
                    CreatedBy = command.FollowingUserId
                };
                DbContext.Followings.Add(following);
                DbContext.SaveChanges();
            }
        }
    }
}
