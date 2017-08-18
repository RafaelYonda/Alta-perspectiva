using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class FilterParameter
    {
        public Guid? CategoryId { get; set; }
        public Guid? TopicId { get; set; }
        public Guid? LevelId { get; set; }
        public bool QuestionWithAnswer { get; set; }
        public bool QuestionWithoutAnswer { get; set; }
        public bool MostViewedQuestion { get; set; }
        public bool MostLikedQuestion { get; set; }
        public bool MatestQuestion { get; set; }
    }
}
