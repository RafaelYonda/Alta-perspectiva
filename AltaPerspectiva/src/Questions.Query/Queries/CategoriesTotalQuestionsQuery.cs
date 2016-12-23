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
	public class CategoriesTotalQuestionsQuery : EFQueryBase<QuestionsQueryDbContext>, ICategoriesTotalQuestionsQuery
    {
		public CategoriesTotalQuestionsQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public int Execute(Guid CategoryId)
        {
            return DbContext.QuestionCategories.Count(q=>q.CategoryId == CategoryId); 
        }
    }
}