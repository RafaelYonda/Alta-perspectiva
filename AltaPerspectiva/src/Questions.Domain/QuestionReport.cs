using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class QuestionReport : Entity
    {
        public Guid QuestionId { get; set; }
        public virtual Question Question { get; set; }
        public String Title { get; set; }
        public String Comment { get; set; }
        public String ModiferComment { get; set; }
        public Guid UserId { get; set; }
        public Guid? AnswerId { get; set; }
        public virtual Answer Answer { get; set; }
    }
}
