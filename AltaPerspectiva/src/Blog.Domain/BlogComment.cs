using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Blog.Domain
{
    public class BlogComment:Entity
    {
        public Guid UserId { get; set; }
        public string CommentText { get; set; }
        public DateTime CommentDate { get; set; }
        public Guid BlogPostId { get; set; }
        public virtual BlogPost BlogPost { get; set; }
        

    }
}
