using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdatePlaceCommand : ICommand
    {
        public UpdatePlaceCommand(Guid credentialId, String locationName, int? startYear, int? endYear, Boolean isCurrentyLiving)
        {
            CredentialId = credentialId;
            LocationName = locationName;
            StartYear = startYear;
            EndYear = endYear;
            IsCurrentyLiving = isCurrentyLiving;
        }
        public Guid Id { get; set; }
        public String LocationName { get; set; }
        public int? StartYear { get; set; }
        public int? EndYear { get; set; }
        public Boolean IsCurrentyLiving { get; set; }

        public Guid CredentialId { get; set; }
    }
}
