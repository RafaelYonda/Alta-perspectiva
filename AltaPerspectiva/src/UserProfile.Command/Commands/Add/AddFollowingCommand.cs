using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Command.Commands
{
    public class AddFollowingCommand: ICommand
    {
        public AddFollowingCommand(Guid userid,Guid followingUserId)
        {
            UserId = userid;
            FollowingUserId = followingUserId;
            
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid FollowingUserId { get; set; }
       
    }
}
