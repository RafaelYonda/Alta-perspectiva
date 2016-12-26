using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionWithUserViewModel
    {
        public string Title { get; set; }

        public string Body { get; set; }

        public Guid UserId { get; set; }

        public UserViewModel UserViewModel { get; set; }

        public virtual ICollection<QuestionCategory> Categories { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<Like> Likes { get; set; }

        public int? ViewCount { get; set; }

        //User View Model Added

        public QuestionWithUserViewModel()
        {
            Categories = new List<QuestionCategory>();
            Answers = new List<Answer>();
            Comments = new List<Comment>();
            Likes = new List<Like>();
            UserViewModel = new UserViewModel();
        }
        
    }
}
