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


            DbContext.SaveChanges();



        }



    }
}
