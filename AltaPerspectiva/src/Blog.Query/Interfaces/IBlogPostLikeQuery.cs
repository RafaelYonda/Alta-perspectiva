using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Blog.Domain;

namespace Blog.Query.Interfaces
{
    public interface IBlogPostLikeQuery : IQuery
    {

        Task<List<BlogLike>> GetBlogPostLikesById(Guid blogPostId);
        Task<List<BlogLike>> GetBlogPostIdUserAlreadyLiked(Guid blogPostId, Guid userId);
    }
}
