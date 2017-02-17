using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Command.Commands
{
    public class AddBlogPostCommand : ICommand
    {
        public AddBlogPostCommand( Guid userId,String title,String description, Guid blogId)
        {
            UserId = userId;
            Title = title;
            Description = description;
            BlogId = blogId;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

      //  public long BlogViewCount { get; set; }
        public Guid BlogId { get; set; }
    }
}
