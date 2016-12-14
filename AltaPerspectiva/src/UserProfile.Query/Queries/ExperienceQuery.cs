﻿using System;
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

        public IEnumerable<Experience> Execute()
        {
            return DbContext.Experience; //.OrderBy(x => x.FirstName);
        }
    }
}
