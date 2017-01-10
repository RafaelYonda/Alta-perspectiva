using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class Topic : Entity
    {
        public String TopicName { get; set; }
        public virtual ICollection<QuestionTopic> QuestionTopics { get; set; }

        public Guid CategoryId { get; set; }
        public virtual Category Category { get; set; }
    }
}
