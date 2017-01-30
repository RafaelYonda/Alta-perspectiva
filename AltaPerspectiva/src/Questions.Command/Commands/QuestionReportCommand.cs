using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Questions.Commands
{
    public class QuestionReportCommand:ICommand
    {
        public QuestionReportCommand(Guid questionId,String title,String comment,Guid? answerId, Guid userId)
        {
            QuestionId = questionId;
            Title = title;
            Comment = comment;
            UserId = userId;
            AnswerId = answerId;
        }
        public Guid QuestionId { get; set; }
        public String Title { get; set; }
        public String Comment { get; set; }
        public Guid UserId { get; set; }
        public Guid? AnswerId { get; set; }

        public Guid Id { get; set; }
      
    }
}
