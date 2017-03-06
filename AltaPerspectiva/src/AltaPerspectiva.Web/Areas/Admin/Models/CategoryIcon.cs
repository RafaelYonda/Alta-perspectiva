using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class CategoryIconViewModel
    {
        public string Icon { get; set; }
        public Guid UserId { get; set; }
    }
}
