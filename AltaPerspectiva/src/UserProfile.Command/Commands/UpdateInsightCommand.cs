using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdateInsightCommand : ICommand
    {
        public UpdateInsightCommand(Guid userId,String title,String publication,DateTime publicationDate,String publicationHyperlink,String publicationDocument,String description)
        {
            UserId = userId;
            Title = title;
            Publication = publication;
            PublicationDate = publicationDate;
            PublicationHyperlink = publicationHyperlink;
            PublicationDocument = publicationDocument;
            Description = description;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String Title { get; set; }
        public String Publication { get; set; }
        public DateTime PublicationDate { get; set; }
        public String PublicationHyperlink { get; set; }
        public String PublicationDocument { get; set; }
        public String Description { get; set; }
    }
}
