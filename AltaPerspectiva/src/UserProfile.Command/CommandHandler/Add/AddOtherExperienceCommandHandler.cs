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
    public class AddOtherExperienceCommandHandler : EFCommandHandlerBase<AddOtherExperienceCommand, UserProfileDbContext>, ICommandHandler<AddOtherExperienceCommand>
    {
        public AddOtherExperienceCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddOtherExperienceCommand command)
        {
            Debug.WriteLine("AddOtherExperienceCommandHandler executed");

            OtherExperience otherExperience =
                DbContext.OtherExperiences.FirstOrDefault(x => x.CredentialId == command.CredentialId);
            if (otherExperience == null)
            {
                OtherExperience experience = new OtherExperience
                {
                    CredentialId = command.CredentialId,
                    CreatedOn = DateTime.Now,
                    Description = command.Description,
                    CategoryId = command.CategoryId,

                };
                experience.GenerateNewIdentity();
                DbContext.OtherExperiences.Add(experience);
            }
            else
            {
                otherExperience.Description = command.Description;
                otherExperience.CategoryId = command.CategoryId;
                DbContext.OtherExperiences.Update(otherExperience);
            }

           
            DbContext.SaveChanges();

            //PracticeArea area=new PracticeArea();
            //area.UserId = command.UserId;
            //area.PracticeAreaName = command.PracticeAreaName;

            //DbContext.PracticeArea.Add(area);
            //DbContext.SaveChanges();

        }
    }
    
    
}
