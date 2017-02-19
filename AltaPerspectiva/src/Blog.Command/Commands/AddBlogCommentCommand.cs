using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Command.Commands
{
    public class AddBlogCommentCommand : ICommand
    {
        public AddBlogCommentCommand(string _commentText, Guid _blogPostId, Guid _userId)
        {
            UserId = _userId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : _userId;
            CommentText = _commentText;
            BlogPostId = _blogPostId;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string CommentText { get; set; }
        public Guid BlogPostId { get; set; }
        
    }
}
