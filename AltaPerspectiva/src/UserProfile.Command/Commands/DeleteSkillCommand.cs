using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands
{
    public class DeleteSkillCommand: ICommand
    {
        public DeleteSkillCommand(Guid userId, String skillName)
        {
            UserId = userId;
            SkillName = skillName;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String SkillName { get; set; }
    }
}
