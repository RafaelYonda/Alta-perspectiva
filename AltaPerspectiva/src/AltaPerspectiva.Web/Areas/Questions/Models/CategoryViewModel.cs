using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class CategoryViewModel
    {
        public Guid Id { get; set; }      
        public string Name { get; set; }
        
    }
}
