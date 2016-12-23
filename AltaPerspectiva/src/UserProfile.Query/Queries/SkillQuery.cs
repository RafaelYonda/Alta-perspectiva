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

        public IEnumerable<Skill> Execute(Guid id)
        {
            return DbContext.Skill.Where(x=>x.Id== id); //.OrderBy(x => x.FirstName);
        }
    }
}
