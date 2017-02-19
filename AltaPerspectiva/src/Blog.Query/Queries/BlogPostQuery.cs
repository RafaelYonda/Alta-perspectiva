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
    public class BlogPostQuery : EFQueryBase<BlogQueryDbContext>, IBlogPostQuery
    {
        public BlogPostQuery(BlogQueryDbContext context)
            : base(context)
        {
        }

        public async Task<List<BlogPost>> GetBlogPostsByBlogId(Guid blogId)
        {
            return await
                DbContext
                .BlogPosts
                .Include(x=>x.BlogComments)
                .Include(x=>x.BlogLikes)
                .Where(x => x.BlogId == blogId &&x.IsDeleted==null).OrderByDescending(x=>x.CreatedOn).ToListAsync();
        }

        public async Task<List<BlogPost>> GetBlogPostLikesBygId(Guid blogId)
        {
            return await
                DbContext
                .BlogPosts
                .Include(x => x.BlogComments)
                .Include(x => x.BlogLikes)
                .Where(x => x.BlogId == blogId && x.IsDeleted == null).OrderByDescending(x => x.CreatedOn).ToListAsync();
        }

        public async Task<List<BlogPost>> GetBlogPostCommentsById(Guid blogId)
        {
            return await
                DbContext
                .BlogPosts
                .Include(x => x.BlogComments)
                .Include(x => x.BlogLikes)
                .Where(x => x.BlogId == blogId && x.IsDeleted == null).OrderByDescending(x => x.CreatedOn).ToListAsync();
        }

        public async Task<List<BlogPost>> GetBlogPostIdUserAlreadyLiked(Guid blogPostId, Guid userId)
        {
            return await
                DbContext
                .BlogPosts
                .Include(x => x.BlogComments)
                .Include(x => x.BlogLikes)
                .Where(x => x.BlogId == blogPostId && x.IsDeleted == null).OrderByDescending(x => x.CreatedOn).ToListAsync();
        }

    }
}
