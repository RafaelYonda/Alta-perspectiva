namespace Questions.Domain
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AltaPerspectiva.Core.Infrastructure;
    using AltaPerspectiva.Identity;
    public class CategoryFollower:Entity
    {        
        public Guid UserId { get; set; }        
        public Guid CategoryId { get; set; }
        public virtual Category Category { get; set; }        
    }
}
