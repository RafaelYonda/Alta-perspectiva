namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    public class AddQuestionCommand:ICommand
    {
        public AddQuestionCommand(Guid id,string _title, string _body, DateTime _date, 
                                    ApplicationUser _user,Answer _answer,Comment _comment,Like _like)
        {
            id = Id;
            title = _title;
            body = _body;
            date = _date;
            user = _user;
            answer = _answer;
            comment = _comment;
            like = _like;
        }

        public string title { get; protected set; }
        public string body { get; protected set; }
        public DateTime date { get; protected set; }
        public Guid Id { get; private set; }
        public ApplicationUser user { get; private set; }
        public Answer answer { get; private set; }
        public Comment comment { get; private set; }
        public Like like { get; private set; }
    }
}

