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

    public class AddAnswerCommandHandler : EFCommandHandlerBase<AddAnswerCommand, QuestionsDbContext>,
		ICommandHandler<AddAnswerCommand>
	{
		public AddAnswerCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddAnswerCommand command)
		{
			Debug.WriteLine("AddAnswerCommandHandler executed");

            Question question = GetQuestionById(command.QuestionId);
            // 
            Answer answer = new Answer();
            answer.GenerateNewIdentity();
            // create new answers. generate id then add to questions

            answer.QuestionId = command.QuestionId;            
            answer.Text = command.Text;            
            answer.UserId = command.UserId;
            answer.CreatedOn = DateTime.Now;
            answer.CreatedBy = command.UserId;
            answer.DTS = DateTime.Now;             
                        
            DbContext.Answers.Add(answer);
            DbContext.SaveChanges();

			command.Id = answer.Id;
		}

        private Question GetQuestionById(Guid id)
        {
            return DbContext
                    .Questions
                    .Include(q => q.Answers)
                    .Where(q => q.Id == id)
                    .SingleOrDefault();
                        
        }        
    }
}