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
    }
}
