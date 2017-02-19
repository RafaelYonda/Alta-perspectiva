using System;
using System.Collections.Generic;
using System.Linq;
using AltaPerspectiva.Web.Areas.UserProfile.Models;

namespace AltaPerspectiva.Web.Areas.Blog.Models
{
    public class BlogPostViewModel
    {
        public Guid Id { get; set; }
        public Guid BlogId { get; set; }
        public Guid UserId { get; set; }
        public UserViewModel User { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedOn { get; set; }
        public virtual ICollection<BlogCommentViewModel> Comments { get; set; }
        public virtual ICollection<BlogLikeViewModel> Likes { get; set; }
    }
}
