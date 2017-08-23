using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class AnswerViewModel
    {
        public Guid AnswerId { get; set; }
        public Guid Id { get; set; }
        public string Text { get; set; }        
        public DateTime? AnswerDate { get; set; }        
        public Guid UserId { get; set; }
        public UserViewModel UserViewModel { get; set; }
        public ICollection<AnswerCommentViewModel> Comments { get; set; } 
        public ICollection<AnswerLikeViewModel> Likes { get; set; }
        public Guid QuestionId { get; set; }
        public bool? IsAnonymous { get; set; }
        public bool? IsDrafted { get; set; }
        
        public DateTime? CreatedOn { get; set; }
        public string FirstImageUrl { get; set; }

        //For follower
        //for only loggedin user
        public bool IsFollowing { get; set; }

        public int LikeCount { get; set; }
        public int CommentCount { get; set; }
    }
}
