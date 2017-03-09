using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain.ReadModel
{
    public class UserEmailParameter
    {
        public string UserName { get; set; }
        public string ImageUrl { get; set; }
        public string Email { get; set; }
    }
}
