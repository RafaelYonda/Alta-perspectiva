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
    public class AddVirtualStoreCommandHandler : EFCommandHandlerBase<AddVirtualStoreCommand, UserProfileDbContext>, ICommandHandler<AddVirtualStoreCommand>
    {
        public AddVirtualStoreCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddVirtualStoreCommand command)
        {
            Debug.WriteLine("AddVirtualStoreCommandHandler executed");

            VirtualStore virtualStore=new VirtualStore
            {
                CreatedOn = DateTime.Now,
                ModifiedOn = DateTime.Now,
                ModifiedBy = command.UserId,
                Description = command.Description,
                Title = command.Title,
                CreatedBy = command.UserId,
                ProductFileName = command.ProductFileName,
                ScreenShotFileName = command.ScreenShotFileName,
                Price = command.Price,
                IsDeleted = false,
                IsActive = true,
                DTS = DateTime.Now
            };
            virtualStore.GenerateNewIdentity();
            DbContext.VirtualStores.Add(virtualStore);
            DbContext.SaveChanges();
            command.Id = virtualStore.Id;
            
        }

    }
    
}
