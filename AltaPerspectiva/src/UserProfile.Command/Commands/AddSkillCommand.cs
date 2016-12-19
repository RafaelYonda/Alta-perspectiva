using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddSkillCommand:ICommand
    {
        public AddSkillCommand(Guid userId,String skillName)
        {
            UserId = userId;
            SkillName = skillName;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String SkillName { get; set; }
    }
}
