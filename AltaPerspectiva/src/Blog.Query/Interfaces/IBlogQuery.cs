using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Query.Interfaces
{
    public interface IBlogQuery : IQuery
    {
       // Domain.Blog GetBlog(Guid userId);
        Domain.Blog GetBlogById(Guid id);
        List<Domain.Blog> GetBlogs(Guid userId);
    }
}
