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

        public ContractInformation Execute(Guid userid)
        {
            return DbContext.ContractInfomation.FirstOrDefault(x=>x.UserId==userid); //.OrderBy(x => x.FirstName);
        }
    }
}
