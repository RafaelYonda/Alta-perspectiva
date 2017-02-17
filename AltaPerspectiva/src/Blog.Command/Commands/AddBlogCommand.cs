using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Blog.Command.Commands
{
    public class AddBlogCommand : ICommand
    {
        public AddBlogCommand( Guid userId,String title, String url,string description)
        {
            UserId = userId;
            Title = title;
            Url = url;
            Description = description;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public String Title { get; set; }
        public String Url { get; set; }
        public String Description { get; set; }
    }
}
