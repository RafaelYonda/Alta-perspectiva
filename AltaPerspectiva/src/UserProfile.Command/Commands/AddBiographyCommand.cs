using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddBiographyCommand: ICommand
    {
        public AddBiographyCommand(Guid userId,String tagLine,String aboutMe)
        {
            UserId = userId;
            TagLine = tagLine;
            AboutMe = aboutMe;

        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String TagLine { get; set; }
        public String AboutMe { get; set; }
    }
}
