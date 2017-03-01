using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
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
            return DbContext.VirtualStores.Include(x=>x.ProductComments).FirstOrDefault(x => x.Id == id);
        }

        public List<VirtualStore> GetVirtualStores()
        {
            return DbContext.VirtualStores.Include(x => x.ProductComments).OrderByDescending(x=>x.CreatedOn).ToList();
        }

       
    }
}
