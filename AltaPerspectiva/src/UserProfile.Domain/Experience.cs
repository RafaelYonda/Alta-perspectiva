using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain
{
    public class Experience : Entity
    {
        public Guid UserId { get; set; }
        public String Employer { get; set; }
        public String PositionHeld { get; set; }
        public String Location { get; set; }
        public Boolean CurrentlyWorkingHere { get; set; }
        public DateTime TimePeriodFrom { get; set; }
        public DateTime TimePeriodTo { get; set; }
        public String Description { get; set; }
    }
}
