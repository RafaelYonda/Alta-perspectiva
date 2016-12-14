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
    public class AddEducationCommandHandler : EFCommandHandlerBase<AddEducationCommand, UserProfileDbContext>, ICommandHandler<AddEducationCommand>
    {
        public AddEducationCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddEducationCommand command)
        {
            Debug.WriteLine("AddEducationCommandHandler executed");

            /*Some ID modification*/
            Education contractInformation = GetEducation(command.Id);
            // 
            //Answer answer = new Answer();
            //answer.GenerateNewIdentity();
            //// create new answers. generate id then add to questions

            //answer.QuestionId = command.QuestionId;
            //answer.Text = command.Text;
            //answer.UserId = command.UserId;
            //answer.CreatedOn = DateTime.Now;
            //answer.CreatedBy = command.UserId;
            //answer.DTS = DateTime.Now;

            //DbContext.Answers.Add(answer);
            //DbContext.SaveChanges();

            //command.Id = answer.Id;
        }

        private Education GetEducation(Guid id)
        {
            return DbContext
                    .Education
                    // .Where(q => q.Id == id)
                    .SingleOrDefault();

        }
    
    }
}
