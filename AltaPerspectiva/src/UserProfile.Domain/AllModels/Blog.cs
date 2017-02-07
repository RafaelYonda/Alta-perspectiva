using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain.AllModels
{
    public class Blog : Entity
    {
        public Guid UserId { get; set; }
        public String BlogName { get; set; }
        public String Url { get; set; }

        public virtual ICollection<BlogPost> BlogPosts { get; set; }
    }
}
