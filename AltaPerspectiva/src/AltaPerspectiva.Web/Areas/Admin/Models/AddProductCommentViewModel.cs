using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class AddProductCommentViewModel
    {
        public string CommentText { get; set; }
        public Guid UserId { get; set; }
        public Guid VirtualStoreId { get; set; }
    }
}
