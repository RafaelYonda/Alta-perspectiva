namespace Questions.Domain
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AltaPerspectiva.Core.Infrastructure;
    public class Category:Entity
    {
        public string Name { get; set; }
        public string Icon { get; set; }
        public string Active { get; set; }
        public virtual ICollection<QuestionCategory> Questions { get; set; }
    }
}
