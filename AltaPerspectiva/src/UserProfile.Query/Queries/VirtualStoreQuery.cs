using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Query.Interfaces;

namespace UserProfile.Query.Queries
{
    public class VirtualStoreQuery : EFQueryBase<UserProfileQueryDbContext>, IVirtualStoreQuery
    {
        public VirtualStoreQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public string sayHello()
        {
            return "Hello World";
        }
    }
}
