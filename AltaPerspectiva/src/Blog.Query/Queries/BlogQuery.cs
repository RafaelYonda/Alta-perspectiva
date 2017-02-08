using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Blog.Query.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Blog.Query.Queries
{
    public class BlogQuery : EFQueryBase<BlogQueryDbContext>, IBlogQuery
    {
        public BlogQuery(BlogQueryDbContext context)
            : base(context)
        {
        }

        public Domain.Blog GetBlog(Guid userId)
        {
            return DbContext.Blogs
                //.Include(bp=>bp.BlogPosts)
                .Where(x => x.UserId == userId).FirstOrDefault();
        }

      
    }
}
