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
    public class DeletePlaceCommandHandler : EFCommandHandlerBase<DeletePlaceCommand, UserProfileDbContext>, ICommandHandler<DeletePlaceCommand>
    {
        public DeletePlaceCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(DeletePlaceCommand command)
        {
            Place place =
                DbContext.Places.FirstOrDefault(x => x.Id == command.PlaceId && x.CredentialId == command.CredentialId);
            if (place != null)
            {
                DbContext.Places.Remove(place);
                DbContext.SaveChanges();
            }


        }

        
    }
}
