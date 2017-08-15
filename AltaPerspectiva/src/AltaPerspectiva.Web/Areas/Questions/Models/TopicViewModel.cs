using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class TopicViewModel
    {
        public Guid Id { get; set; }
        public String TopicName { get; set; }
        public Guid CategoryId { get; set; }

        public String CategoryName { get; set; }
    }
}
