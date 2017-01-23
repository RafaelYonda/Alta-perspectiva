using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class AddQuestionViewModel
    {      
        public string Title { get; set; }
        public string Body { get;  set; }      
        public Guid Id { get; set; }        
        public List<Guid> CategoryIds { get; set; }

        public string TopicId { get; set; }
        public string LevelId { get; set; }


        //ananomus
        public bool? IsAnonymous { get; set; }
        public AddQuestionViewModel()
        {
            CategoryIds = new List<Guid>();
            
        }
    
    }
}
