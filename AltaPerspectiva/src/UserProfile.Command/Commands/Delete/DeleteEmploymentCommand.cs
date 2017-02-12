using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands.Delete
{
    public class DeleteEmploymentCommand : ICommand
    {
        public DeleteEmploymentCommand(Guid credentialId,Guid employementId)
        {
            CredentialId = credentialId;
            EmployementId = employementId;

        }
        public Guid Id { get; set; }
        public Guid CredentialId { get; set; }
        public Guid EmployementId { get; set; }
       


    }
   
}
