using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class EmploymentQuery : EFQueryBase<UserProfileQueryDbContext>, IEmploymentQuery
    {
        public EmploymentQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }
        public Employment GetEmployment(Guid credentialId)
        {
            return DbContext.Employments.FirstOrDefault(x => x.CredentialId == credentialId);
        }

        public Employment GetEmploymentByUserId(Guid userId)
        {
            Credential credential = DbContext.Credentials.Where(x => x.UserId == userId).FirstOrDefault();
            if (credential != null)
            {
                Guid credentialId = credential.Id;
                return DbContext.Employments.FirstOrDefault(x => x.CredentialId == credentialId);
            }
            return null;

        }
    }
}
