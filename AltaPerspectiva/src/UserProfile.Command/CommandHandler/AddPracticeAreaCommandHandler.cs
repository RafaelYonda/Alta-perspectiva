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
    public class AddPracticeAreaCommandHandler : EFCommandHandlerBase<AddPracticeAreaCommand, UserProfileDbContext>, ICommandHandler<AddPracticeAreaCommand>
    {
        public AddPracticeAreaCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddPracticeAreaCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

            //PracticeArea area=new PracticeArea();
            //area.UserId = command.UserId;
            //area.PracticeAreaName = command.PracticeAreaName;

            //DbContext.PracticeArea.Add(area);
            //DbContext.SaveChanges();
           
        }
    }
    
    
}
