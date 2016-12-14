﻿namespace Questions.Domain
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
        public string Description { get; set; }
        public int Sequence { get; set; }
        public string Image { get; set; }
        public virtual ICollection<QuestionCategory> Questions { get; set; }
        public virtual ICollection<Keyword> Keywords { get; set; }
    }
}
