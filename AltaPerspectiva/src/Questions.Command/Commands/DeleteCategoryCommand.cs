using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Command.Commands
{
    public class DeleteCategoryCommand : ICommand
    {
        public DeleteCategoryCommand(Guid id)
        {
            Id = id;
        }
        public Guid Id { get; set; }
        
    }
}
