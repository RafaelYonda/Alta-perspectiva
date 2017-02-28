using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.DbContext;
using Questions.Command.Commands;
using Questions.Domain;

namespace Questions.Command.CommandHandler
{
    public class DraftedAnswerCommandHandler : EFCommandHandlerBase<DraftedAnswerCommand, QuestionsDbContext>,
        ICommandHandler<DraftedAnswerCommand>
    {
        public DraftedAnswerCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(DraftedAnswerCommand command)
        {
            Answer answer = DbContext.Answers.Where(x => x.Id == command.AnswerId).FirstOrDefault();
            if (answer != null)
            {
                answer.IsDrafted = null;
                answer.Text = command.Text;
                DbContext.Update(answer);
                DbContext.SaveChanges();
            }

        }
    }


}
