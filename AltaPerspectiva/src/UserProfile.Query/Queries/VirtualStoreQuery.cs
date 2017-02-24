using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Query.Interfaces;

namespace UserProfile.Query.Queries
{
    public class VirtualStoreQuery : EFQueryBase<UserProfileQueryDbContext>, IVirtualStoreQuery
    {
        public VirtualStoreQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public VirtualStore GetVirtualStore(Guid id)
        {
            return DbContext.VirtualStores.FirstOrDefault(x => x.Id == id);
        }

        public List<VirtualStore> GetVirtualStores()
        {
            return DbContext.VirtualStores.ToList();
        }

       
    }
}
