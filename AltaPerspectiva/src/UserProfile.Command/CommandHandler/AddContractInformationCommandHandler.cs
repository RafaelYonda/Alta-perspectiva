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
    public class AddContractInformationCommandHandler :EFCommandHandlerBase<AddContractInfomaionCommand, UserProfileDbContext>,ICommandHandler<AddContractInfomaionCommand>
    {
        public AddContractInformationCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddContractInfomaionCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

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
