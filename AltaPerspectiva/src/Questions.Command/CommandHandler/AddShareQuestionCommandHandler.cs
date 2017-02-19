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

    public class AddShareQuestionCommandHandler : EFCommandHandlerBase<AddShareQuestionCommand, QuestionsDbContext>,
		ICommandHandler<AddShareQuestionCommand>
	{
		public AddShareQuestionCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddShareQuestionCommand command)
		{
			Debug.WriteLine("AddShareQuestionCommandHandler executed");

		    ShareQuestion question = new ShareQuestion
		    {
		        UserId = command.UserId,
		        QuestionId = command.QuestionId,
		        CreatedOn = DateTime.Now,
		        CreatedBy = command.UserId
		    };
            question.GenerateNewIdentity();
		    DbContext.ShareQuestions.Add(question);
		    
            DbContext.SaveChanges();
          

		}

           
    }
}