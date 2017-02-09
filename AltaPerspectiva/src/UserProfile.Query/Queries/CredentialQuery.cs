using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

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
            return DbContext.Credentials.Where(x => x.UserId == userId)
                
                .FirstOrDefault();
        }
    }
}
