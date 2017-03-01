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

            Education edu = DbContext.Educations.FirstOrDefault(x => x.CredentialId == command.CredentialId);
            if (edu == null)
            {
                Education education = new Education
                {
                    SchoolName = command.SchoolName,
                    DegreeType = command.DegreeType,
                    CredentialId = command.CredentialId,
                    GraduationYear = command.GraduationYear,
                    SecondaryConcentration = command.SecondaryConcentration,
                    Concentration = command.Concentration,
                    CreatedOn = DateTime.Now

                };
                education.GenerateNewIdentity();
                DbContext.Educations.Add(education);
            }
            else
            {
                edu.SchoolName = command.SchoolName;
                edu.DegreeType = command.DegreeType;
                edu.CredentialId = command.CredentialId;
                edu.GraduationYear = command.GraduationYear;
                edu.SecondaryConcentration = command.SecondaryConcentration;
                edu.Concentration = command.Concentration;
                DbContext.Educations.Update(edu);
            }

            DbContext.SaveChanges();



        }



    }
}
