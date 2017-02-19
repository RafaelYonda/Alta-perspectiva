using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Command.Commands
{
    public class UpdateBlogCommand : ICommand
    {
        public UpdateBlogCommand(Guid blogId,string title,string description)
        {
            BlogId = blogId;
            Title = title;
            Description = description;
        }
        public Guid Id { get; set; }
        public Guid BlogId { get; set; }
        public String Title { get; set; }
     
        public String Description { get; set; }
    }
}
