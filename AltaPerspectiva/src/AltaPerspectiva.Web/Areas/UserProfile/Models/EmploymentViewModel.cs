using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class EmploymentViewModel
    {
        public Guid Id { get; set; }
        public String Position { get; set; }
        public String CompanyName { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public Boolean IsCurrentlyWorking { get; set; }

        public Guid CredentialId { get; set; }
    }
}
