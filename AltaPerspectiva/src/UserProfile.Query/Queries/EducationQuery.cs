using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class EducationQuery: EFQueryBase<UserProfileQueryDbContext>, IEducationQuery
    {
        public EducationQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public Education GetEducation(Guid credentialId)
        {
            return DbContext.Educations.Where(x => x.CredentialId == credentialId).FirstOrDefault();
        }

        public Education GetEducationByUserId(Guid userId)
        {
            Credential credential = DbContext.Credentials.Where(x => x.UserId == userId).FirstOrDefault();
            if (credential != null)
            {
                Guid credentialId = credential.Id;
                return DbContext.Educations.Where(x => x.CredentialId == credentialId).FirstOrDefault();
            }
            return null;

        }
    }
}
