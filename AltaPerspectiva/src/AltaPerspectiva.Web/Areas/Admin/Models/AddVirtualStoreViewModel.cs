using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using UserProfile.Domain;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class AddVirtualStoreViewModel
    {
        public Guid Id { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public IFormFile ScreenShotImage { get; set; }
        public string ScreenShotFileName { get; set; }
        public IFormFile ProductFile { get; set; }
        public string ProductFileName { get; set; }
        public List<VirtualStore> VirtualStores { get; set; }
    }
}
