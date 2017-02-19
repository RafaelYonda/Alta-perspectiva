using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Blog.Models
{
    public class BlogPostViewModel
    {
        public Guid BlogId { get; set; }
        //public Guid UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
