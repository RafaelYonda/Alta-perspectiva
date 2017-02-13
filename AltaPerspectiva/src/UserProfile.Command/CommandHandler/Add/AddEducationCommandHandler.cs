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

namespace UserProfile.CommandHandler
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

            Credential credential = DbContext.Credentials.Where(x => x.UserId == command.UserId).FirstOrDefault();
            if (credential != null)
            {
                Guid credentialId = credential.Id;
                Education education = new Education
                {
                    SchoolName = command.SchoolName,
                    SchoolDegreeName = command.SchoolDegreeName,
                    SchoolCompletionDate = command.SchoolCompletionDate,
                    CreatedOn = DateTime.Now,
                    CredentialId = credentialId,
                    CollegeName = command.CollegeName,
                    Certification = command.Certification,
                    CertificationType = command.CertificationType,
                    CollegeCompletionDate = command.CollegeCompletionDate,
                    CollegeDegree = command.CollegeDegree,
                };
                DbContext.Educations.Add(education);
            }
            else
            {
                Credential newcredential = new Credential
                {
                    UserId = command.UserId,
                    CreatedOn = DateTime.Now,
                    Title = "",
                    ProfileViewCount = 0,
                    FirstName = "",
                    LastName = "",
                    Description = "",
                    ImageUrl = "",

                };
                DbContext.Credentials.Add(newcredential);
                DbContext.SaveChanges();

                Guid credentialId = newcredential.Id;
                Education education = new Education
                {
                    SchoolName = command.SchoolName,
                    SchoolDegreeName = command.SchoolDegreeName,
                    SchoolCompletionDate = command.SchoolCompletionDate,
                    CreatedOn = DateTime.Now,
                    CredentialId = credentialId,
                    CollegeName = command.CollegeName,
                    Certification = command.Certification,
                    CertificationType = command.CertificationType,
                    CollegeCompletionDate = command.CollegeCompletionDate,
                    CollegeDegree = command.CollegeDegree,
                };
                DbContext.Educations.Add(education);
            }
           
            DbContext.SaveChanges();



        }

        
    
    }
}
