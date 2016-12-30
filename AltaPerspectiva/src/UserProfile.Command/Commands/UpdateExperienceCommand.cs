using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdateExperienceCommand : ICommand
    {
        public UpdateExperienceCommand(Guid userId,String employer,String positionHeld,String location,Boolean currentlyWorkingHere,DateTime timePeriodFrom,DateTime timePeriodTo,String description)
        {
            UserId = userId;
            Employer = employer;
            PositionHeld = positionHeld;
            Location = location;
            CurrentlyWorkingHere = currentlyWorkingHere;

            TimePeriodFrom = timePeriodFrom;
            TimePeriodTo = timePeriodTo;
            Description = description;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String Employer { get; set; }
        public String PositionHeld { get; set; }
        public String Location { get; set; }
        public Boolean CurrentlyWorkingHere { get; set; }
        public DateTime TimePeriodFrom { get; set; }
        public DateTime TimePeriodTo { get; set; }
        public String Description { get; set; }
    }
}
