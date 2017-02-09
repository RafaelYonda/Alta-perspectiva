using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class PlaceViewModel
    {
        public String LocationName { get; set; }
        public DateTime? StartYear { get; set; }
        public DateTime? EndYear { get; set; }
        public Boolean IsCurrentyLiving { get; set; }

        public Guid CredentialId { get; set; }
    }
}
