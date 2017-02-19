using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddEducationCommand : ICommand
    {
        public AddEducationCommand(Guid credentialId, String schoolName, String concentration,  String secondaryConcentration, String degreeType, int? graduationYear)
        {
            CredentialId = credentialId;
           // CredentialId = credentialId;
            SchoolName = schoolName;
            Concentration = concentration;
            SecondaryConcentration = secondaryConcentration;
            DegreeType =degreeType;
            GraduationYear = graduationYear;

        }
        public Guid Id { get; set; }
        public String SchoolName { get; set; }
        public String Concentration { get; set; }
        public String SecondaryConcentration { get; set; }
        public String DegreeType { get; set; }
        public int? GraduationYear { get; set; }

        public Guid CredentialId { get; set; }
       // public Guid UserId { get; set; }
    }
}
