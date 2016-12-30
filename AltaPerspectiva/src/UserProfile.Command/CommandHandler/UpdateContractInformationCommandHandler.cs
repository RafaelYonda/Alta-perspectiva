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
    public class UpdateContractInformationCommandHandler : EFCommandHandlerBase<UpdateContractInfomaionCommand, UserProfileDbContext>,ICommandHandler<UpdateContractInfomaionCommand>
    {
        public UpdateContractInformationCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateContractInfomaionCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

            ContractInformation information =
                DbContext.ContractInformation.FirstOrDefault(x => x.UserId == command.UserId);
            information.UserId = command.UserId;
            information.FirstName = command.FirstName;
            information.LastName = command.LastName;
            information.PrefferedEmail = command.PrefferedEmail;
            information.PhoneNumber = command.PhoneNumber;
            information.AddressLine1 = command.AddressLine1;
            information.AddressLine2 = command.AddressLine2;
            information.Country = command.Region;
            information.Region = command.Region;
            information.City = command.City;

            DbContext.ContractInformation.Add(information);
            DbContext.SaveChanges();
            
        }
    }
}
