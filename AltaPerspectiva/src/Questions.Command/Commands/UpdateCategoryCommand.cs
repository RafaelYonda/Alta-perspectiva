using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Command.Commands
{
    public class UpdateCategoryCommand: ICommand
    {
        public UpdateCategoryCommand(Guid userId,Guid id,String name,string description,string image,string icon)
        {
            UserId = userId;
            Id = id;
            Name = name;
            Description = description;
            Image = image;
            Icon = icon;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
       // public string Active { get; set; }
        public string Description { get; set; }
      //  public int Sequence { get; set; }
        public string Image { get; set; }
    }
}
