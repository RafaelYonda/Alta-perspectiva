using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class UpdateViewCountViewModel
    {      
        public Guid Id { get; set; }       
        public Guid? QuestionId { get; set; }       
    }
}
