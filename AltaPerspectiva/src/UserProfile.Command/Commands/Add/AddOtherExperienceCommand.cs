using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddOtherExperienceCommand :ICommand
    {
        public AddOtherExperienceCommand(Guid credentialId,Guid? categoryId, String description)
        {
            CredentialId = credentialId;
            CategoryId = categoryId;
            Description = description;
        }
        public Guid Id { get; set; }
        public Guid? CategoryId { get; set; }
        public String Description { get; set; }
        public Guid CredentialId { get; set; }
    }
}
