﻿namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddQuestionCommand:ICommand
    {
        public AddQuestionCommand(string _title, string _body, DateTime _date,Guid _userId,List<Guid> _categoryIds,Guid topicId)
        {            
            Title = _title;
            Body = _body;
            Date = _date;
            UserId = _userId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : _userId;
            CategoryIds = _categoryIds==null? (new List<Guid>()) :_categoryIds;
            TopicId = topicId;
        }    
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime Date { get; set; }
        public Guid Id { get; set; }
        public List<Guid> CategoryIds { get; set; }
        public Guid UserId { get; set; }                
        public Guid TopicId { get; set; }                
    }
}

