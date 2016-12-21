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
    public class UpdateCategoryCommandHandler : EFCommandHandlerBase<UpdateCategoryCommand, QuestionsDbContext>,
        ICommandHandler<UpdateCategoryCommand>
    {
        public UpdateCategoryCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(UpdateCategoryCommand command)
        {
            Debug.WriteLine("UpdateCategoryCommandHandler executed");

            Category category = DbContext.Categories.FirstOrDefault(x => x.Id == command.Id);
            if (category != null)
            {
                category.Image = command.Image;
                category.Name = command.Name;
                category.Description = command.Description;
                DbContext.SaveChanges();
            }
            else
            {
                throw new Exception("No category found");
            }
            //Question question = GetQuestionById(command.QuestionId);
            //// 
            //Answer answer = new Answer();
            //answer.GenerateNewIdentity();
            //// create new answers. generate id then add to questions

            //answer.QuestionId = command.QuestionId;
            //answer.Text = command.Text;
            //answer.UserId = command.UserId;
            //answer.CreatedOn = DateTime.Now;
            //answer.CreatedBy = command.UserId;
            //answer.DTS = DateTime.Now;

            //DbContext.Answers.Add(answer);
            //DbContext.SaveChanges();

            //command.Id = answer.Id;
        }


    }
}

