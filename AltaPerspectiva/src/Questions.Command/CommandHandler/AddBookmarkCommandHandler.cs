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

    public class AddBookmarkCommandHandler : EFCommandHandlerBase<AddBookmarkCommand, QuestionsDbContext>,
		ICommandHandler<AddBookmarkCommand>
	{
		public AddBookmarkCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddBookmarkCommand command)
		{
			Debug.WriteLine("AddBookmarkCommandHandler executed");

            Bookmark bookmark=new Bookmark();
            bookmark.GenerateNewIdentity();
		    bookmark.QuestionId = command.QuestionId;
		    bookmark.UserId = command.UserId;
            

                   
                        
            DbContext.Bookmarks.Add(bookmark);
            DbContext.SaveChanges();

			command.Id = bookmark.Id;
		}
    }
}