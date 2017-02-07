using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class DeleteSkillCommandHandler : EFCommandHandlerBase<DeleteSkillCommand,UserProfileDbContext>, ICommandHandler<DeleteSkillCommand>
    {
        public DeleteSkillCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(DeleteSkillCommand command)
        {
            Debug.WriteLine("AddSkillCommandHandler executed");

            //Skill skill = DbContext.Skill.Where(x => x.SkillName.Contains(command.SkillName) && x.UserId == command.UserId).FirstOrDefault();
            //if (skill != null)
            //{
            //    //Delete
            //    DbContext.Skill.Remove(skill);
            //    DbContext.SaveChanges();
            //}
            //else
            //{
            //    throw new Exception("No skill found to delete");
            //}
        }
    }
}
