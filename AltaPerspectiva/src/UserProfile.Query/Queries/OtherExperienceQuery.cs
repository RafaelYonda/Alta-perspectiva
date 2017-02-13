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

        public OtherExperience GetOtherExperienceByUserId(Guid userId)
        {
            Credential credential = DbContext.Credentials.Where(x => x.UserId == userId).FirstOrDefault();
            if (credential != null)
            {
                Guid credentialId = credential.Id;
                return DbContext.OtherExperiences.Where(x => x.CredentialId == credentialId).FirstOrDefault();
            }
            return null;
        }
    }
}
