using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class AddCredentialCommandHandler : EFCommandHandlerBase<AddCredentialCommand, UserProfileDbContext>, ICommandHandler<AddCredentialCommand>
    {
        public AddCredentialCommandHandler(UserProfileDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddCredentialCommand command)
        {
            Debug.WriteLine("AddCredentialCommandHandler executed");

            Credential credential = new Credential
            {
                UserId = command.UserId,
                ImageUrl = command.ImageUrl,
                Title = command.Title,
                FirstName = command.FirstName,
                LastName = command.LastName,
                ProfileViewCount = 0,
                CreatedOn = DateTime.Now,
                Description = command.Description
            };
            DbContext.Credentials.Add(credential);

            DbContext.SaveChanges();




            //ContractInformation information=new ContractInformation();
            //information.UserId = command.UserId;
            //information.FirstName = command.FirstName;
            //information.LastName = command.LastName;
            //information.PrefferedEmail = command.PrefferedEmail;
            //information.PhoneNumber = command.PhoneNumber;
            //information.AddressLine1 = command.AddressLine1;
            //information.AddressLine2 = command.AddressLine2;
            //information.Country = command.Region;
            //information.Region = command.Region;
            //information.City = command.City;

            //DbContext.ContractInformation.Add(information);
            //DbContext.SaveChanges();

        }
    }
}
