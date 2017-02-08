namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddShareQuestionCommand : ICommand
    {
        public AddShareQuestionCommand(Guid userId,Guid questionId)
        {            
            
            UserId = userId;
            QuestionId = questionId;
        }    
        public Guid Id { get;  set; }
        public Guid QuestionId { get; set; }
        public Guid UserId { get; set; }
        
    }
}

