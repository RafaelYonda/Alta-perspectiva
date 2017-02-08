using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Blog.Domain
{
    public class BlogPost : Entity
    {
        public Guid UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
       
        public long BlogViewCount { get; set; }
        public Guid BlogId { get; set; }
        public virtual Blog Blog { get; set; }

        public virtual ICollection<BlogComment> BlogComments { get; set; }
        public virtual ICollection<BlogLike> BlogLikes { get; set; }
    }
}
