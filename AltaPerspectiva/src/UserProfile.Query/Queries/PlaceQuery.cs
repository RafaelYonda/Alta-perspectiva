using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

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
    }
}
