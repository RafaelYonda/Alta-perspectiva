using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Command.Commands
{
    public class AddKeywordCommand : ICommand
    {
        public AddKeywordCommand(Guid categoryId, string text)
        {
            CategoryId = categoryId;
            Text = text;
        }

        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid CategoryId { get; set; }
        public string Text { get; set; }
    }
}
