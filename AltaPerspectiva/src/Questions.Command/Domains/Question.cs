namespace Questions.Command
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AltaPerspectiva.Core.Infrastructure;
    using AltaPerspectiva.Identity;

    public class Question:Entity
    {
        public string Title { get; set; }

        public string Body { get; set; } 

        public Guid UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<QuestionCategory> Categories { get; set; }

        public virtual ICollection <Answer> Answers { get; set; }
     
        public virtual ICollection<Comment> Comments { get; set; }
   
        public virtual ICollection<Like> Likes { get; set; }
       
    }
}
