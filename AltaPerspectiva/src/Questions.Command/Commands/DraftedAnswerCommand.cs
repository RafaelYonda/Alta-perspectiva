using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Questions.Command.Commands
{
    public class DraftedAnswerCommand : ICommand
    {
        public DraftedAnswerCommand(Guid answerId,string text)
        {
            AnswerId = answerId;
            Text = text;
        }
        public Guid Id { get; set; }
        public Guid AnswerId { get; set; }
        public string Text { get; set; }
    }
}
