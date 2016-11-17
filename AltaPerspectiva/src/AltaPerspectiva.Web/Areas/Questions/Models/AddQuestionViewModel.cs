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
        public QuestionViewModel()
        {           
            Answers = new List<Answer>();
            Comments = new List<Comment>();
            Likes = new List<Like>();
        }

        public string Title { get; protected set; }
        public string Body { get; protected set; }
        public DateTime Date { get; protected set; }
        public Guid Id { get; set; }       
        public List<Answer> Answers { get; protected set; }
        public List<Comment> Comments { get; protected set; }
        public List<Like> Likes { get; protected set; }
    }
}
