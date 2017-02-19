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
    public class BlogPostLikeQuery : EFQueryBase<BlogQueryDbContext>, IBlogPostLikeQuery
    {
        public BlogPostLikeQuery(BlogQueryDbContext context)
            : base(context)
        {
        }

       
        public async Task<List<BlogLike>> GetBlogPostLikesById(Guid blogPostId)
        {
            return await
                DbContext.BlogLikes.Where(x => x.BlogPostId == blogPostId).OrderByDescending(x => x.CreatedOn).ToListAsync();
        }      

        public async Task<List<BlogLike>> GetBlogPostIdUserAlreadyLiked(Guid blogPostId, Guid userId)
        {
            return await
                DbContext.BlogLikes                
                .Where(x => x.BlogPostId == blogPostId && x.UserId == userId).OrderByDescending(x => x.CreatedOn).ToListAsync();
        }

    }
}
