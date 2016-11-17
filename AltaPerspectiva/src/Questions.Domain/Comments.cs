namespace Questions.Domain
{
    using System;
    using AltaPerspectiva.Core.Infrastructure;
    using AltaPerspectiva.Identity;

    public class Comment:Entity
    {
        public Guid? UserID { get; set; }        
        public string CommentText { get; set; }
        public Guid? QuestionID { get; set; }
        public virtual Question  Question { get; set; }
        public Guid? AnswerId { get; set; }
        public virtual Answer Answer { get; set; }
        public virtual DateTime CommentDate { get; set; }
    }
}
