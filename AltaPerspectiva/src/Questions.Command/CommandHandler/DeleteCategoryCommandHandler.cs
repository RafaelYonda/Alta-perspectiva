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
    public class DeleteCategoryCommandHandler : EFCommandHandlerBase<DeleteCategoryCommand, QuestionsDbContext>,
        ICommandHandler<DeleteCategoryCommand>
    {
        public DeleteCategoryCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }
        public override void Execute(DeleteCategoryCommand command)
        {
            Debug.WriteLine("DeleteCategoryCommandHandler executed");
            Category category = DbContext.Categories.FirstOrDefault(x => x.Id == command.Id);
            if (category != null)
            {
                category.IsActive = false;
                category.ModifiedBy = command.UserId;
                category.ModifiedOn=DateTime.Now;
                category.IsDeleted = true;
                DbContext.Categories.Update(category);
                DbContext.SaveChanges();
            }
            else
            {
                throw new Exception("Category Not Found Which is be deleted");
            }
           

        }
    }
}
