﻿using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Domain
{
    public class Blog : Entity
    {
        public Guid UserId { get; set; }
       // public String BlogName { get; set; }
        public String Title { get; set; }
        public String Url { get; set; }
        public String Description { get; set; }

        public virtual ICollection<BlogPost> BlogPosts { get; set; }
    }
}
