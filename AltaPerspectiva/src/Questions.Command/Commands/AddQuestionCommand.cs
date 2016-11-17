namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddQuestionCommand:ICommand
    {
        public AddQuestionCommand(string _title, string _body, DateTime _date, 
                                    ApplicationUser _user,List<Answer> _answers,List<Comment> _comments,List<Like> _likes)        {            
            Title = _title;
            Body = _body;
            Date = _date;
            User = _user;
            Answers = _answers;
            Comments = _comments;
            Likes = _likes;
        }
    
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime Date { get; set; }
        public Guid Id { get;  set; }
        public ApplicationUser User { get; set; }
        public List<Answer> Answers { get; set; }
        public List<Comment> Comments { get; set; }
        public List<Like> Likes { get; set; }
    }
}

