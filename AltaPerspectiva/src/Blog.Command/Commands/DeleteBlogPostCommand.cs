using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Command.Commands
{
    public class DeleteBlogPostCommand : ICommand
    {
        public DeleteBlogPostCommand( Guid blogPostId)
        {
            BlogPostId = blogPostId;
        }
        public Guid Id { get; set; }
        public Guid BlogPostId { get; set; }
        //public Guid UserId { get; set; }
        //public String BlogName { get; set; }
        //public String Url { get; set; }
    }
}
