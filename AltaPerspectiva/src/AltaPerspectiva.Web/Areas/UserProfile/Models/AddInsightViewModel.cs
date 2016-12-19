using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class AddInsightViewModel
    {
        //public Guid Id { get; set; }
        //public Guid UserId { get; set; }
        public String Title { get; set; }
        public String Publication { get; set; }
        public DateTime PublicationDate { get; set; }
        public String PublicationHyperlink { get; set; }
        public String PublicationDocument { get; set; }
        public String Description { get; set; }
    }
}
