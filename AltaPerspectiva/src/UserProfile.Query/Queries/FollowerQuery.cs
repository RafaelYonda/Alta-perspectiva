using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public class FollowerQuery : EFQueryBase<UserProfileQueryDbContext>, IFollowerQuery
    {
        public FollowerQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }
        public Follower GetFollower(Guid credentialId)
        {
            return DbContext.Followers.Where(x => x.CredentialId == credentialId).FirstOrDefault();
        }
    }
}
