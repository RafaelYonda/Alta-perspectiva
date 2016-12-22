using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain
{
    public class UserImage : Entity
    {
        public Guid UserId { get; set; }
        public String Image { get; set; }
    }
}
