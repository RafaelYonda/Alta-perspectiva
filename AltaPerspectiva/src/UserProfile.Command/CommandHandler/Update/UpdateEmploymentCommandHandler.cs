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
    public class UpdateEmploymentCommandHandler : EFCommandHandlerBase<UpdateEmploymentCommand, UserProfileDbContext>, ICommandHandler<UpdateEmploymentCommand>
    {
        public UpdateEmploymentCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateEmploymentCommand command)
        {
            Debug.WriteLine("UpdateExperienceCommandHandler executed");
            Employment employment= DbContext.Employments.FirstOrDefault(x => x.CredentialId == command.CredentialId);
            //experience.UserId = command.UserId;
            //experience.Employer = command.Employer;
            //experience.PositionHeld = command.PositionHeld;
            //experience.Location = command.Location;
            //experience.CurrentlyWorkingHere = command.CurrentlyWorkingHere;
            //experience.TimePeriodFrom=command.TimePeriodFrom;
            //experience.TimePeriodTo = command.TimePeriodTo;
            //experience.Description = experience.Description;

            DbContext.Employments.Add(employment);
            DbContext.SaveChanges();

        }

        
    }
    
}
