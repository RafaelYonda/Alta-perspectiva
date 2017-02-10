﻿using AltaPerspectiva.Core;
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
            

            DbContext.Places.Add(place);
            DbContext.SaveChanges();
            
        }
    }
}
