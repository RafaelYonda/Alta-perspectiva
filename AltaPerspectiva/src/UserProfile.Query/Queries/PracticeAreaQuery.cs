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

        public IEnumerable<PracticeArea> Execute(Guid userId)
        {
            return DbContext.PracticeArea.Where(x=>x.UserId== userId).ToList(); //.OrderBy(x => x.FirstName);
        }
    }
}
