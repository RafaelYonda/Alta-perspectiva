namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddAnswerCommand : ICommand
    {
        public AddAnswerCommand(string _text, DateTime _date,Guid _questionId,Guid _userId)
        {            
            Text = _text;            
            AnswerDate = _date;
            UserId = _userId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : _userId;
            QuestionId = _questionId;
            UserId = _userId;
        }    
        public string Text { get; set; }       
        public DateTime AnswerDate { get; set; }
        public Guid Id { get;  set; }
        public Guid QuestionId { get; set; }
        public Guid UserId { get; set; }      
    }
}

