using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Questions.Command.Commands
{
    public class DeleteQuestionReportCommand:ICommand
    {

        public DeleteQuestionReportCommand(Guid userId,Guid questionReportId, Guid questionId, Guid? answerId)
        {
            UserId = userId;
            QuestionReportId = questionReportId;
            QuestionId = questionId;
            AnswerId = answerId;
        }
        public Guid UserId { get; set; }
        public Guid QuestionReportId { get; set; }
        public Guid QuestionId { get; set; }
        public Guid? AnswerId { get; set; }

        public Guid Id { get; set; }
    }
}
