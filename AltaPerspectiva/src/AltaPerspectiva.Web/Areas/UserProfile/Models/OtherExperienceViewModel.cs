using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class OtherExperienceViewModel
    {
        public Guid Id { get; set; }
        public Guid? CategoryId { get; set; }
        public String Description { get; set; }
        public Guid CredentialId { get; set; }
    }
}
