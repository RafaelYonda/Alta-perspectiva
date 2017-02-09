using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdateEmploymentCommand : ICommand
    {
        public UpdateEmploymentCommand(Guid credentialId, String position, String companyName, DateTime? startDate, DateTime? endDate, Boolean isCurrentlyWorking)
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
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public Boolean IsCurrentlyWorking { get; set; }
    }
}
