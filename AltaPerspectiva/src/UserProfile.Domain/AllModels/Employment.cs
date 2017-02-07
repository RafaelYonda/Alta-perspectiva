using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain.AllModels
{
    public class Employment : Entity
    {
        public Guid UserId { get; set; }
        public String Position { get; set; }
        public String CompanyName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public Boolean IsCurrentlyWorking { get; set; }
    }
}
