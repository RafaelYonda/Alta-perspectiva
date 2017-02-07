using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public class FollowingQuery: EFQueryBase<UserProfileQueryDbContext>, IFollowingQuery
    {
        public FollowingQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        

        public Following Execute(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
