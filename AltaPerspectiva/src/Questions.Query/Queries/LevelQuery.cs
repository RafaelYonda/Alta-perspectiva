﻿using System.Collections.Generic;
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

        public async Task<List<Level>> GetAllLevel()
        {
            return await DbContext.Levels.OrderBy(x=>x.LevelRank).ToListAsync();
        }

        public List<Level> GetAllLevels()
        {
            return DbContext.Levels.OrderBy(x => x.LevelRank).ToList();
        }

        public Level GetLevelByLevelId(Guid levelId)
        {
            return DbContext.Levels.FirstOrDefault(x => x.Id == levelId);
        }
    }
}