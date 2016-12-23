using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain
{
    public class Insight : Entity
    {
        public Guid UserId { get; set; }
        public String Title { get; set; }
        public String Publication { get; set; }
        public DateTime PublicationDate { get; set; }
        public String PublicationHyperlink { get; set; }
        public String PublicationDocument { get; set; }
        public String Description { get; set; }
    }
}
