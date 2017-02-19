using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdateEmploymentCommand : ICommand
    {
        public UpdateEmploymentCommand(Guid credentialId, String position, String companyName, int? startDate, int? endDate, Boolean isCurrentlyWorking)
        {
            CredentialId = credentialId;
            Position = position;
            CompanyName = companyName;
            StartDate = StartDate;
            EndDate = endDate;
            IsCurrentlyWorking = isCurrentlyWorking;
        }
        public Guid Id { get; set; }
        public Guid CredentialId { get; set; }
        public String Position { get; set; }
        public String CompanyName { get; set; }
        public int? StartDate { get; set; }
        public int? EndDate { get; set; }
        public Boolean IsCurrentlyWorking { get; set; }
    }
}
