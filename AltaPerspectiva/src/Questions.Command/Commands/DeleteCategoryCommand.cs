using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Command.Commands
{
    public class DeleteCategoryCommand : ICommand
    {
        public DeleteCategoryCommand(Guid userId,Guid id)
        {
            UserId = userId;
            Id = id;
        }
        public Guid UserId { get; set; }
        public Guid Id { get; set; }
        
    }
}
