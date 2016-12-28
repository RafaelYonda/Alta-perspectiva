using AltaPerspectiva.Identity;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionCommentViewModel
    {      
        public Guid Id { get; set; }
        public Guid? UserId { get; set; }
        public UserViewModel UserViewModel { get; set; }
        public string CommentText { get; set; }
        public Guid? QuestionId { get; set; }
      
    }
}
