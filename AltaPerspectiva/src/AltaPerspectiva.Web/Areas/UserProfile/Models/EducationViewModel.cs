using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class EducationViewModel
    {
        //public Guid Id { get; set; }
        //public Guid UserId { get; set; }
        public String SchoolName { get; set; }
        public String SchoolDegreeName { get; set; }
        public DateTime? SchoolCompletionDate { get; set; }

        public String CollegeName { get; set; }
        public String CollegeDegree { get; set; }
        public DateTime? CollegeCompletionDate { get; set; }

        public String Certification { get; set; }
        public String CertificationType { get; set; }

        public Guid CredentialId { get; set; }
    }
}
