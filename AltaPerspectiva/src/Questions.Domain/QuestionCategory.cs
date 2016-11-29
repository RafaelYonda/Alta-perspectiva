namespace Questions.Domain
{
    using System;
    using System.Collections.Generic;
    using AltaPerspectiva.Core.Infrastructure;
    public class QuestionCategory
    {
        public Int64 Id { get; set; }
        public Guid QuestionId { get; set;}
        public virtual Question Question { get; set; }
        public Guid CategoryId { get; set; }
        public virtual Category Category { get; set; }
    }
}
