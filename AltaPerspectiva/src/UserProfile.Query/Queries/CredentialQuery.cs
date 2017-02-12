using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class CredentialQuery: EFQueryBase<UserProfileQueryDbContext>, ICredentialQuery
    {
        public CredentialQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }
        public Credential GetCredential(Guid userId)
        {
            return DbContext.Credentials.Include(x => x.Employments).Where(x => x.UserId == userId)
                
                .FirstOrDefault();
        }

        public Credential GetCredentialByCredentialId(Guid credentialId)
        {
            return DbContext.Credentials.Include(x => x.Employments).Where(x => x.Id == credentialId)

               .FirstOrDefault();
        }

        public List<Credential> GetCredentials(List<Guid> userIds)
        {
            return DbContext.Credentials.Include(x=>x.Employments).Where(x => userIds.Contains(x.UserId)).ToList();
        }
    }
}
