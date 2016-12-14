using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class ContractInfoesQuery : EFQueryBase<UserProfileQueryDbContext>, IContractInfoesQuery
    {
        

        public ContractInfoesQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<ContractInfo> Execute()
        {
            return DbContext.ContractInfoes.OrderBy(x => x.FirstName);
        }
    }
}
