using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain.ReadModel
{
    public class UserSummary
    {
       // public String Id { get; set; }
        public Guid UserId { get; set; }
        public String Name { get; set; }
        public String ImageUrl { get; set; }
        public string Occupation { get; set; }
        public int TotalLike { get; set; }
        public int TotalComment { get; set; }
        public int TotalQuestion { get; set; }
        public int TotalAnswer { get; set; }
        public int ProfileViewCount { get; set; }
        
    }
}
