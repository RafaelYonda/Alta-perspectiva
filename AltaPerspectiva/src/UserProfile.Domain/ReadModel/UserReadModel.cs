using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain.ReadModel
{
    public class UserReadModel
    {
        public Guid UserId { get; set; }
        public String Name { get; set; }
        public String ImageUrl { get; set; }
        public string Occupation { get; set; }
        public Guid CredentialId { get; set; }
    }
}
