using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands
{
    public class AddContractInfoCommand: ICommand
    {
        public AddContractInfoCommand(String _firstName)
        {
            FirstName = _firstName;
        }
        public Guid Id { get; set; }
        public String FirstName { get; set; }
    }
}
