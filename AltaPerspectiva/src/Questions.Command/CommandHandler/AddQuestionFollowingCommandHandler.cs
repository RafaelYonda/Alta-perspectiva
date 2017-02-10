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
    using Commands;

    /// <summary>
    ///     Create new inactive user
    /// </summary>
    /// 

    public class AddQuestionFollowingCommandHandler : EFCommandHandlerBase<AddQuestionFollowingCommand, QuestionsDbContext>,
		ICommandHandler<AddQuestionFollowingCommand>
	{
		public AddQuestionFollowingCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddQuestionFollowingCommand command)
		{
			Debug.WriteLine("AddQuestionFollowingCommandHandler executed");

		    QuestionFollowing questionFollowing = new QuestionFollowing
		    {
		        UserId = command.UserId,
		        FollowedUserId = command.FollowedUserId,
		        QuestionId = command.QuestionId,
		        AnswerId = command.AnswerId,
		        CreatedOn = DateTime.Now
		    };
		    DbContext.QuestionFollowings.Add(questionFollowing);
		    DbContext.SaveChanges();
		}

         
    }
}