namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
   // using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class UpdateViewCountCommand : ICommand
    {
        public UpdateViewCountCommand(Guid? _questionId)
        {   
            QuestionId = _questionId;           
        }
        public Guid Id { get; set; }        
        public Guid? QuestionId { get; set; }       
    }
}

