using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class Level : Entity
    {
        public int LevelRank { get; set; }
        public String LevelName { get; set; }
        public virtual ICollection<QuestionLevel> QuestionLevels { get; set; }
    }
}
