using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands
{
    public class UpdateContractInfomaionCommand: ICommand
    {
        public UpdateContractInfomaionCommand(Guid userid,String firstName,String lastName,String prefferedEmail,String phoneNumber,String addressLine1,String addressLine2,String country,String region,String city)
        {
            UserId = userid;
            FirstName = firstName;
            LastName = lastName;
            PrefferedEmail = prefferedEmail;
            PhoneNumber = phoneNumber;
            AddressLine1 = addressLine1;
            AddressLine2 = addressLine2;
            Country = country;
            Region = region;
            City = city;
        }
        public Guid Id { get; set; }
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
