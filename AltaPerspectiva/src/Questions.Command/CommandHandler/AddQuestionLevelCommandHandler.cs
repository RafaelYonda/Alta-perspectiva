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

    public class AddQuestionLevelCommandHandler : EFCommandHandlerBase<AddQuestionLevelCommand, QuestionsDbContext>,
		ICommandHandler<AddQuestionLevelCommand>
	{
		public AddQuestionLevelCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddQuestionLevelCommand command)
		{
			Debug.WriteLine("AddQuestionLevelCommandHandler executed");
            QuestionLevel questionLevel=new QuestionLevel();
		    questionLevel.QuestionId = command.QuestionId;
		    questionLevel.LevelId = command.LevelId;

		    DbContext.QuestionLevels.Add(questionLevel);
		    DbContext.SaveChanges();

		}

             
    }
}