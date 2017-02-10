using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Questions.Command.Commands
{
    public class AddQuestionFollowingCommand : ICommand
    {
        public AddQuestionFollowingCommand(Guid userId,  Guid followedUserId,Guid questionId, Guid? answerId)
        {
            UserId = userId;
            FollowedUserId = followedUserId;
            QuestionId = questionId;
            AnswerId = answerId;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid FollowedUserId { get; set; }
        public Guid QuestionId { get; set; }
        public Guid? AnswerId { get; set; }
        
    }
}
