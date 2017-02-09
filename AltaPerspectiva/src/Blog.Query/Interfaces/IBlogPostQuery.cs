﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Blog.Domain;

namespace Blog.Query.Interfaces
{
    public interface IBlogPostQuery : IQuery
    {
        
        Task<List<BlogPost>> GetBlogPostsByBlogId(Guid blogId);
    }
}