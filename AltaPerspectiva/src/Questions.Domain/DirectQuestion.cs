using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Domain
{
    public class DirectQuestion:Entity
    {
        public string Title { get; set; }

        public string Body { get; set; }

        public Guid UserId { get; set; }
      //  public bool? IsAnonymous { get; set; }

       // public virtual ICollection<QuestionCategory> Categories { get; set; }

       // public virtual ICollection<Answer> Answers { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<Like> Likes { get; set; }


        //public virtual ICollection<QuestionLevel> QuestionLevels { get; set; }
       // public virtual ICollection<QuestionTopic> QuestionTopics { get; set; }

       // public virtual ICollection<Bookmark> Bookmarks { get; set; }
        public int? ViewCount { get; set; }

        public Guid QuestionId { get; set; }
        public virtual Question Question { get; set; }
    }
}
