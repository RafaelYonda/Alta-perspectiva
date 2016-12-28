using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class AddLikeViewModel
    {      
        public Guid Id { get; set; }
        public Guid UserId { get; set; }     
        public Guid? QuestionId { get; set; }
        public Guid? AnswerId { get; set; }
    }
}
