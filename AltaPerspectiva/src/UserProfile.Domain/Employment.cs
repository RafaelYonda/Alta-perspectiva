using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain
{
    public class Employment : Entity
    {
        //public Guid UserId { get; set; }
        public String Position { get; set; }
        public String CompanyName { get; set; }
        public int? StartDate { get; set; }
        public int? EndDate { get; set; }
        public Boolean IsCurrentlyWorking { get; set; }

        public Guid CredentialId { get; set; }
        public virtual Credential Credential { get; set; }
    }
}
