using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain.ReadModel
{
    public class QuestionReport : Entity
    {
        public Guid QuestionId { get; set; }
        public String Title { get; set; }
        public String Comment { get; set; }
        public Guid UserId { get; set; }
        public Guid AnwserId { get; set; }
    }
}
