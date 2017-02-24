using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class DeleteVirtualStoreCommandHandler : EFCommandHandlerBase<DeleteVirtualStoreCommand, UserProfileDbContext>, ICommandHandler<DeleteVirtualStoreCommand>
    {
        public DeleteVirtualStoreCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(DeleteVirtualStoreCommand command)
        {
            Debug.WriteLine("DeletePracticeAreaCommandHandler executed");

            VirtualStore virtualStore = DbContext.VirtualStores.FirstOrDefault(x => x.Id == command.VirtualStoreId);
            if (virtualStore != null)
            {
                DbContext.VirtualStores.Remove(virtualStore);
                DbContext.SaveChanges();
            }
        }
    }
}
