

namespace UserProfile.Domain
{
    using AltaPerspectiva.Core.Infrastructure;
    using System;

    public class ContractInformation:Entity
    {
        public Guid UserId { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String PrefferedEmail { get; set; }
        public String PhoneNumber { get; set; }
        public String AddressLine1 { get; set; }
        public String AddressLine2 { get; set; }
        public String Country { get; set; }
        public String Region { get; set; }
        public String City { get; set; }
    }
}
