using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;

namespace Questions.Query
{
	public class QuestionsByCategoryIdQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsByCategoryIdQuery
    {
		public QuestionsByCategoryIdQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Question>> Execute(Guid id)
        {
            //var x = DbContext.QuestionCategories.Include(qc=>qc.Category).Where(x=>x.CategoryId == id).Select(q=>q.Question).Include(q=>q.Categories).ToList()

            return await DbContext.
                    Questions
                    .Include(q => q.Categories)
                        .ThenInclude(c => c.Category)
                    .Where(q => q.Categories.Any(x => x.CategoryId == id && x.QuestionId == q.Id))
                    .OrderByDescending(c => c.CreatedOn.Value.Date)
                         .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                    .Take(10)
                    //.Select(x=> new Question { Title = x.Title,UserId= x.UserId,Categories = x.Categories})
                    .ToListAsync();
        }
    }
}