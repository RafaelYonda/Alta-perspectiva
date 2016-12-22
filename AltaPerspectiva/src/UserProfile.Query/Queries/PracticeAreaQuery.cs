using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class PracticeAreaQuery: EFQueryBase<UserProfileQueryDbContext>,IPracticeAreaQuery
    {
        public PracticeAreaQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<PracticeArea> Execute(Guid id)
        {
            return DbContext.PracticeArea.Where(x=>x.Id== id); //.OrderBy(x => x.FirstName);
        }
    }
}
