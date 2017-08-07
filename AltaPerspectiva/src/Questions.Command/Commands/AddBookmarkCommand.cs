namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
  //  using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddBookmarkCommand : ICommand
    {
        public AddBookmarkCommand(Guid userId,Guid questionId)
        {   
            UserId = userId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : userId;
            QuestionId = questionId;
        }    
       
        public Guid Id { get;  set; }
        
        public Guid UserId { get; set; }
        public Guid QuestionId { get; set; }
    }
}

