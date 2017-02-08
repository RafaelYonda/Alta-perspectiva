using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain.AllModels
{
    /// <summary>
    /// Aggregeated root for user models
    /// </summary>

    public class Credential : Entity
    {
        public Guid UserId { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String ImageUrl { get; set; }
        public long ProfileViewCount { get; set; }

        public virtual ICollection<Education> Educations { get; set; }
        public virtual ICollection<Employment> Employments { get; set; }
        public virtual ICollection<Follower> Followers { get; set; }
        public virtual ICollection<Following> Followings { get; set; }
        public virtual ICollection<Place> Places { get; set; }
        
        
    }
}
