using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain
{
    public class ProductComment:Entity
    {
        
        public string CommentText { get; set; }
        public Guid UserId { get; set; }
        public Guid VirtualStoreId { get; set; }
        public virtual VirtualStore VirtualStore { get; set; }
    }
}
