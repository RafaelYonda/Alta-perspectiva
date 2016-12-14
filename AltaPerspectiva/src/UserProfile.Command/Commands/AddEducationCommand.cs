using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddEducationCommand:ICommand
    {
        public AddEducationCommand(Guid userId,String institute,DateTime timeFrameFrom,DateTime timeFrameTo,Boolean completedStudies,String description, String especiality)
        {
            UserId = userId;
            Institute = institute;
            TimeFrameFrom = timeFrameFrom;
            TimeFrameTo = timeFrameTo;
            CompletedStudies = completedStudies;
            Description = description;
            Especiality = especiality;

        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String Institute { get; set; }
        public DateTime TimeFrameFrom { get; set; }
        public DateTime TimeFrameTo { get; set; }
        public Boolean CompletedStudies { get; set; }
        public String Description { get; set; }
        public String Especiality { get; set; }
    }
}
