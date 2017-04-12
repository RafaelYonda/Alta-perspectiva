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
using AltaPerspectiva.Core.SpecificationPattern;

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
            return await DbContext.Questions
                                  .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                  .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                  .Include(q => q.Categories)
                                      .ThenInclude(c => c.Category)
                                  .Include(q => q.Comments)
                                  .Include(q => q.Likes)
                                  .Include(q => q.QuestionLevels)
                                  .Include(q => q.QuestionTopics)
                                  .Where(q=> q.IsDeleted != true && q.IsDirectQuestion == false)
                                      .OrderByDescending(c => c.CreatedOn.Value.Date)
                                          .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                              .Take(20)
                                                  .ToListAsync();
        }
        public  async Task<IEnumerable<Question>> ExecuteDirectQuestion(Guid questionAskedToUser)
        {
            List<Guid> questionIds =
                DbContext.DirectQuestions.Where(x => x.QuestionAskedToUser == questionAskedToUser)
                    .Select(x => x.QuestionId)
                    .ToList();

            return await DbContext.Questions
                                 .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                 .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                 .Include(q => q.Categories)
                                     .ThenInclude(c => c.Category)
                                 .Include(q => q.Comments)
                                 .Include(q => q.Likes)
                                 .Include(q => q.QuestionLevels)
                                 .Include(q => q.QuestionTopics)
                                 .Where(q => q.IsDeleted != true && q.IsDirectQuestion == true && questionIds.Any(a=>a==q.Id))
                                     .OrderByDescending(c => c.CreatedOn.Value.Date)
                                         .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                             .Take(20)
                                                 .ToListAsync();
        }
        public async Task<IEnumerable<Question>> ExecuteByUserId(Guid userId)
        {
            return await DbContext.Questions
                                  .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                  .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                  .Include(q => q.Categories)
                                      .ThenInclude(c => c.Category)
                                  .Include(q => q.Comments)
                                  .Include(q => q.Likes)
                                  .Include(q => q.QuestionLevels)
                                  .Include(q => q.QuestionTopics)
                                  .Where(q => q.IsDeleted != true && q.UserId==userId && q.IsDirectQuestion == false)
                                      .OrderByDescending(c => c.CreatedOn.Value.Date)
                                          .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                              //.Take(20)
                                                  .ToListAsync();
        }
        public async Task<IEnumerable<Question>> GetTopFiveQuestion()
        {


            return await DbContext.Questions.Where(q => q.IsDeleted != true && q.IsDirectQuestion == false).OrderByDescending(x => x.ViewCount).Take(5).ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetTopFiveQuestionByCategoryId(Guid categoryId)
        {
            return await DbContext.Questions.Where(q => q.Categories.Any(x => x.CategoryId == categoryId && x.QuestionId ==q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false).OrderByDescending(x => x.ViewCount).Take(5).ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetQuestionByTopciNCategoryId(Guid topicId, Guid categoryId)
        {
            return
                await DbContext.Questions
                .Where(q => q.QuestionTopics.Any(qt => qt.QuestionId == q.Id && qt.Topic.Id == topicId && qt.Topic.CategoryId == categoryId) && q.IsDeleted != true && q.IsDirectQuestion == false)

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
            return await DbContext.Questions.Where(q=>q.Bookmarks.Any(u=>u.UserId==userId) && q.IsDeleted != true && q.IsDirectQuestion == false)
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
            return await DbContext.Questions.Where(q=>q.Categories.Any(cc=>cc.CategoryId==categoryId) && q.IsDeleted != true && q.IsDirectQuestion == false)
                
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
            return await DbContext.Questions.Where(q => q.Categories.Any(cc => cc.CategoryId == categoryId) && q.IsDeleted != true && q.IsDirectQuestion == false)

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

        /*Filter query*/
        public async Task<IEnumerable<Question>> GetLatestQuestion(Guid UserId, Guid categoryId)
        {
            return await DbContext.Questions
                                 .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                 .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                 .Include(q => q.Categories)
                                     .ThenInclude(c => c.Category)
                                 .Include(q => q.Comments)
                                 .Include(q => q.Likes)
                                 .Include(q => q.QuestionLevels)
                                 .Include(q => q.QuestionTopics)
                                 .Where(q=>q.Categories.Any(z=>z.CategoryId==categoryId) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                     .OrderByDescending(c => c.CreatedOn.Value.Date)
                                         .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                             .Take(20)
                                                 .ToListAsync();
        }

        public IEnumerable<Question> DraftedQuestionAnswers(Guid userId)
        {
            return DbContext.Questions
                                  .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                  .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                  .Include(q => q.Categories)
                                      .ThenInclude(c => c.Category)
                                  .Include(q => q.Comments)
                                  .Include(q => q.Likes)
                                  .Include(q => q.QuestionLevels)
                                  .Include(q => q.QuestionTopics)
                               .Where(x=>x.Answers.Any(y=>y.IsDrafted!=null &&y.UserId==userId))
                                 .OrderByDescending(c => c.CreatedOn.Value.Date)
                                       .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                          .ToList();
        }

        public Question QuestionForEmail(Guid questionId)
        {
            return DbContext.Questions.FirstOrDefault(x => x.Id == questionId);
        }

        public async Task<IEnumerable<Question>> GetSharedQuestion(Guid userId)
        {
            List<Guid> sharedQuestions =
                DbContext.ShareQuestions.Where(x => x.UserId == userId).Select(x => x.QuestionId).ToList();
            return await DbContext.Questions.Where(q => sharedQuestions.Contains(q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
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

        public async Task<IEnumerable<Question>> Filter(Specification<Question> specification)
        {
            return await DbContext.Questions
                              .Include(a => a.Answers).ThenInclude(a => a.Likes)
                              .Include(a => a.Answers).ThenInclude(a => a.Comments)
                              .Include(q => q.Categories)
                                  .ThenInclude(c => c.Category)
                              .Include(q => q.Comments)
                              .Include(q => q.Likes)
                              .Include(q => q.QuestionLevels)
                              .Include(q => q.QuestionTopics)
                              // .Where(x => x.Categories.Any(c => c.CategoryId == null))
                              .Where(specification.ToExpression())
                                  .OrderByDescending(c => c.CreatedOn.Value.Date)
                                      .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                          .Take(20)
                                              .ToListAsync();
        }
    }
}