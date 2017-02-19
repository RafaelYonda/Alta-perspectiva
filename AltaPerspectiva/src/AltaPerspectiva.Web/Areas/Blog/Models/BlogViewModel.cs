using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;

namespace AltaPerspectiva.Web.Areas.Blog.Models
{
    public class BlogViewModel
    {
        public Guid UserId { get; set; }
        // public String BlogName { get; set; }
        public Guid Id { get; set; }
        public String Title { get; set; }
        public String Url { get; set; }
        public String Description { get; set; }
        public UserViewModel User { get; set; }
    }
}
