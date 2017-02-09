using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdatePlaceCommand : ICommand
    {
        public UpdatePlaceCommand(Guid credentialId, String locationName, DateTime? startYear, DateTime? endYear, Boolean isCurrentyLiving)
        {
            CredentialId = credentialId;
            LocationName = locationName;
            StartYear = startYear;
            EndYear = endYear;
            IsCurrentyLiving = isCurrentyLiving;
        }
        public Guid Id { get; set; }
        public String LocationName { get; set; }
        public DateTime? StartYear { get; set; }
        public DateTime? EndYear { get; set; }
        public Boolean IsCurrentyLiving { get; set; }

        public Guid CredentialId { get; set; }
    }
}
