using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionSaveViewModel
    {
        public string Title { get; set; }
        public string CategoryId { get; set; }
        public string TopicId { get; set; }
        public string LevelId { get; set; }
    }
}
