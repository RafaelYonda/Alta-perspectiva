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
    public class UpdatePlaceCommandHandler : EFCommandHandlerBase<UpdatePlaceCommand, UserProfileDbContext>,ICommandHandler<UpdatePlaceCommand>
    {
        public UpdatePlaceCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdatePlaceCommand command)
        {
            Debug.WriteLine("UpdatePlaceCommand executed");

            Place place =
                DbContext.Places.FirstOrDefault(x => x.CredentialId == command.CredentialId);
            //information.UserId = command.UserId;
            //information.FirstName = command.FirstName;
            //information.LastName = command.LastName;
            //information.PrefferedEmail = command.PrefferedEmail;
            //information.PhoneNumber = command.PhoneNumber;
            //information.AddressLine1 = command.AddressLine1;
            //information.AddressLine2 = command.AddressLine2;
            //information.Country = command.Region;
            //information.Region = command.Region;
            //information.City = command.City;

            DbContext.Places.Add(place);
            DbContext.SaveChanges();
            
        }
    }
}
