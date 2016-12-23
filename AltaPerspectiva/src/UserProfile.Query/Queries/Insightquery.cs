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

        public Insight Execute(Guid userId)
        {
            return DbContext.Insight.FirstOrDefault(x=>x.UserId== userId); //.OrderBy(x => x.FirstName);
        }
    }
}
