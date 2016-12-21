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
	public class CategoriesTotalUsersQuery : EFQueryBase<QuestionsQueryDbContext>, ICategoriesTotalUsersQuery
    {
		public CategoriesTotalUsersQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public int Execute(Guid CategoryId)
        {
            return DbContext
                   .CategoryFollowers
                   .Where(c=>c.CategoryId == CategoryId)
                   .Select(x=>x.UserId)
                   .Distinct()
                   .Count();
        }
    }
}