using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class TopUserViewModel
    {
        public Guid Id { get; set; }
        public String FullName { get; set; }
        public int TotalLike { get; set; }
    }
}
