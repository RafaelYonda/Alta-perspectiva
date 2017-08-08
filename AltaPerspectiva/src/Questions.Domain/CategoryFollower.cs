namespace Questions.Domain
{
    using System;
    using AltaPerspectiva.Core.Infrastructure;
    public class CategoryFollower:Entity
    {        
        public Guid UserId { get; set; }        
        public Guid CategoryId { get; set; }
        public virtual Category Category { get; set; }        
    }
}
