using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class EducationViewModel
    {
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
