using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.Commands;
using Questions.Command.DbContext;
using Questions.Domain;

namespace Questions.Command.CommandHandler
{
    public class InvalidQuestionReportCommandHandler :
        EFCommandHandlerBase<InvalidQuestionReportCommand, QuestionsDbContext>,
        ICommandHandler<InvalidQuestionReportCommand>
    {
        public InvalidQuestionReportCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(InvalidQuestionReportCommand command)
        {
            Debug.WriteLine("InvalidQuestionReportCommandHandler executed");
            QuestionReport report = DbContext.QuestionReports.FirstOrDefault(x => x.Id == command.QuestionReportId);
            if (report == null)
            {
                throw new Exception("Invalid InvalidQuestionReportCommandHandler ");
            }
            report.ModifiedOn = DateTime.Now;
            report.ModifiedBy = command.UserId;
            report.IsActive = false;
            report.IsDeleted = false;
            report.ModiferComment = command.ModiferComment;

            DbContext.QuestionReports.Update(report);
            DbContext.SaveChanges();
        }
    }

}
