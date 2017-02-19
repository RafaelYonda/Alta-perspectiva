using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class PlaceViewModel
    {
        public Guid id { get; set; }
        public String LocationName { get; set; }
        public int StartYear { get; set; }
        public int EndYear { get; set; }
        public Boolean IsCurrentyLiving { get; set; }

        public Guid CredentialId { get; set; }
    }
}
