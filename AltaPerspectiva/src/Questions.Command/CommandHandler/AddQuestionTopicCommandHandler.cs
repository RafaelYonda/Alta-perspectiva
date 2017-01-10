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
    public class AddQuestionTopicCommandHandler : EFCommandHandlerBase<AddQuestionTopicCommand, QuestionsDbContext>,
        ICommandHandler<AddQuestionTopicCommand>
    {
        public AddQuestionTopicCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddQuestionTopicCommand command)
        {
            Debug.WriteLine("AddAnswerCommandHandler executed");

            QuestionTopic questionTopic=new QuestionTopic();
            questionTopic.QuestionId = command.QuestionId;
            questionTopic.TopicId = command.TopicId;

            DbContext.QuestionTopics.Add(questionTopic);
            DbContext.SaveChanges();
        }
    }

}
