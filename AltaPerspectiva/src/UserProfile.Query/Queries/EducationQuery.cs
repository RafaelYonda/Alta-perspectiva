﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

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
            throw new NotImplementedException();
        }
    }
}
