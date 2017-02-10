using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class QuestionFollowingViewModel
    {
        public Guid FollowedUserId { get; set; }
        public Guid QuestionId { get; set; }
        public Guid? AnswerId { get; set; }
    }
}
