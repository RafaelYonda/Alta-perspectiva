using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands
{
    public class AddVirtualStoreCommand: ICommand
    {
        public AddVirtualStoreCommand(Guid userId, double prize,string title,string description,string fileName,string screenShotImage)
        {
            UserId = userId;
            Price = prize;
            Title = title;
            Description = description;
            ProductFileName = fileName;
            ScreenShotFileName = screenShotImage;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string ProductFileName { get; set; }
        public string ScreenShotFileName { get; set; }
    }
}
