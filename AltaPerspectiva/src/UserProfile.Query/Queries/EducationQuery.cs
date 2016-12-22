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

        public IEnumerable<Education> Execute(Guid id)
        {
            return DbContext.Education.Where(x=>x.Id== id); //.OrderBy(x => x.FirstName);
        }
    }
}
