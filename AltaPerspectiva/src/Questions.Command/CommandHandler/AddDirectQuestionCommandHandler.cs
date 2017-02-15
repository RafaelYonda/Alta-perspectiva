using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.Commands;
using Questions.Command.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questions.Domain;

namespace Questions.Command.CommandHandler
{
    public class AddDirectQuestionCommandHandler : EFCommandHandlerBase<DirectQuestionCommand, QuestionsDbContext>,
        ICommandHandler<DirectQuestionCommand>
    {
        public AddDirectQuestionCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
        }

        public override void Execute(DirectQuestionCommand command)
        {
            // 
            Question question = new Question();
            question.GenerateNewIdentity();
            // create new answers. generate id then add to questions

            question.Title = command.Title;
            question.Body = command.Body ?? "";
            question.UserId = command.UserId;
            //IsAnonums added
            question.IsAnonymous = command.IsAnonymous;
            //DirectQuestionAdded
            question.IsDirectQuestion = command.IsDirectQuestion;
            question.CreatedOn = command.Date;
            question.CreatedBy = command.UserId;
            question.DTS = command.Date;

            var keywords = question.Title.Trim('?', ',', '.', ':').Split(' ');
            var ids = GetMatchedCategories(keywords);


            foreach (var id in ids)
            {
                if (!command.CategoryIds.Contains(id))
                {
                    command.CategoryIds.Add(id);
                }

            }

            foreach (var cid in command.CategoryIds)
            {
                QuestionCategory qc = new QuestionCategory();
                qc.CategoryId = cid;
                qc.QuestionId = question.Id;
                question.Categories.Add(qc);
            }

            DbContext.Questions.Add(question);


            /*Topics and Level added s*/
            if (command.TopicId != null)
            {
                QuestionTopic questionTopic = new QuestionTopic();
                questionTopic.QuestionId = question.Id;
                questionTopic.TopicId = command.TopicId;

                DbContext.QuestionTopics.Add(questionTopic);
            }
            if (command.LevelId != null)
            {
                QuestionLevel questionLevel = new QuestionLevel();
                questionLevel.QuestionId = question.Id;
                questionLevel.LevelId = command.LevelId;

                DbContext.QuestionLevels.Add(questionLevel);
            }


            DbContext.SaveChanges();

            command.Id = question.Id;


            DirectQuestion directQuestion=new DirectQuestion();
            directQuestion.QuestionId = question.Id;
            directQuestion.UserId = command.UserId;

            DbContext.DirectQuestions.Add(directQuestion);
            DbContext.SaveChanges();
            //command.Id = directQuestion.Id;
        }
        private List<Guid> GetMatchedCategories(string[] keywords)
        {
            return DbContext.Keywords
                .Where(k => keywords.Contains(k.Text))
                    .Select(k => k.CategoryId)
                        .ToList();
        }
    }
}
