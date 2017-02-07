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
    public class AddExperienceCommandHandler : EFCommandHandlerBase<AddExperienceCommand, UserProfileDbContext>, ICommandHandler<AddExperienceCommand>
    {
        public AddExperienceCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddExperienceCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");
            //Experience experience=new Experience();
            //experience.UserId = command.UserId;
            //experience.Employer = command.Employer;
            //experience.PositionHeld = command.PositionHeld;
            //experience.Location = command.Location;
            //experience.CurrentlyWorkingHere = command.CurrentlyWorkingHere;
            //experience.TimePeriodFrom=command.TimePeriodFrom;
            //experience.TimePeriodTo = command.TimePeriodTo;
            //experience.Description = experience.Description;

            //DbContext.Experience.Add(experience);
            //DbContext.SaveChanges();

        }

        
    }
    
}
