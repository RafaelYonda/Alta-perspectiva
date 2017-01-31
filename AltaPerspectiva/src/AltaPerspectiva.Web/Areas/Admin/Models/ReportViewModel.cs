using AltaPerspectiva.Web.Areas.UserProfile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class ReportViewModel
    {
        public System.Guid Id { get; set; }
        public string Title { get; set; }
        public string Comment { get; set; }

        public Nullable<System.DateTime> CreatedOn { get; set; }

        //Answer
        public Nullable<System.Guid> AnswerId { get; set; }
        public string AnswerText { get; set; }


        //Question
        public System.Guid QuestionId { get; set; }
        public string QuestionTitle { get; set; }
        public string QuestionBody { get; set; }
       

        //User
        public System.Guid UserId { get; set; }
        public String UserFullName { get; set; }
        

        
    }
}
