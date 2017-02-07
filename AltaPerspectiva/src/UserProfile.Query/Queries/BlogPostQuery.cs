using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public class BlogPostQuery : EFQueryBase<UserProfileQueryDbContext>, IBlogPostQuery
    {
        public BlogPostQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public List<BlogPost> GetBlogPosts(Guid userId)
        {
            throw new NotImplementedException();
        }

       
    }
}
