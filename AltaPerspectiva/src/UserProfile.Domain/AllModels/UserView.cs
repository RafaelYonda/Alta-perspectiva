using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain.AllModels
{
    public class UserView : Entity
    {
        public Guid UserId { get; set; }
        public long ProfileViewCount { get; set; }
    }
}
