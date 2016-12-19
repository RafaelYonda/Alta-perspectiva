using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class AddInsightCommandHandler : EFCommandHandlerBase<AddInsightCommand, UserProfileDbContext>, ICommandHandler<AddInsightCommand>
    {
        public AddInsightCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddInsightCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");
            Insight insight=new Insight();
            insight.UserId = command.UserId;
            insight.Title = command.Title;
            insight.Publication = command.Publication;
            insight.PublicationDate = command.PublicationDate;
            insight.PublicationHyperlink = command.PublicationHyperlink;
            insight.PublicationDocument = command.PublicationDocument;
            insight.Description = command.Description;

            DbContext.Insight.Add(insight);
            DbContext.SaveChanges();


        }

      
    }
    
    
}
