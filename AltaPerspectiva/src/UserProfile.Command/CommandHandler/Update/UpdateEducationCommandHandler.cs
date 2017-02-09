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
    public class UpdateEducationCommandHandler : EFCommandHandlerBase<UpdateEducationCommand, UserProfileDbContext>, ICommandHandler<UpdateEducationCommand>
    {
        public UpdateEducationCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateEducationCommand command)
        {
            Debug.WriteLine("UpdateEducationCommand executed");
            Education education = DbContext.Educations.FirstOrDefault(x => x.CredentialId == command.CredentialId);

            //education.UserId = command.UserId;
            //education.Institute = command.Institute;
            //education.TimeFrameFrom = command.TimeFrameFrom;
            //education.TimeFrameTo = command.TimeFrameTo;
            //education.CompletedStudies = command.CompletedStudies;
            //education.Description = command.Description;
            //education.Especiality = command.Especiality;
            DbContext.Educations.Update(education);
            DbContext.SaveChanges();

        }

        
    
    }
}
