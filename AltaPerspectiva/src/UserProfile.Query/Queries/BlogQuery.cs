using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public class BlogQuery : EFQueryBase<UserProfileQueryDbContext>, IBlogQuery
    {
        public BlogQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public Blog GetBlog(Guid userId)
        {
            throw new NotImplementedException();
        }

      
    }
}
