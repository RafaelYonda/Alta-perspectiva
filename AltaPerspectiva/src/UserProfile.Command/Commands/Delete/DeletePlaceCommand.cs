using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands.Delete
{
    public class DeletePlaceCommand : ICommand
    {
        public DeletePlaceCommand(Guid credentialId, Guid placeId)
        {
            CredentialId = credentialId;
            PlaceId = placeId;

        }
        public Guid Id { get; set; }
        public Guid CredentialId { get; set; }
        public Guid PlaceId { get; set; }



    }
  
}
