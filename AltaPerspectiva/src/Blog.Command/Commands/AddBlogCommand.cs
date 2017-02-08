using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Command.Commands
{
    public class AddBlogCommand : ICommand
    {
        public AddBlogCommand( Guid userId,String blogName,String url)
        {
            UserId = userId;
            BlogName = blogName;
            Url = url;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String BlogName { get; set; }
        public String Url { get; set; }
    }
}
