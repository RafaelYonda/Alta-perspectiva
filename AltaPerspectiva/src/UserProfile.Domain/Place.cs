using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain
{
    public class Place : Entity
    {
      //  public Guid UserId { get; set; }
        public String LocationName { get; set; }
        public int? StartYear { get; set; }
        public int? EndYear { get; set; }
        public Boolean IsCurrentyLiving { get; set; }

        public Guid CredentialId { get; set; }
        public virtual Credential Credential { get; set; }
    }
}
