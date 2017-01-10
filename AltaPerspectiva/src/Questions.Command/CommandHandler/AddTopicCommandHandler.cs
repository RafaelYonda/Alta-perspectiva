using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.DbContext;
using Questions.Domain;

namespace Questions.Command.CommandHandler
{
    public class AddTopicCommandHandler : EFCommandHandlerBase<AddTopicCommand, QuestionsDbContext>,
        ICommandHandler<AddTopicCommand>
    {
        public AddTopicCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddTopicCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

            Topic topic=new Topic();
            topic.GenerateNewIdentity();
            topic.TopicName = command.TopicName;
            topic.CategoryId = command.CategoryId;

            DbContext.Topics.Add(topic);
            DbContext.SaveChanges();

            command.Id = topic.Id;
        }
    }

}
