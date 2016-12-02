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
	public class CategoryMatchKeywordQuery : EFQueryBase<QuestionsQueryDbContext>, ICategoryMatchKeywordQuery
    {
		public CategoryMatchKeywordQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public IEnumerable<Category> Execute(string[] keywords)
        {
            //return DbContext.Keywords.Include(k=>k.Category).Where(c=>c.Text.Contains(keywords.Any()));

            return DbContext.Keywords.Where(k=>keywords.Contains(k.Text)).Select(k=>k.Category).ToList();
        }
    }
}