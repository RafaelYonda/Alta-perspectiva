using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class AddCommentViewModel
    {      
        public Guid Id { get; set; }
        public Guid? UserId { get; set; }
        public string CommentText { get; set; }
        public Guid? QuestionId { get; set; }
        public Guid? AnswerId { get; set; }
        public UserViewModel UserViewModel { get; set; }
    }
}
