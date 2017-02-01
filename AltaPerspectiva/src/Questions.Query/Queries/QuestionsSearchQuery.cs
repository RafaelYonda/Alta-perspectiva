using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;

namespace Questions.Query
{
	public class QuestionsSearchQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsSearchQuery
    {
		public QuestionsSearchQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Question>> Execute()
        {
            return await DbContext.Questions.Where(q=> q.IsDeleted != true)                                  
                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                    .Take(100)
                                        .ToListAsync();


        }
    }
}