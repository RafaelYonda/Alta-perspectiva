using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class ProductCommentViewModel
    {
        public string CommentText { get; set; }
        public Guid UserId { get; set; }
        public Guid VirtualStoreId { get; set; }
        public UserViewModel UserViewModel { get; set; }
    }
}
