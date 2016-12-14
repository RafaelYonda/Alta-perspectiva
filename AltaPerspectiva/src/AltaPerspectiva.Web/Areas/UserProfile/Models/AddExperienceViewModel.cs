using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class AddExperienceViewModel
    {
        //public Guid Id { get; set; }
        //public Guid UserId { get; set; }
        public String Employer { get; set; }
        public String PositionHeld { get; set; }
        public String Location { get; set; }
        public Boolean CurrentlyWorkingHere { get; set; }
        public DateTime TimePeriodFrom { get; set; }
        public DateTime TimePeriodTo { get; set; }
        public String Description { get; set; }
    }
}
