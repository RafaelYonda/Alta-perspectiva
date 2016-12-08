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

    public class AddLikeCommandHandler : EFCommandHandlerBase<AddLikeCommand, QuestionsDbContext>,
		ICommandHandler<AddLikeCommand>
	{
		public AddLikeCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddLikeCommand command)
		{
			Debug.WriteLine("AddAnswerCommandHandler executed");

            Question question;
            Answer answer;

            Like like = new Like();
            like.GenerateNewIdentity();

            /// save comment for question
            if (command.QuestionId.HasValue)
            {
                question = GetQuestionById(command.QuestionId.Value);
                like.QuestionId = question.Id;
            }

            // save comment for answer
            if (command.AnswerId.HasValue)
            {
                answer = GetAnswerById(command.AnswerId.Value);
                like.AnswerId = answer.Id;
            }

            like.UserId = command.UserId;
            like.CreatedOn = DateTime.Now;
            like.CreatedBy = command.UserId;
            like.DTS = DateTime.Now;             
                        
            DbContext.Likes.Add(like);
            DbContext.SaveChanges();

			command.Id = like.Id;
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