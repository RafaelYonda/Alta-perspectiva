using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionViewModel
    {
        //public QuestionViewModel()
        //{
        //    Answers = new List<Answer>();
        //    Comments = new List<Comment>();
        //    Likes = new List<Like>();
        //}

        public string Title { get; set; }
        public string Body { get;  set; }
        public DateTime Date { get; set; }
        public Guid Id { get; set; }       
        //public List<Answer> Answers { get; set; }
        //public List<Comment> Comments { get; set; }
        //public List<Like> Likes { get; set; }
    }
}
