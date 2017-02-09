using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddFollowerCommand:ICommand
    {
        public AddFollowerCommand(Guid credentialId, Guid followerUserId)
        {
            CredentialId = credentialId;
            FollowerUserId = followerUserId;
        }
        public Guid Id { get; set; }
        public Guid FollowerUserId { get; set; }

        public Guid CredentialId { get; set; }
    }
}
