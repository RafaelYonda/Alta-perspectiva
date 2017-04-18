using System.ComponentModel.DataAnnotations.Schema;

namespace Questions.Domain
{
    using System;
    using AltaPerspectiva.Core.Infrastructure;


    public class Like:Entity
    {
        public Guid UserId { get; set; }        
        public Guid? QuestionId { get; set; }
        [NotMapped]
        public virtual Question Question { get; set; }
        public Guid? AnswerId { get; set; }
        [NotMapped]
        public virtual Answer Answer { get; set; }
    }
}
