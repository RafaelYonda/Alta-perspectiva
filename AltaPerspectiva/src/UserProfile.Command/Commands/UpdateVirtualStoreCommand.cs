using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdateVirtualStoreCommand : ICommand
    {
        public UpdateVirtualStoreCommand(Guid virtualStoreId, double prize, string title, string description, string fileName, string screenShotImage)
        {
            VirtualStoreId = virtualStoreId;
            Price = prize;
            Title = title;
            Description = description;
            ProductFileName = fileName;
            ScreenShotFileName = screenShotImage;
        }
        public Guid Id { get; set; }
        public Guid VirtualStoreId { get; set; }
      //  public Guid UserId { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string ProductFileName { get; set; }
        public string ScreenShotFileName { get; set; }
    }
}
