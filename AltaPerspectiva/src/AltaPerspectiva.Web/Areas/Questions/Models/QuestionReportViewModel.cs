using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionReportViewModel
    {
        public Guid QuestionId { get; set; }
        public String Title { get; set; }
        public String Comment { get; set; }
        public Guid UserId { get; set; }
        public Guid? AnswerId { get; set; }
    }
}
