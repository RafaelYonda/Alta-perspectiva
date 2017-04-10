﻿namespace Questions.Command
{
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;
    using DbContext;
    using System.Diagnostics;
    using System.Linq;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Routing;
    using Domain;
    using System.Collections.Generic;
    using System;

    /// <summary>
    ///     Create new inactive user
    /// </summary>
    /// 

    public class AddQuestionCommandHandler : EFCommandHandlerBase<AddQuestionCommand, QuestionsDbContext>,
        ICommandHandler<AddQuestionCommand>
    {
        public AddQuestionCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddQuestionCommand command)
        {
            Debug.WriteLine("AddQuestionCommandHandler executed");

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
            question.IsDirectQuestion = false;
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
            if (command.TopicId.HasValue)
            {
                QuestionTopic questionTopic = new QuestionTopic();
                questionTopic.QuestionId = question.Id;
                questionTopic.TopicId = command.TopicId.Value;

                DbContext.QuestionTopics.Add(questionTopic);
            }
            if (command.LevelId.HasValue)
            {
                QuestionLevel questionLevel = new QuestionLevel();
                questionLevel.QuestionId = question.Id;
                questionLevel.LevelId = command.LevelId.Value;

                DbContext.QuestionLevels.Add(questionLevel);
            }


            DbContext.SaveChanges();

            command.Id = question.Id;
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