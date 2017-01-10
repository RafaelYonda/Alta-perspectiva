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
	public class LevelQuery : EFQueryBase<QuestionsQueryDbContext>, ILevelQuery
    {
		public LevelQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public List<Level> GetAllLevel()
        {
            return DbContext.Levels.ToList();
        }
    }
}