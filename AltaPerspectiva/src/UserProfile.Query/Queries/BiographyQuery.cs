using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class BiographyQuery: EFQueryBase<UserProfileQueryDbContext>, IBiographyQuery
    {
        public BiographyQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<Biography> Execute()
        {
            return DbContext.Biography; //.OrderBy(x => x.FirstName);
        }
    }
}
