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
    public class AddEmploymentCommandHandler : EFCommandHandlerBase<AddEmploymentCommand, UserProfileDbContext>, ICommandHandler<AddEmploymentCommand>
    {
        public AddEmploymentCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddEmploymentCommand command)
        {
            Debug.WriteLine("AddEmploymentCommandHandler executed");

            Employment employment = new Employment
            {
                CredentialId = command.CredentialId,
                CreatedOn = DateTime.Now,
                StartDate = command.StartDate,
                EndDate = command.EndDate,
                CompanyName = command.CompanyName,
                IsCurrentlyWorking = command.IsCurrentlyWorking,
                Position = command.Position
                // CreatedBy = command.UserId
            };
            DbContext.Employments.Add(employment);
            DbContext.SaveChanges();
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
