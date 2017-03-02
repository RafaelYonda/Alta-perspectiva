using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain.ReadModel
{
    public class CategoryWiseAnswer
    {
        public string CategoryName { get; set; }
        public int AnswerCount { get; set; }
        public string ImageUrl { get; set; }
        public Guid CategoryId { get; set; }
    }
}
