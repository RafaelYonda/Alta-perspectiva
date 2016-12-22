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

        public Education Execute(Guid userId)
        {
            return DbContext.Education.FirstOrDefault(x=>x.UserId== userId); //.OrderBy(x => x.FirstName);
        }
    }
}
