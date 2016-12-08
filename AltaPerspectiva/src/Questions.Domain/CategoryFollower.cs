namespace Questions.Domain
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AltaPerspectiva.Core.Infrastructure;
    using AltaPerspectiva.Identity;
    public class CategoryFollower
    {
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public string Active { get; set; }
        public virtual Category Category { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
