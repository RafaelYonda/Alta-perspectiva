using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands.Delete
{
    public class DeleteEducationCommand : ICommand
    {
        public DeleteEducationCommand(Guid credentialId, Guid educationId)
        {
            CredentialId = credentialId;
            EducationId = educationId;

        }
        public Guid Id { get; set; }
        public Guid CredentialId { get; set; }
        public Guid EducationId { get; set; }



    }
    
}
