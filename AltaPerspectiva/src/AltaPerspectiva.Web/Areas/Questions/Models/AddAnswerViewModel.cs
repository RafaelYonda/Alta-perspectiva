using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class AnswerViewModel
    {      
        public string Title { get; set; }
        public string Body { get;  set; }      
        public Guid Id { get; set; }
        public Guid QuestionId { get; set; }
    }
}
