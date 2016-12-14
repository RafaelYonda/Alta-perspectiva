using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class SkillQuery : EFQueryBase<UserProfileQueryDbContext>, ISkillQuery
    {
        public SkillQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<Skill> Execute()
        {
            return DbContext.Skill; //.OrderBy(x => x.FirstName);
        }
    }
}
