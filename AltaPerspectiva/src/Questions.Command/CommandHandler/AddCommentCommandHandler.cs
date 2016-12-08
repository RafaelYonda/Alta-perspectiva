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

    public class AddCommentCommandHandler : EFCommandHandlerBase<AddCommentCommand, QuestionsDbContext>,
		ICommandHandler<AddCommentCommand>
	{
		public AddCommentCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddCommentCommand command)
		{
			Debug.WriteLine("AddCommentCommandHandler executed");

            Question question;
            Answer answer;

            Comment comment = new Comment();
            comment.GenerateNewIdentity();

            /// save comment for question
            if (command.QuestionId.HasValue)
            {
                question = GetQuestionById(command.QuestionId.Value);
                comment.QuestionID = question.Id;
            }

            // save comment for answer
            if (command.AnswerId.HasValue)
            {
                answer = GetAnswerById(command.AnswerId.Value);
                comment.AnswerId = answer.Id;
            }

            comment.CommentText = command.CommentText;
            comment.UserID = command.UserId;

            comment.CommentDate = DateTime.Now;
            comment.CreatedOn = DateTime.Now;
            comment.CreatedBy = command.UserId;
            comment.DTS = DateTime.Now;             
                        
            DbContext.Comments.Add(comment);
            DbContext.SaveChanges();

			command.Id = comment.Id;
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