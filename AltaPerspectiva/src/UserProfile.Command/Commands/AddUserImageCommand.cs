using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddUserImageCommand : ICommand
    {
        public AddUserImageCommand(Guid userId, String image)
        {
            UserId = userId;
            Image = image;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String Image { get; set; }
    }
}
