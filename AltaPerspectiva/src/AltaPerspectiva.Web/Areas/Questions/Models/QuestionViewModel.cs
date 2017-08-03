using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionViewModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public string Body { get; set; }

        public Guid UserId { get; set; }

        public UserViewModel UserViewModel { get; set; }

        public virtual ICollection<CategoryViewModel> Categories { get; set; }

        public  List<AnswerViewModel> Answers { get; set; }

        public virtual ICollection<QuestionCommentViewModel> Comments { get; set; }

        public virtual ICollection<QuestionLikeViewModel> Likes { get; set; }

        public int? ViewCount { get; set; }
        public DateTime? CreatedOn { get; set; }

        //Topics and Levels
        public virtual ICollection<QuestionLevel> QuestionLevels { get; set; }
        public virtual ICollection<QuestionTopic> QuestionTopics { get; set; }


        public int AnswerCount { get; set; }

        public List<String> QuestionLevelNames { get; set; }
        public List<String> QuestionTopicNames { get; set; }

        public bool? IsAnonymous { get; set; }

        public bool IsDirectQuestion { get; set; }

        public Guid? QuestionAskedToUser { get; set; }
        public QuestionViewModel()
        {
            Categories = new List<CategoryViewModel>();
            Answers = new List<AnswerViewModel>();
            Comments = new List<QuestionCommentViewModel>();
            Likes = new List<QuestionLikeViewModel>();
            UserViewModel = new UserViewModel();
            QuestionLevelNames=new List<string>();
            QuestionTopicNames=new List<string>();
        }

        public int LikeCount { get; set; }
        public int CommentCount { get; set; }
        public Guid CategoryId { get; set; }
        public Guid TopicId { get; set; }
        public Guid LevelId { get; set; }

    }
}
