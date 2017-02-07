using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public class EmploymentQuery : EFQueryBase<UserProfileQueryDbContext>, IEmploymentQuery
    {
        public EmploymentQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }
        public Employment GetEmployment(Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}
