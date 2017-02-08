using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class ShareQuestion : Entity
    {
        public Guid UserId { get; set; }
        public Guid QuestionId { get; set; }
    }
}
