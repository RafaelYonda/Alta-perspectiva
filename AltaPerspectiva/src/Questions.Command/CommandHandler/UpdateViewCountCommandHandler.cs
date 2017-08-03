namespace Questions.Command
{
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;
    using Questions.Command.DbContext;
    using System.Diagnostics;
    using System.Linq;
    using Domain;
    using System.Collections.Generic;
    using System;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    ///     Create new inactive user
    /// </summary>
    /// 

    public class UpdateViewCountCommandHandler : EFCommandHandlerBase<UpdateViewCountCommand, QuestionsDbContext>,
		ICommandHandler<UpdateViewCountCommand>
	{
		public UpdateViewCountCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(UpdateViewCountCommand command)
		{
			Debug.WriteLine("UpdateViewCountCommandHandler executed");

            Question question = null;          

            /// save comment for question
            if (command.QuestionId != Guid.Empty)
            {
                question = GetQuestionById(command.QuestionId.Value);
                if(question.ViewCount == null)
                    question.ViewCount = 1;
                else
                    question.ViewCount += 1;
                DbContext.Questions.Update(question);
                DbContext.SaveChanges();
                command.Id = question.Id;
            }

            

			
		}

        private Question GetQuestionById(Guid id)
        {
            return DbContext
                    .Questions
                    .Include(q => q.Answers)
                    .Where(q => q.Id == id)
                    .SingleOrDefault();
                        
        }
        private Answer GetAnswerById(Guid id)
        {
            return DbContext
                    .Answers
                    .Include(q => q.Comments)
                    .Where(q => q.Id == id)
                    .SingleOrDefault();

        }
    }
}