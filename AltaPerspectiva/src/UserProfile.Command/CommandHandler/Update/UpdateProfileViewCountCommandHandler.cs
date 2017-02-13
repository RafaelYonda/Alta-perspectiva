using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Command.Commands;
using UserProfile.Command.Commands.Update;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class UpdateProfileViewCountCommandHandler : EFCommandHandlerBase<UpdateProfileViewCountCommand, UserProfileDbContext>, ICommandHandler<UpdateProfileViewCountCommand>
    {
        public UpdateProfileViewCountCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateProfileViewCountCommand command)
        {
            Debug.WriteLine("UpdateProfileViewCountCommand executed");
            Credential credential = DbContext.Credentials.Where(x => x.UserId == command.UserId).FirstOrDefault();
            if (credential != null)
            {
                if (credential.ProfileViewCount.HasValue)
                {
                    credential.ProfileViewCount = credential.ProfileViewCount + 1;
                }
                else
                {
                    credential.ProfileViewCount = 1;
                }
                DbContext.Credentials.Update(credential);
                DbContext.SaveChanges();
            }

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
