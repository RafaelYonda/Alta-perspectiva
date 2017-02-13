using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class PlaceQuery : EFQueryBase<UserProfileQueryDbContext>, IPlaceQuery
    {
        public PlaceQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public Place GetPlace(Guid credentialId)
        {
            return DbContext.Places.Where(x => x.CredentialId == credentialId).FirstOrDefault();
        }

        public Place GetPlaceByUserId(Guid userId)
        {
            Credential credential = DbContext.Credentials.Where(x => x.UserId == userId).FirstOrDefault();
            if (credential != null)
            {
                Guid credentialId = credential.Id;
                return DbContext.Places.Where(x => x.CredentialId == credentialId).FirstOrDefault();
            }
            return null;
        }
    }
}
