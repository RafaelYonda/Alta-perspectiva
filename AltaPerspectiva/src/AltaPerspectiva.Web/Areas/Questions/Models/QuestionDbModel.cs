using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionDbModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public string Body { get; set; }

        public Guid UserId { get; set; }
        
        //public UserViewModel UserViewModel { get; set; }

        // public virtual ICollection<CategoryViewModel> Categories { get; set; }

        // public List<AnswerViewModel> Answers { get; set; }

        //public virtual ICollection<QuestionCommentViewModel> Comments { get; set; }

        // public virtual ICollection<QuestionLikeViewModel> Likes { get; set; }

        public int? ViewCount { get; set; }
        public DateTime? CreatedOn { get; set; }

        //Topics and Levels
       // public virtual ICollection<QuestionLevel> QuestionLevels { get; set; }
        //public virtual ICollection<QuestionTopic> QuestionTopics { get; set; }


        public int AnswerCount { get; set; }

        //public List<String> QuestionLevelNames { get; set; }
        //public List<String> QuestionTopicNames { get; set; }

        //public bool? IsAnonymous { get; set; }

        public bool IsDirectQuestion { get; set; }

        public Guid? QuestionAskedToUser { get; set; }

        public Guid CategoryId { get; set; }
        public Guid TopicId { get; set; }
        public Guid LevelId { get; set; }
        /*Answer*/
        public Guid AnswerId { get; set; }
        public string Text { get; set; }
        public DateTime? AnswerDate { get; set; }
        public Guid AnswerUserId { get; set; }
        //public UserViewModel UserViewModel { get; set; }
        public int AnswerLikeCount { get; set; }
        public int AnswerCommentCount { get; set; }
        // public ICollection<AnswerCommentViewModel> Comments { get; set; }
        // public ICollection<AnswerLikeViewModel> Likes { get; set; }

        public Guid QuestionId { get; set; }
        public bool? IsAnonymous { get; set; }
        public bool? IsDrafted { get; set; }

        public DateTime? AnswerCreatedOn { get; set; }
        public string FirstImageUrl { get; set; }

        //For follower
        //for only loggedin user
        public bool IsFollowing { get; set; }
    }
}
