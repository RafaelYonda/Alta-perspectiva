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

            Question question;
            Answer answer;

            Like like = new Like();
            like.GenerateNewIdentity();

            /// save comment for question
            if (command.QuestionId.HasValue)
            {
                var alreadyLiked =
                DbContext.Likes.Any(x => x.UserId == command.UserId && x.QuestionId == command.QuestionId && x.AnswerId == null);
                if (!alreadyLiked)
                {
                    question = GetQuestionById(command.QuestionId.Value);
                    like.QuestionId = question.Id;
                    like.UserId = command.UserId;
                    like.CreatedOn = DateTime.Now;
                    like.CreatedBy = command.UserId;
                    like.DTS = DateTime.Now;

                    DbContext.Likes.Add(like);
                    DbContext.SaveChanges();
                    command.Id = like.Id;
                }
                
            }

            // save comment for answer
            if (command.AnswerId.HasValue)
            {
                var alreadyLiked =
                DbContext.Likes.Any(x => x.UserId == command.UserId && x.QuestionId == null && x.AnswerId == command.AnswerId);
                if (!alreadyLiked)
                {
                    answer = GetAnswerById(command.AnswerId.Value);
                    like.AnswerId = answer.Id;
                    like.UserId = command.UserId;
                    like.CreatedOn = DateTime.Now;
                    like.CreatedBy = command.UserId;
                    like.DTS = DateTime.Now;

                    DbContext.Likes.Add(like);
                    DbContext.SaveChanges();
                    command.Id = like.Id;
                }
               
            }
			//command.Id = Guid.Empty;
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