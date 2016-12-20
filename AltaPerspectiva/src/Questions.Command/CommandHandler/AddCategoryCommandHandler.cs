
namespace Questions.Command.CommandHandler
{
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

    public class AddCategoryCommandHandler : EFCommandHandlerBase<AddCategoryCommand, QuestionsDbContext>,
        ICommandHandler<AddCategoryCommand>
    {
        public AddCategoryCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }
        public override void Execute(AddCategoryCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");
            Category category = new Category();
            category.GenerateNewIdentity();
            category.Name = command.Name;
            category.Icon = command.Icon;
            category.Active = command.Active;
            category.Description = command.Description;
            category.Sequence = command.Sequence;
            category.Image = command.Image;

         
            DbContext.Categories.Add(category);
            try
            {
                DbContext.SaveChanges();
            }
            catch(Exception e)
            {

            }
            
            command.Id = category.Id;
        }
    }
}
