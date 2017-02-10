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
        public string Name { get; set; }
        public string Occupation { get; set; }
        public string ImageUrl { get; set; }
        public Guid CredentialId { get; set; }
       
    }
}
