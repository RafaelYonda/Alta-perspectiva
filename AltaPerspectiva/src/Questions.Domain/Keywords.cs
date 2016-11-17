using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;

namespace Questions.Domain
{
    public class Keywords
    {
        public int Id { get; set; }
        public string KeyWord { get; set; }
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
