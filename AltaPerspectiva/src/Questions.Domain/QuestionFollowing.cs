using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class QuestionFollowing : Entity
    {
        public Guid UserId { get; set; }
        public Guid FollowedUserId { get; set; }
        public Guid QuestionId { get; set; }
        public Guid? AnswerId { get; set; }
    }
}
