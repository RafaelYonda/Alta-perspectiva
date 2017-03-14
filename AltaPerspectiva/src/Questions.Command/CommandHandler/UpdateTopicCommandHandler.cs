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

    public class UpdateTopicCommandHandler : EFCommandHandlerBase<UpdateTopicCommand, QuestionsDbContext>,
		ICommandHandler<UpdateTopicCommand>
	{
		public UpdateTopicCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(UpdateTopicCommand command)
		{
		    var topic = DbContext.Topics.FirstOrDefault(x => x.Id == command.TopicId);
		    if (topic != null)
		    {
		        if (!string.IsNullOrEmpty(command.TopicName))
		        {
                    topic.TopicName = command.TopicName;
                }

		        topic.IsDeleted = command.IsDeleted;
		        DbContext.Topics.Update(topic);
		        DbContext.SaveChanges();
		        command.Id = topic.Id;
		    }
		}

       
      
    }
}