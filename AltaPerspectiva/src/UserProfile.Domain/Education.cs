using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain
{
    public class Education : Entity
    {
        public Guid UserId { get; set; }
        public String Institute { get; set; }
        public DateTime TimeFrameFrom { get; set; }
        public DateTime TimeFrameTo { get; set; }
        public Boolean CompletedStudies { get; set; }
        public String Description { get; set; }
        public String Especiality { get; set; }
    }
}
