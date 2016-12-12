﻿namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddCommentCommand : ICommand
    {
        public AddCommentCommand(string _commentText,Guid? _questionId,Guid? _answerId,Guid _userId)
        {            
            CommentText = _commentText;                
            UserId = _userId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : _userId;
            QuestionId = _questionId;
            AnswerId = _answerId;
        }
        public Guid Id { get; set; }
        public Guid? UserId { get; set; }
        public string CommentText { get; set; }
        public Guid? QuestionId { get; set; }        
        public Guid? AnswerId { get; set; }             
    }
}
