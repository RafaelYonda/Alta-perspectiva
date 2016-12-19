using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain
{
    public class Skill:Entity
    {
        public Guid UserId { get; set; }
        public String SkillName { get; set; }
    }
}
