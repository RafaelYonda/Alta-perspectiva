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
    public class DeletePracticeAreaCommandHandler : EFCommandHandlerBase<DeletePracticeAreaCommand, UserProfileDbContext>, ICommandHandler<DeletePracticeAreaCommand>
    {
        public DeletePracticeAreaCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(DeletePracticeAreaCommand command)
        {
            Debug.WriteLine("DeletePracticeAreaCommandHandler executed");

            //PracticeArea practiceArea = DbContext.PracticeArea.Where(x => x.PracticeAreaName.Contains(command.PracticeAreaName) && x.UserId == command.UserId).FirstOrDefault();
            //if (practiceArea != null)
            //{
            //    //Delete
            //    DbContext.PracticeArea.Remove(practiceArea);
            //    DbContext.SaveChanges();
            //}
            //else
            //{
            //    throw new Exception("No skill found to delete in DeletePracticeAreaCommandHandler");
            //}
        }
    }
}
