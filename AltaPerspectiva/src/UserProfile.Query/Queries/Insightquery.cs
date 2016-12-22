using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class InsightQuery: EFQueryBase<UserProfileQueryDbContext>, IInsightQuery
    {
        public InsightQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<Insight> Execute(Guid id)
        {
            return DbContext.Insight.Where(x=>x.Id==id); //.OrderBy(x => x.FirstName);
        }
    }
}
