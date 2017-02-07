using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public class OtherExperienceQuery : EFQueryBase<UserProfileQueryDbContext>, IOtherExperienceQuery
    {
        public OtherExperienceQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public OtherExperience GetExperience(Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}
