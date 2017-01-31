using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Questions.Command.Commands
{
    public class DeleteQuestionReportCommand:ICommand
    {

        public DeleteQuestionReportCommand(Guid userId, Guid questionId, Guid? answerId)
        {
            UserId = userId;
            QuestionId = questionId;
            AnswerId = answerId;
        }
        public Guid UserId { get; set; }
        public Guid QuestionId { get; set; }
        public Guid? AnswerId { get; set; }

        public Guid Id { get; set; }
    }
}
