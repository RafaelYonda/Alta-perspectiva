using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class ExperienceQuery : EFQueryBase<UserProfileQueryDbContext>, IExperienceQuery
    {
        public ExperienceQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public Experience Execute(Guid userId)
        {
            return DbContext.Experience.FirstOrDefault(x=>x.UserId== userId); //.OrderBy(x => x.FirstName);
        }
    }
}
