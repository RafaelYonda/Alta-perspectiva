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
            Prize = prize;
            Title = title;
            Description = description;
            FileName = fileName;
            ScreenShotImage = screenShotImage;

        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public double Prize { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string FileName { get; set; }
        public string ScreenShotImage { get; set; }
    }
}
