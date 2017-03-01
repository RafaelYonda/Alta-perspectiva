using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Query.Interfaces
{
    public interface IVirtualStoreQuery: IQuery
    {
        //String sayHello();
        Domain.VirtualStore GetVirtualStore(Guid id);
        List<VirtualStore> GetVirtualStores();

     
    }
}
