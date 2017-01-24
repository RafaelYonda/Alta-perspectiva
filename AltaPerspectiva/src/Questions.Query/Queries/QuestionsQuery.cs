using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;

namespace Questions.Query
{
    public class QuestionsQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsQuery
    {
        public QuestionsQuery(QuestionsQueryDbContext context)
            : base(context)
        {
        }

        public async Task<IEnumerable<Question>> Execute()
        {
            return await DbContext.Questions.Include(ql=>ql.QuestionLevels)
                                  .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                  .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                  .Include(q => q.Categories)
                                      .ThenInclude(c => c.Category)
                                  .Include(q => q.Comments)
                                  .Include(q => q.Likes)
                                  .Include(q => q.QuestionLevels)
                                  .Include(q => q.QuestionTopics)
                                      .OrderByDescending(c => c.CreatedOn.Value.Date)
                                          .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                              .Take(20)
                                                  .ToListAsync();
        }
        public async Task<IEnumerable<Question>> GetTopFiveQuestion()
        {


            return await DbContext.Questions.OrderByDescending(x => x.ViewCount).Take(5).ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetTopFiveQuestionByCategoryId(Guid categoryId)
        {
            return await DbContext.Questions.Where(q => q.Categories.Any(x => x.CategoryId == categoryId && x.QuestionId == q.Id)).OrderByDescending(x => x.ViewCount).Take(5).ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetQuestionByTopciNCategoryId(Guid topicId, Guid categoryId)
        {
            return
                await DbContext.Questions
                .Where(qt => qt.QuestionTopics.Any(q => q.QuestionId == qt.Id && q.Topic.Id == topicId && q.Topic.CategoryId == categoryId))

                .Include(a => a.Answers).ThenInclude(a => a.Likes)
                .Include(a => a.Answers).ThenInclude(a => a.Comments)
                .Include(q => q.Categories).ThenInclude(c => c.Category)
                .Include(q => q.Comments)
                .Include(q => q.Likes)
                .Include(q => q.QuestionLevels)
                .Include(q => q.QuestionTopics)
                .OrderByDescending(c => c.CreatedOn.Value.Date)
                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                .Take(20)

                .ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetBookmark(Guid userId)
        {
            return await DbContext.Questions.Where(x=>x.Bookmarks.Any(u=>u.UserId==userId))
                                   .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                   .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                   .Include(q => q.Categories)
                                       .ThenInclude(c => c.Category)
                                   .Include(q => q.Comments)
                                   .Include(q => q.Likes)
                                   .Include(q => q.QuestionLevels)
                                   .Include(q => q.QuestionTopics)
                                       .OrderByDescending(c => c.CreatedOn.Value.Date)
                                           .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                               .Take(20)
                                                   .ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetMoreViewedQuestionByViewCount(Guid categoryId)
        {
            return await DbContext.Questions.Where(x=>x.Categories.Any(cc=>cc.CategoryId==categoryId))
                
                                  .Include(ql => ql.QuestionLevels)
                                 .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                 .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                 .Include(q => q.Categories)
                                     .ThenInclude(c => c.Category)
                                 .Include(q => q.Comments)
                                 .Include(q => q.Likes)
                                 .Include(q => q.QuestionLevels)
                                 .Include(q => q.QuestionTopics)
                                 .OrderByDescending(d=>d.ViewCount)
                                    
                                             .Take(20)
                                                 .ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetBestQuestionbyTotalLike(Guid categoryId)
        {
            return await DbContext.Questions.Where(x => x.Categories.Any(cc => cc.CategoryId == categoryId))

                                 .Include(ql => ql.QuestionLevels)
                                .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                .Include(q => q.Categories)
                                    .ThenInclude(c => c.Category)
                                .Include(q => q.Comments)
                                .Include(q => q.Likes)
                                .Include(q => q.QuestionLevels)
                                .Include(q => q.QuestionTopics)
                                .OrderByDescending(y => y.Likes.Count)

                                            .Take(20)
                                                .ToListAsync();
        }
    }
}