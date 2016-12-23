using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.Commands;
using Questions.Command.DbContext;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Command.CommandHandler
{
    public class AddKeywordCommandHandler : EFCommandHandlerBase<AddKeywordCommand, QuestionsDbContext>,
        ICommandHandler<AddKeywordCommand>
    {
        public AddKeywordCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddKeywordCommand command)
        {
            Debug.WriteLine("AddKeywordCommandHandler executed");
            Keyword word = new Keyword();
            word.CategoryId = command.CategoryId;
            word.Text = command.Text;

            DbContext.Keywords.Add(word);



            DbContext.SaveChanges();


        }
    }
   
}
