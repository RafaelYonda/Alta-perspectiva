namespace Questions.Domain
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AltaPerspectiva.Core.Infrastructure;

    public class Question:Entity
    {
        public string Title { get; set; }

        public string Body { get; set; } 

        public Guid UserId { get; set; }  
        public bool? IsAnonymous { get; set; }

        public virtual ICollection<QuestionCategory> Categories { get; set; }

        public virtual ICollection <Answer> Answers { get; set; }
     
        public virtual ICollection<Comment> Comments { get; set; }
   
        public virtual ICollection<Like> Likes { get; set; }


        public virtual ICollection<QuestionLevel> QuestionLevels { get; set; }
        public virtual ICollection<QuestionTopic> QuestionTopics { get; set; }

        public virtual ICollection<Bookmark> Bookmarks { get; set; }
        public int? ViewCount { get; set; }

        public Question() {

            Categories = new List<QuestionCategory>();

            Answers = new List<Answer>();

            Comments = new List<Comment>();

            Likes = new List<Like>();

            QuestionLevels=new List<QuestionLevel>();

            QuestionTopics=new List<QuestionTopic>();
    }
       
    }
}
