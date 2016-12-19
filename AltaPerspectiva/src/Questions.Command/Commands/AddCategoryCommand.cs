using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Command.Commands
{
    public class AddCategoryCommand:ICommand
    {
        public AddCategoryCommand(Guid userId,string name,string icon,string active,string description,int sequence,string image)
        {
            UserId = userId;
            Name = name;
            Icon = icon;
            Active = active;
            Description = description;
            Sequence = sequence;
            Image = image;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public string Active { get; set; }
        public string Description { get; set; }
        public int Sequence { get; set; }
        public string Image { get; set; }
    }
}
