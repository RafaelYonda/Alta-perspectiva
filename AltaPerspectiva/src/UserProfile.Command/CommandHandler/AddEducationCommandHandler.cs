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
    public class AddEducationCommandHandler : EFCommandHandlerBase<AddEducationCommand, UserProfileDbContext>, ICommandHandler<AddEducationCommand>
    {
        public AddEducationCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddEducationCommand command)
        {
            Debug.WriteLine("AddEducationCommandHandler executed");
            //Education education=new Education();
            //education.UserId = command.UserId;
            //education.Institute = command.Institute;
            //education.TimeFrameFrom = command.TimeFrameFrom;
            //education.TimeFrameTo = command.TimeFrameTo;
            //education.CompletedStudies = command.CompletedStudies;
            //education.Description = command.Description;
            //education.Especiality = command.Especiality;
            //DbContext.Education.Add(education);
            //DbContext.SaveChanges();

        }

        
    
    }
}
