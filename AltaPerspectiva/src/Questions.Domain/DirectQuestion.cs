using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class DirectQuestion 
    {
        public long Id { get; set; }
        public Guid UserId { get; set; }
        public Guid QuestionId { get; set; }
    }
}
