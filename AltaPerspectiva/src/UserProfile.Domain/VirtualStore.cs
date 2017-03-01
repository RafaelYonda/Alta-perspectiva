using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace UserProfile.Domain
{
    public class VirtualStore:Entity
    {
        public double Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string ProductFileName { get; set; }
        public string ScreenShotFileName { get; set; }
        public virtual  ICollection<ProductComment> ProductComments { get; set; }
    }
}