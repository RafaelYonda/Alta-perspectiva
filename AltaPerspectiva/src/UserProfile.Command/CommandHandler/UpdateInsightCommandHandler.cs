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
    public class UpdateInsightCommandHandler : EFCommandHandlerBase<UpdateInsightCommand, UserProfileDbContext>, ICommandHandler<UpdateInsightCommand>
    {
        public UpdateInsightCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(UpdateInsightCommand command)
        {
            Debug.WriteLine("UpdateInsightCommandHandler executed");
            Insight insight = DbContext.Insight.FirstOrDefault(x => x.UserId == command.UserId);
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
