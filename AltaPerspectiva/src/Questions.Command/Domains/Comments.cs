namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core.Infrastructure;
    using AltaPerspectiva.Identity;

    public class Comment:Entity
    {
        public ApplicationUser User { get; set; }
        public string CommentText { get; set; }
        public Question  question { get; set; }
        public Answer Answer { get; set; }
        public DateTime CommentDate { get; set; }
    }
}
