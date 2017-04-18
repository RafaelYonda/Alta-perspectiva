using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class QuestionTopic
    {
        [Key]
        public Int64 Id { get; set; }
        public Guid QuestionId { get; set; }
        [NotMapped]
        public virtual Question Question { get; set; }

        public Guid? TopicId { get; set; }
        public virtual Topic Topic { get; set; }
    }
}
