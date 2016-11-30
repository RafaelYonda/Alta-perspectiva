namespace Questions.Command
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
            question.Body = command.Body;
            question.UserId = command.UserId;
            question.CreatedOn = command.Date;
            question.CreatedBy = command.UserId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : command.UserId;
            question.DTS = command.Date;

            var keywords = question.Title.TrimEnd('?').Split(' ');
            var ids = GetMatchedCategories(keywords);
            

            foreach ( var id in ids)
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
            DbContext.SaveChanges();

			command.Id = question.Id;
		}

        private List<Guid> GetMatchedCategories(string[] keywords)
        {
            //return DbContext.Keywords.Include(k=>k.Category).Where(c=>c.Text.Contains(keywords.Any()));

            return (from p in DbContext.Keywords
                    where keywords.Any(val => p.Text.Contains(val))
                    select  p.Category.Id)
                                .Distinct()
                                .ToList();
        }
    }
}