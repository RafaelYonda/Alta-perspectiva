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
using UserProfile.Domain.AllModels;

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

            Education education = new Education
            {
                SchoolName = command.SchoolName,
                SchoolDegreeName = command.SchoolDegreeName,
                SchoolCompletionDate = command.SchoolCompletionDate,
                CreatedOn = DateTime.Now,
                CredentialId = command.CredentialId,
                CollegeName = command.CollegeName,
                Certification = command.Certification,
                CertificationType = command.CertificationType,
                CollegeCompletionDate = command.CollegeCompletionDate,
                CollegeDegree = command.CollegeDegree,

            };
            DbContext.Educations.Add(education);
            DbContext.SaveChanges();
           

        }

        
    
    }
}
