using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class AddCategoryFollower
    {   
        public Guid UserId { get; set; }
        public Guid CategoryId { get; set; }
    }
}
