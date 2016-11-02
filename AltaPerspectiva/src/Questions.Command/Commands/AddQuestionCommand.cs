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

        public AddQuestionCommand(string v, DateTime dateTime, object p1, object p2, object p3, object p4, object p5)
        {
            this.v = v;
            this.dateTime = dateTime;
            this.p1 = p1;
            this.p2 = p2;
            this.p3 = p3;
            this.p4 = p4;
            this.p5 = p5;
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

