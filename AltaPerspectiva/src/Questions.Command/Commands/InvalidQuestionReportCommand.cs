using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Command.Commands
{
    public class InvalidQuestionReportCommand : ICommand
    {
        public InvalidQuestionReportCommand(Guid userId,Guid questionReportId,String modiferComment)
        {
            UserId = userId;
            QuestionReportId = questionReportId;
            ModiferComment = modiferComment;
        }
        public Guid UserId { get; set; }
        public Guid QuestionReportId { get; set; }
        
        public String ModiferComment { get; set; }

        public Guid Id { get; set; }
    }
}
