using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.DbContext;
using Questions.Commands;
using Questions.Domain;


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

            QuestionReport questionReport = new QuestionReport();
            questionReport.GenerateNewIdentity();
            questionReport.UserId = command.UserId;
            questionReport.AnwserId = command.AnswerId;
            questionReport.Comment = command.Comment;
            questionReport.QuestionId = command.QuestionId;
            questionReport.Title = command.Title;
            questionReport.CreatedBy = command.UserId;
            questionReport.CreatedOn=DateTime.Now;

            DbContext.QuestionReports.Add(questionReport);
            DbContext.SaveChanges();




        }


    }

}
