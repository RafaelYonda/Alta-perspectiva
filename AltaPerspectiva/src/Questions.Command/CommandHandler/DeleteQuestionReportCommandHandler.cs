﻿using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questions.Command.Commands;
using Questions.Command.DbContext;
using AltaPerspectiva.Core;
using System.Diagnostics;
using Questions.Domain;

namespace Questions.Command.CommandHandler
{
    public class DeleteQuestionReportCommandHandler : EFCommandHandlerBase<DeleteQuestionReportCommand, QuestionsDbContext>,
        ICommandHandler<DeleteQuestionReportCommand>
    {
        public DeleteQuestionReportCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
        }

        public override void Execute(DeleteQuestionReportCommand command)
        {
            Debug.WriteLine("AddBookmarkCommandHandler executed");
            if (command.AnswerId.HasValue)
            {
                //For Answer report
                Answer answer = DbContext.Answers.Where(x => x.Id == command.AnswerId.Value).FirstOrDefault();
                if (answer != null)
                {
                    answer.IsDeleted = true;
                    answer.ModifiedBy = command.UserId;
                    answer.ModifiedOn=DateTime.Now;
                    DbContext.Answers.Update(answer);
                }
                else
                {
                    throw new Exception("DeleteQuestionReportCommandHandler");
                }

            }
            else
            {
                //QuestionReport
                Question question = DbContext.Questions.Where(x => x.Id == command.QuestionId).FirstOrDefault();
                if (question != null)
                {
                    
                    question.IsDeleted = true;
                    question.ModifiedBy = command.UserId;
                    question.ModifiedOn = DateTime.Now;

                    DbContext.Questions.Update(question);
                    
                }
                else
                {
                    throw new Exception("DeleteQuestionReportCommandHandler");
                }
            }

            //Update question report
            QuestionReport questionReport = DbContext.QuestionReports.Where(x => x.Id == command.QuestionReportId).FirstOrDefault();

            if (questionReport != null)
            {
                questionReport.IsActive = false;
                questionReport.ModifiedBy = command.UserId;
                questionReport.ModifiedOn = DateTime.Now;

                DbContext.QuestionReports.Update(questionReport);
            }
            else
            {
                throw new Exception("DeleteQuestionReportCommandHandler");
            }
            DbContext.SaveChanges();
        }
    }
   
}