using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;

namespace Questions.Query
{
	public class CategoriesQuery : EFQueryBase<QuestionsQueryDbContext>, ICategoriesQuery
    {
		public CategoriesQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public IEnumerable<Category> Execute()
        {
            return DbContext.Categories.OrderBy(x=>x.Sequence); 
        }
    }
}