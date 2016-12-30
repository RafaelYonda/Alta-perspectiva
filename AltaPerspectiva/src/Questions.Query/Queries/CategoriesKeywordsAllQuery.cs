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
	public class CategoriesKeywordsAllQuery : EFQueryBase<QuestionsQueryDbContext>, ICategoriesKeywordsAllQuery
    {
		public CategoriesKeywordsAllQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public IEnumerable<Category> Execute()
        {
            return DbContext.Categories.Include(x => x.Keywords).ToList(); ; 
        }
    }
}