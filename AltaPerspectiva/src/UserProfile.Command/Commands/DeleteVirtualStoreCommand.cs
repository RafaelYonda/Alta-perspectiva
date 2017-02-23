using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands
{
    public class DeleteVirtualStoreCommand: ICommand
    {
        public DeleteVirtualStoreCommand(Guid userId, Guid virtualStoreId)
        {
            UserId = userId;
            VirtualStoreId = virtualStoreId;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid VirtualStoreId { get; set; }

    }
}
