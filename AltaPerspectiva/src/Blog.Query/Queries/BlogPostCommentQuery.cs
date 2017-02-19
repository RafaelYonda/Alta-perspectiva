using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Blog.Query.Interfaces;
using Blog.Domain;
using Microsoft.EntityFrameworkCore;

namespace Blog.Query.Queries
{
    public class BlogPostCommentQuery : EFQueryBase<BlogQueryDbContext>, IBlogPostCommentQuery
    {
        public BlogPostCommentQuery(BlogQueryDbContext context)
            : base(context)
        {
        }      

        public async Task<List<BlogComment>> GetBlogPostCommentsById(Guid blogPostId)
        {
            return await DbContext.BlogComments.Where(c=>c.BlogPostId == blogPostId).OrderByDescending(x => x.CreatedOn).ToListAsync();
        }        

    }
}
