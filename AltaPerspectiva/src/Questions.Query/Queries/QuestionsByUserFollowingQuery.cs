using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;

namespace Questions.Query
{
	public class QuestionsByUserFollowingQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsByUserFollowingQuery
    {
		public QuestionsByUserFollowingQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Question>> Execute(Guid UserId)
        {            
            var categories = DbContext.CategoryFollowers.Where(c => c.UserId == UserId).Select(x=>x.CategoryId).ToList();   

            return await DbContext.
                                Questions
                                    .Include(q=>q.Categories)
                                        .ThenInclude(c=>c.Category)
                                            .Where(q => q.Categories.Any(x => categories.Contains( x.CategoryId) || x.Category.Sequence == 1))
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                    .Take(20)
                                                        .ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetQuestionByTopciNCategoryId(Guid UserId,Guid topicId, Guid categoryId)
        {
            var categories = DbContext.CategoryFollowers.Where(c => c.UserId == UserId).Select(x => x.CategoryId).ToList();

            return await DbContext.
                                Questions
                                .Where(qt => qt.QuestionTopics.Any(q => q.QuestionId == qt.Id && q.Topic.Id == topicId && q.Topic.CategoryId == categoryId))
                                    .Include(q => q.Categories)
                                        .ThenInclude(c => c.Category)
                                            .Where(q => q.Categories.Any(x => categories.Contains(x.CategoryId) || x.Category.Sequence == 1))
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                    .Take(20)
                                                        .ToListAsync();
        }
    }
}