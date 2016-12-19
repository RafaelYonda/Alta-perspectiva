using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class AddCategoryViewModel
    {
        public string Name { get; set; }
        public string Icon { get; set; }
        public string Active { get; set; }
        public string Description { get; set; }
        public int Sequence { get; set; }
        public string Image { get; set; }
    }
}
