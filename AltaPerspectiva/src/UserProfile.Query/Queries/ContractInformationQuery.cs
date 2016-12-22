using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class ContractInformationQuery : EFQueryBase<UserProfileQueryDbContext>, IContractInformationQuery
    {
        public ContractInformationQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<ContractInformation> Execute(Guid id)
        {
            return DbContext.ContractInfomation.Where(x=>x.Id==id); //.OrderBy(x => x.FirstName);
        }
    }
}
