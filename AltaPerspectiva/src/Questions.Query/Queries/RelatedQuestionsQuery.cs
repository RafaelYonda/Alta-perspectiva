using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;

namespace Questions.Query
{
    public class RelatedQuestionsQuery : EFQueryBase<QuestionsQueryDbContext>, IRelatedQuestionsQuery
    {
        public RelatedQuestionsQuery(QuestionsQueryDbContext context) 
            : base(context) {
        }

        public async Task<IEnumerable<Question>> Execute(Guid id)
        {
            if (id.ToString().Length < 2)
                return null;

            IEnumerable<QuestionCategory> CategoryList = DbContext.QuestionCategories.Where(x => x.QuestionId == id )
                .ToList<QuestionCategory>();


            return await DbContext.
                    Questions
                    .Include(q => q.Categories)
                    .Where(q => q.Categories.Any(x => CategoryList.Any(y => x.CategoryId == y.CategoryId)) && q.Id != id && q.IsDeleted != true)
                    .OrderByDescending(c => c.CreatedOn.Value.Date)
                         .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                    .Take(5)
                    .ToListAsync();

         

        }

    }
}
