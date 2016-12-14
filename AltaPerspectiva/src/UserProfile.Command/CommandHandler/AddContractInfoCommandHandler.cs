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
    public class AddContractInfoCommandHandler :EFCommandHandlerBase<AddContractInfoCommand, UserProfileDbContext>,
		ICommandHandler<AddContractInfoCommand>
    {
        public AddContractInfoCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddContractInfoCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

            /*Some ID modification*/
            ContractInfo question = GetQuestionById(command.Id);
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

        private ContractInfo GetQuestionById(Guid id)
        {
            return DbContext
                    .ContractInfoes
                    .Where(q => q.Id == id)
                    .SingleOrDefault();

        }
    }
}
