using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class AddVirtualStoreViewModel
    {
        public double Prize { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string FileName { get; set; }
        public string ScreenShotImage { get; set; }
    }
}
