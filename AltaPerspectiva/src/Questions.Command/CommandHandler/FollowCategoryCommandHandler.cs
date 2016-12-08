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

    public class FollowCategoryCommandHandler : EFCommandHandlerBase<FollowCategoryCommand, QuestionsDbContext>,
		ICommandHandler<FollowCategoryCommand>
	{
		public FollowCategoryCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(FollowCategoryCommand command)
		{
			Debug.WriteLine("FollowCategoryCommandHandler executed");
                        
            CategoryFollower categoryFollower = new CategoryFollower();

            categoryFollower.GenerateNewIdentity();
            categoryFollower.CategoryId = command.CategoryId;
            categoryFollower.UserId = command.UserId;           
                        
            DbContext.CategoryFollowers.Add(categoryFollower);
            DbContext.SaveChanges();

			command.Id = command.Id;
		}
           
    }
}