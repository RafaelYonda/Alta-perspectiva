namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddQuestionLevelCommand : ICommand
    {
        public AddQuestionLevelCommand(Guid questionId,Guid levelId)
        {
            QuestionId = questionId;
            LevelId = levelId;
        }    
        
        public Guid Id { get;  set; }
        public Guid QuestionId { get; set; }
        public Guid LevelId { get; set; }
    }
}

