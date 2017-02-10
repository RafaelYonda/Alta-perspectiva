using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands.Update
{
    public class UpdateProfileViewCountCommand:ICommand
    {
        public UpdateProfileViewCountCommand(Guid credentialId)
        {
            CredentialId = credentialId;
        }
        public Guid Id { get; set; }
        public Guid? CredentialId { get; set; }
    }
}
