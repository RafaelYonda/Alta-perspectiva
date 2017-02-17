using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain
{
    /// <summary>
    /// Aggregeated root for user models
    /// </summary>

    public class Credential : Entity
    {
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int? ProfileViewCount { get; set; }

        public virtual ICollection<Education> Educations { get; set; }
        public virtual ICollection<Employment> Employments { get; set; }
        public virtual ICollection<Place> Places { get; set; }
        public virtual ICollection<OtherExperience> Others { get; set; }

    }
}
