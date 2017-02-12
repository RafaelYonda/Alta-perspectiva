using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands.Delete
{
    public class DeleteOtherExperienceCommand:ICommand
    {
        public DeleteOtherExperienceCommand(Guid credentialId, Guid otherExperienceId)
        {
            CredentialId = credentialId;
            OtherExperienceId = otherExperienceId;

        }
        public Guid Id { get; set; }
        public Guid CredentialId { get; set; }
        public Guid OtherExperienceId { get; set; }
    }
}
