using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class DeleteSocialLinkCommand : ICommand
    {
        
        public DeleteSocialLinkCommand(Guid userId,string twitterLink,string facebookLink,string linkedinLink)
        {
            UserId = userId;
            TwitterLink = twitterLink;
            FacebookLink = facebookLink;
            LinkedinLink = linkedinLink;

        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
       
        public string TwitterLink { get; set; }
        public string FacebookLink { get; set; }
        public string LinkedinLink { get; set; }
    }
}
