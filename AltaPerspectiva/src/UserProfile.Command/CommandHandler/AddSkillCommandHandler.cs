using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class AddSkillCommandHandler : EFCommandHandlerBase<AddSkillCommand, UserProfileDbContext>, ICommandHandler<AddSkillCommand>
    {
        public AddSkillCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddSkillCommand command)
        {
            Debug.WriteLine("AddSkillCommandHandler executed");

            Skill skill = new Skill();
            skill.GenerateNewIdentity();
            skill.UserId = command.UserId;
            skill.SkillName = command.SkillName;
            
            DbContext.Skill.Add(skill);
            DbContext.SaveChanges();
            
        }

    }
    
}
