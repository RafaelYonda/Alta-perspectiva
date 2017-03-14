using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System;
using System.Threading.Tasks;

namespace Questions.Query
{
	public class KeywordsQuery : EFQueryBase<QuestionsQueryDbContext>, IKeywordsQuery
    {
		public KeywordsQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public IEnumerable<Keyword> Execute(Guid categoryId)
        {
            return DbContext.Keywords.Include(c=>c.Category).Where(c=>c.CategoryId == categoryId ); 
        }

        public bool IsKeywordExists(string kewirdName)
        {
            return DbContext.Keywords.Where(x => x.Text == kewirdName).Any();
        }
    }
}