using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class UpdateVirtualStoreCommandHandler : EFCommandHandlerBase<UpdateVirtualStoreCommand, UserProfileDbContext>, ICommandHandler<UpdateVirtualStoreCommand>
    {
        public UpdateVirtualStoreCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateVirtualStoreCommand command)
        {
            VirtualStore virtualStore = DbContext.VirtualStores.FirstOrDefault(x => x.Id == command.VirtualStoreId);
            if (virtualStore != null)
            {
                virtualStore.Title = command.Title;
                virtualStore.Description = command.Description;
                virtualStore.Price = command.Price;
                if (!String.IsNullOrEmpty(virtualStore.ProductFileName))
                {
                    virtualStore.ProductFileName = command.ProductFileName;
                }
                if (!String.IsNullOrEmpty(virtualStore.ScreenShotFileName))
                {
                    virtualStore.ScreenShotFileName = command.ScreenShotFileName;
                }
                DbContext.VirtualStores.Update(virtualStore);
                DbContext.SaveChanges();
            }

        }

    }
    
}
