using AltaPerspectiva.Identity;
using Questions.Command;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Models
{
    public class CategoriesSummary
    {
       public Guid Id { get; set; }
       public int TotalQuestions { get; set; }
       public int TotalFollowers { get; set; }      
    }
}
