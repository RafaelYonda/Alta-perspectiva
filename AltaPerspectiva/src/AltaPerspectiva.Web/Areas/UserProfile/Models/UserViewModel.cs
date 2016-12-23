using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class UserViewModel
    {
        public Guid UserId { get; set; }
        //First Name+" "+lastName
        public String Name { get; set; }
        public String Occupassion { get; set; }

        public String ImageUrl { get; set;
        }
    }
}
