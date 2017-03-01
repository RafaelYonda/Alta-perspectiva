using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddProductCommentCommand:ICommand
    {
        public AddProductCommentCommand(Guid userId, String commentText, Guid virtualStoreId)
        {
            UserId = userId;
            CommentText = commentText;
            VirtualStoreId = virtualStoreId;
        }
        public Guid Id { get; set; }
        public string CommentText { get; set; }
        public Guid UserId { get; set; }
        public Guid VirtualStoreId { get; set; }
    }
}
