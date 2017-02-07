using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain.AllModels
{
    public class Following : Entity
    {
        public Guid UserId { get; set; }
        public Guid FollowingUserId { get; set; }
    }
}
