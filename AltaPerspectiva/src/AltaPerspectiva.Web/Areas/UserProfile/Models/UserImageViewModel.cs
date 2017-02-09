using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class UserImageViewModel
    {
        public IFormFile File { get; set; }
        public Guid CredentialId { get; set; }
    }
}
