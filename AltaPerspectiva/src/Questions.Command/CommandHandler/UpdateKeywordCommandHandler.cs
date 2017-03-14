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

    public class UpdateKeywordCommandHandler : EFCommandHandlerBase<UpdateKeywordCommand, QuestionsDbContext>,
		ICommandHandler<UpdateKeywordCommand>
	{
		public UpdateKeywordCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(UpdateKeywordCommand command)
		{
			Debug.WriteLine("AddAnswerCommandHandler executed");
         
		}

           
    }
}