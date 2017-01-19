using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Questions.Domain;
using Questions.Query.DbContext;

namespace Questions.Query.Queries
{
    public class GetQuestionByTopicId : EFQueryBase<QuestionsQueryDbContext>, IGetQuestionByTopicId
    {
        public GetQuestionByTopicId(QuestionsQueryDbContext context)
            : base(context)
        {
        }

        public async Task<IEnumerable<Question>> Execute(Guid id)
        {
            //var x = DbContext.QuestionCategories.Include(qc=>qc.Category).Where(x=>x.CategoryId == id).Select(q=>q.Question).Include(q=>q.Categories).ToList()

            return await DbContext.Questions
                .Include(a => a.Answers)
                .ThenInclude(a => a.Likes)
                .Include(q => q.QuestionTopics)
                .ThenInclude(c => c.Topic)
                .Include(q => q.Comments)
                .Where(q => q.QuestionTopics.Any(x => x.TopicId == id && x.QuestionId == q.Id))
                .OrderByDescending(c => c.CreatedOn.Value.Date)
                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                .Take(10)
                //.Select(x=> new Question { Title = x.Title,UserId= x.UserId,Categories = x.Categories})
                .ToListAsync();
        }
    }
}
