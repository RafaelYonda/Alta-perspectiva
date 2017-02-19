﻿using AltaPerspectiva.Web.Areas.UserProfile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Blog.Models
{
    public class BlogCommentViewModel
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public UserViewModel User { get; set; }
        public string CommentText { get; set; }
        public Guid BlogPostId { get; set; }
    }
}
