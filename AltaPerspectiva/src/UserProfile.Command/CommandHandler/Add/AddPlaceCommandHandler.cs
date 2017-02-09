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
    public class AddPlaceCommandHandler : EFCommandHandlerBase<AddPlaceCommand, UserProfileDbContext>, ICommandHandler<AddPlaceCommand>
    {
        public AddPlaceCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }
        public override void Execute(AddPlaceCommand command)
        {
            Debug.WriteLine("AddPlaceCommandHandler executed");

            Place place = new Place
            {
                CredentialId = command.CredentialId,
                CreatedOn = DateTime.Now,
                StartYear = command.StartYear,
                EndYear = command.EndYear,
                LocationName = command.LocationName,
                IsCurrentyLiving = command.IsCurrentyLiving
            };
            DbContext.Places.Add(place);
            DbContext.SaveChanges();


        }


    }


}
