using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddEducationCommand : ICommand
    {
        public AddEducationCommand(Guid userId, String schoolName, String schoolDegreeName, DateTime? schoolCompletionDate, String collegeName, String collegeDegree, DateTime? collegeCompletionDate, String certification, String certificationType)
        {
            UserId = userId;
           // CredentialId = credentialId;
            SchoolName = schoolName;
            SchoolDegreeName = schoolDegreeName;
            SchoolCompletionDate = schoolCompletionDate;
            CollegeName = collegeName;
            CollegeCompletionDate = collegeCompletionDate;
            Certification = certification;
            CertificationType = certificationType;

        }
        public Guid Id { get; set; }
        public String SchoolName { get; set; }
        public String SchoolDegreeName { get; set; }
        public DateTime? SchoolCompletionDate { get; set; }

        public String CollegeName { get; set; }
        public String CollegeDegree { get; set; }
        public DateTime? CollegeCompletionDate { get; set; }

        public String Certification { get; set; }
        public String CertificationType { get; set; }

       // public Guid CredentialId { get; set; }
        public Guid UserId { get; set; }
    }
}
