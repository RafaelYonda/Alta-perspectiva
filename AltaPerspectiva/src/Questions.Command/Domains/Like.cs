namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;

    public class Like
    {
        public ApplicationUser user { get; set; }
        public Guid? QuestionId { get; set; } 
        public Question Question { get; set; }
    }
}
