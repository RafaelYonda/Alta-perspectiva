using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class AddContractInformationViewModel
    {
        public long Id { get; set; }
        public Guid UserId { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String PrefferedEmail { get; set; }
        public String PhoneNumber { get; set; }
        public String AddressLine1 { get; set; }
        public String AddressLine2 { get; set; }
        public String Country { get; set; }
        public String Region { get; set; }
        public String City { get; set; }
    }
}
