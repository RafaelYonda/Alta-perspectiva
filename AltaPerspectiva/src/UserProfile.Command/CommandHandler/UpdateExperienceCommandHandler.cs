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
    public class UpdateExperienceCommandHandler : EFCommandHandlerBase<UpdateExperienceCommand, UserProfileDbContext>, ICommandHandler<UpdateExperienceCommand>
    {
        public UpdateExperienceCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateExperienceCommand command)
        {
            Debug.WriteLine("UpdateExperienceCommandHandler executed");
            Experience experience = DbContext.Experience.FirstOrDefault(x => x.UserId == command.UserId);
            experience.UserId = command.UserId;
            experience.Employer = command.Employer;
            experience.PositionHeld = command.PositionHeld;
            experience.Location = command.Location;
            experience.CurrentlyWorkingHere = command.CurrentlyWorkingHere;
            experience.TimePeriodFrom=command.TimePeriodFrom;
            experience.TimePeriodTo = command.TimePeriodTo;
            experience.Description = experience.Description;

            DbContext.Experience.Add(experience);
            DbContext.SaveChanges();

        }

        
    }
    
}
