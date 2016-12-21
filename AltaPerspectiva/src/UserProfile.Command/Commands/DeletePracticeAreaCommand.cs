using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands
{
    public class DeletePracticeAreaCommand: ICommand
    {
        public DeletePracticeAreaCommand(Guid userId, String practiceAreaName)
        {
            UserId = userId;
            PracticeAreaName = practiceAreaName;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }

        public String PracticeAreaName { get; set; }
    }
}
