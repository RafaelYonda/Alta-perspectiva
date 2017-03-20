using Questions.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class TopicNKeywordViewModel
    {
        [Required(ErrorMessage = "Please select a category")]
        public string CategoryId { get; set; }

        public IEnumerable<Category> Categories { get; set; }

        //[Required]
        public string TopicId { get; set; }

        public IEnumerable<Topic> Topics { get; set; }
        public IEnumerable<Keyword> Keywords { get; set; }

        public TopicNKeywordViewModel()
        {
            Categories=new List<Category>();
            Topics=new List<Topic>();
            Keywords=new List<Keyword>();
        }
    }
}
