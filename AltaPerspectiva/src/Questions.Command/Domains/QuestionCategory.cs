namespace Questions.Command
{
    using System;
    using System.Collections.Generic;
    using AltaPerspectiva.Core.Infrastructure;
    public class QuestionCategory : Entity
    {
        public Guid QuestionId { get; set;}
        public virtual Question Question { get; set; }
        public Guid CategoryId { get; set; }
        public virtual Category Category { get; set; }
    }
}
