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
        public Guid BlogId { get; set; }
        public Blog Blog { get; set; }

    }
}
