using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Domain
{
    public class QuestionLevel
    {
        [Key]
        public Int64 Id { get; set; }
        public Guid QuestionId { get; set; }
        public virtual Question Question { get; set; }

        public Guid? LevelId { get; set; }
        public virtual Level Level { get; set; }

    }
}
