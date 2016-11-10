namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;

    public class AddQuestionCommand:ICommand
    {
        private string v;
        private DateTime dateTime;
        private object p1;
        private object p2;
        private object p3;
        private object p4;
        private object p5;

        public AddQuestionCommand(string _title, string _body, DateTime _date, 
                                    ApplicationUser _user,List<Answer> _answers,Comment _comment,Like _like)
        {            
            Title = _title;
            Body = _body;
            Date = _date;
            User = _user;
            Answers = _answers;
            Comment = _comment;
            Like = _like;
        }
    
        public string Title { get; protected set; }
        public string Body { get; protected set; }
        public DateTime Date { get; protected set; }
        public Guid Id { get;  set; }
        public ApplicationUser User { get; protected set; }
        public List<Answer> Answers { get; protected set; }
        public Comment Comment { get; protected set; }
        public Like Like { get; protected set; }
    }
}

