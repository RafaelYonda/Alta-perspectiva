using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Blog.Domain
{
    public class BlogLike:Entity
    {
        public Guid UserId { get; set; }
        public Guid BlogPostId { get; set; }
        public virtual BlogPost BlogPost { get; set; }

    }
}
