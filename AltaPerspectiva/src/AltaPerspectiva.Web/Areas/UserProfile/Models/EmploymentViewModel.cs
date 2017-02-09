using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class EmploymentViewModel
    {
        public String Position { get; set; }
        public String CompanyName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public Boolean IsCurrentlyWorking { get; set; }

        public Guid CredentialId { get; set; }
    }
}
