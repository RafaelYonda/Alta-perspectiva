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

    public class UpdateQuestionCommandHandler : EFCommandHandlerBase<UpdateQuestionCommand, QuestionsDbContext>,
		ICommandHandler<UpdateQuestionCommand>
	{
		public UpdateQuestionCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(UpdateQuestionCommand command)
		{
			Debug.WriteLine("UpdateQuestionCommandHandler executed");

		    Question question = DbContext.Questions.FirstOrDefault(x => x.Id == command.Id);
		    if (question == null)
		    {
		        throw new ArgumentNullException("please check UpdateQuestionCommandHandler");
		    }
		    else
		    {
		        question.Title = command.Title;
		        question.Body = command.Body;
		        question.DTS = DateTime.Now;
		        question.IsAnonymous = question.IsAnonymous;

		        DbContext.Questions.Add(question);
		        DbContext.SaveChanges();
		    }

		}

             
    }
}