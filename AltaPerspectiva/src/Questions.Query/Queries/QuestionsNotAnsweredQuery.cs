using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;
using System;

namespace Questions.Query
{
	public class QuestionsNotAnsweredQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsNotAnsweredQuery
    {
		public QuestionsNotAnsweredQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Question>> Execute(Guid CategoryId)
        {
            var answeredQuestions = DbContext
                                            .Answers
                                            .Where(a => a.QuestionId != null && a.IsDeleted != true && a.IsDrafted != true)
                                            .Select(x => x.QuestionId.Value).ToList();
            Guid general=new Guid("7639B416-8D1C-4119-B58E-143CB860E8A6");
            if (general == CategoryId)
            {
                return await DbContext.
                            Questions
                                .Include(q => q.Categories)
                                    .ThenInclude(c => c.Category)
                                    .Where(q => !answeredQuestions.Contains(q.Id)
                                            && q.Categories.Any(x =>x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                        .OrderByDescending(c => c.CreatedOn.Value.Date)
                                            .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                .Take(20)
                                                    .ToListAsync();
            }
            return await DbContext.
                                Questions
                                    .Include(q=>q.Categories)
                                        .ThenInclude(c=>c.Category)
                                        .Where(q=>!answeredQuestions.Contains(q.Id) 
                                                && q.Categories.Any(x => x.CategoryId == CategoryId && x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                    .Take(20)
                                                        .ToListAsync();
        }
    }
}