﻿using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;
using System;

namespace Questions.Query
{
	public class QuestionsAnsweredQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsAnsweredQuery
    {
		public QuestionsAnsweredQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Question>> Execute(Guid CategoryId)
        {
            var answeredQuestions = DbContext
                                            .Answers
                                            .Where(a => a.QuestionId != null)
                                            .Select(x => x.QuestionId.Value).ToList();
            return await DbContext.
                                Questions
                                    .Include(q=>q.Categories)
                                        .ThenInclude(c=>c.Category)
                                        .Where(q=>answeredQuestions.Contains(q.Id) 
                                                && q.Categories.Any(x => x.CategoryId == CategoryId && x.QuestionId == q.Id))
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                    .Take(20)
                                                        .ToListAsync();
        }
    }
}