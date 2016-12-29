using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;

namespace Questions.Query
{
	public class QuestionsQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsQuery
    {
		public QuestionsQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Question>> Execute()
        {
              return await DbContext.Questions
                                    .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                    .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                    .Include(q=>q.Categories)
                                        .ThenInclude(c=>c.Category)
                                    .Include(q=>q.Comments)
                                    .Include(q=>q.Likes)
                                        .OrderByDescending(c => c.CreatedOn.Value.Date)
                                            .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                .Take(20)
                                                    .ToListAsync();
        }
    }
}