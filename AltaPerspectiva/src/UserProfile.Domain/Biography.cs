using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain
{
    public class Biography : Entity
    {
        public Guid UserId { get; set; }
        public String TagLine { get; set; }
        public String AboutMe { get; set; }
    }
}
