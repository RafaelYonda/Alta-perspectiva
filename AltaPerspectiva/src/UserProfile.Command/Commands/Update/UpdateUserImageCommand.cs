using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdateUserImageCommand : ICommand
    {
        public UpdateUserImageCommand(Guid credentialId, String imageUrl)
        {
            CredentialId = credentialId;
            ImageUrl = imageUrl;
        }
        public Guid Id { get; set; }
        public Guid CredentialId { get; set; }
        public String ImageUrl { get; set; }
    }
}
