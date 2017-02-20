using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Command.Commands
{
    public class UpdateBlogPostViewCountCommand : ICommand
    {
        public UpdateBlogPostViewCountCommand( Guid blogPostId)
        {
            BlogPostId = blogPostId;
         
        }
        public Guid Id { get; set; }
        public Guid BlogPostId { get; set; }
       
    }
}
