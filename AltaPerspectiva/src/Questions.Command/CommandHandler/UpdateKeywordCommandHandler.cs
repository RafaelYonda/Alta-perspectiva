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

		    var keyword = DbContext.Keywords.FirstOrDefault(x => x.Id == command.KeywordId);

		    if (keyword != null)
		    {
		        if (command.IsDeleted == true)
		        {
		            DbContext.Keywords.Remove(keyword);
		        }
		        else
		        {
                    keyword.Text = command.KeywordName;
                    DbContext.Keywords.Update(keyword);
		           
		        }
                command.Id = new Guid("5BAA6409-A12C-CD0E-8BD0-08D458E7FB44");
            }
		    DbContext.SaveChanges();


		}

           
    }
}