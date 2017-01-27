using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.DbContext;
using Questions.Commands;


namespace Questions.Command.CommandHandler
{

    public class QuestionReportCommandHandler : EFCommandHandlerBase<QuestionReportCommand, QuestionsDbContext>,
        ICommandHandler<QuestionReportCommand>
    {
        public QuestionReportCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(QuestionReportCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");



        }


    }

}
