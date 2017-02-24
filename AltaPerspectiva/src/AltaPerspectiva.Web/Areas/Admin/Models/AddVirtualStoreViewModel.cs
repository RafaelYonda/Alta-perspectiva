using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class AddVirtualStoreViewModel
    {
        public Guid Id { get; set; }
        public double Prize { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string FileName { get; set; }
        public string ScreenShotImage { get; set; }
        public List<VirtualStore> VirtualStores { get; set; }
    }
}
