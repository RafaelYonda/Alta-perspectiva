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

        public IEnumerable<Biography> Execute(Guid id)
        {
            return DbContext.Biography.Where(x=>x.Id==id); //.OrderBy(x => x.FirstName);
        }
    }
}
