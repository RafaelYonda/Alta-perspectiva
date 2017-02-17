using System;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain
{
    public class OtherExperience : Entity
    {
      //  public Guid UserId { get; set; }
        public Guid? CategoryId { get; set; }
        public String Description { get; set; }
        public Guid CredentialId { get; set; }        
        public virtual Credential Credential { get; set; }
    }
}
