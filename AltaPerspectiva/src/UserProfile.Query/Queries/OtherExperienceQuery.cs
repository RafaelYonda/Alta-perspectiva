using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class OtherExperienceQuery : EFQueryBase<UserProfileQueryDbContext>, IOtherExperienceQuery
    {
        public OtherExperienceQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public OtherExperience GetOtherExperience(Guid credentialId)
        {
            return DbContext.OtherExperiences.Where(x => x.CredentialId == credentialId).FirstOrDefault();
        }
    }
}
