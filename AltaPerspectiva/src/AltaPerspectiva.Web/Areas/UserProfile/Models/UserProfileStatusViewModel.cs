using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class UserProfileStatusViewModel
    {
        public Boolean biography { get; set; }
        public Boolean contractInformation { get; set; }
        public Boolean education { get; set; }
        public Boolean experience { get; set; }
        public Boolean insight { get; set; }
        public Boolean practiceArea { get; set; }
        public Boolean skill { get; set; }
        public Boolean userImage { get; set; }
    }
}
