namespace Questions.Command
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AltaPerspectiva.Core.Infrastructure;
    using AltaPerspectiva.Identity;

    public class Answer:Entity
    {
        public string Text { get; set; }
        public DateTime Date { get; set; }

        //public Guid UserId {get; set; }
        //public virtual ApplicationUser User { get; set; }

        public Guid? QuestionId { get; set; }
        public virtual Question Question { get; set; }
    }
}
