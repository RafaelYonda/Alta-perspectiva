namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;

    public class Like
    {
        public Guid UserId { get; set; }
        public virtual ApplicationUser user { get; set; }

        public Guid? QuestionId { get; set; } 
        public virtual Question Question { get; set; }

        public Guid? AnswerId { get; set; }
        public virtual Answer Answer { get; set; }
    }
}
