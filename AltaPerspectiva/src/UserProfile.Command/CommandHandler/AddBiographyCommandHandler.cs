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
    public class AddBiographyCommandHandler : EFCommandHandlerBase<AddBiographyCommand, UserProfileDbContext>, ICommandHandler<AddBiographyCommand>
    {
        public AddBiographyCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddBiographyCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

           

            /*Some ID modification*/
            // Biography contractInformation = GetContractInfo(command.Id);
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

        //private Biography GetContractInfo(Guid id)
        //{
        //    return DbContext
        //            .Biography
        //            // .Where(q => q.Id == id)
        //            .SingleOrDefault();

        //}
    }
}
