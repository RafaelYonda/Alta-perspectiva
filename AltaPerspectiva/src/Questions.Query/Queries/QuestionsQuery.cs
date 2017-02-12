﻿using System;
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
            return await DbContext.Questions
                                  .Include(a => a.Answers).ThenInclude(a => a.Likes)
                                  .Include(a => a.Answers).ThenInclude(a => a.Comments)
                                  .Include(q => q.Categories)
                                      .ThenInclude(c => c.Category)
                                  .Include(q => q.Comments)
                                  .Include(q => q.Likes)
                                  .Include(q => q.QuestionLevels)
                                  .Include(q => q.QuestionTopics)
                                  .Where(q=> q.IsDeleted != true)
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
                                  .Where(q => q.IsDeleted != true && q.UserId==userId)
                                      .OrderByDescending(c => c.CreatedOn.Value.Date)
                                          .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                              .Take(20)
                                                  .ToListAsync();
        }
        public async Task<IEnumerable<Question>> GetTopFiveQuestion()
        {


            return await DbContext.Questions.Where(q => q.IsDeleted != true).OrderByDescending(x => x.ViewCount).Take(5).ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetTopFiveQuestionByCategoryId(Guid categoryId)
        {
            return await DbContext.Questions.Where(q => q.Categories.Any(x => x.CategoryId == categoryId && x.QuestionId ==q.Id) && q.IsDeleted != true).OrderByDescending(x => x.ViewCount).Take(5).ToListAsync();
        }

        public async Task<IEnumerable<Question>> GetQuestionByTopciNCategoryId(Guid topicId, Guid categoryId)
        {
            return
                await DbContext.Questions
                .Where(q => q.QuestionTopics.Any(qt => qt.QuestionId == q.Id && qt.Topic.Id == topicId && qt.Topic.CategoryId == categoryId) && q.IsDeleted != true)

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
            return await DbContext.Questions.Where(q=>q.Bookmarks.Any(u=>u.UserId==userId) && q.IsDeleted != true)
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
            return await DbContext.Questions.Where(q=>q.Categories.Any(cc=>cc.CategoryId==categoryId) && q.IsDeleted != true)
                
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
            return await DbContext.Questions.Where(q => q.Categories.Any(cc => cc.CategoryId == categoryId) && q.IsDeleted != true)

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
        public async Task<IEnumerable<Question>> FilterbyCategoryTopicandlevel(Guid categoryId, Guid topicId, Guid levelId)
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
                                  .Where(q=>q.Categories.Any(c=>c.CategoryId==categoryId) &&q.QuestionTopics.Any(qt=>qt.TopicId==topicId) &&q.QuestionLevels.Any(ql=>ql.LevelId==levelId) && q.IsDeleted != true)
                                      .OrderByDescending(c => c.CreatedOn.Value.Date)
                                          .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                              .Take(20)
                                                  .ToListAsync();
        }

        public async Task<IEnumerable<Question>> FilterbycategoryANDTOPIC(Guid categoryId, Guid topicId)
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
                                  .Where(q => q.Categories.Any(c => c.CategoryId == categoryId) && q.QuestionTopics.Any(qt => qt.TopicId == topicId) && q.IsDeleted != true)
                                      .OrderByDescending(c => c.CreatedOn.Value.Date)
                                          .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                              .Take(20)
                                                  .ToListAsync();
        }

        public async Task<IEnumerable<Question>> Filterbycategoryandlevel(Guid categoryId, Guid levelId)
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
                                 .Where(q => q.Categories.Any(c => c.CategoryId == categoryId)  && q.QuestionLevels.Any(ql => ql.LevelId == levelId) && q.IsDeleted != true)
                                     .OrderByDescending(c => c.CreatedOn.Value.Date)
                                         .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                             .Take(20)
                                                 .ToListAsync();
        }

        public async Task<IEnumerable<Question>> FilterbyTopicAndLevel(Guid topicId, Guid levelId)
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
                                .Where(x =>  x.QuestionTopics.Any(qt => qt.TopicId == topicId) && x.QuestionLevels.Any(ql => ql.LevelId == levelId))
                                    .OrderByDescending(c => c.CreatedOn.Value.Date)
                                        .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                            .Take(20)
                                                .ToListAsync();
        }

        public async Task<IEnumerable<Question>> Filterbycategoryonly(Guid categoryId)
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
                                .Where(q => q.Categories.Any(c => c.CategoryId == categoryId) && q.IsDeleted != true)
                                    .OrderByDescending(c => c.CreatedOn.Value.Date)
                                        .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                            .Take(20)
                                                .ToListAsync();
        }

        public async Task<IEnumerable<Question>> Filteredbytopiconly(Guid topicId)
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
                                .Where(q => q.QuestionTopics.Any(qt => qt.TopicId == topicId) && q.IsDeleted != true)
                                    .OrderByDescending(c => c.CreatedOn.Value.Date)
                                        .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                            .Take(20)
                                                .ToListAsync();
        }

        public async Task<IEnumerable<Question>> Filteredbylevelonly(Guid levelId)
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
                                .Where(q => q.QuestionLevels.Any(ql => ql.LevelId == levelId) && q.IsDeleted != true)
                                    .OrderByDescending(c => c.CreatedOn.Value.Date)
                                        .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                            .Take(20)
                                                .ToListAsync();
        }

        public async Task<IEnumerable<Question>> FilteredGeneralCategoryonly()
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
                                .Where(q =>q.IsDeleted != true)
                                    .OrderByDescending(c => c.CreatedOn.Value.Date)
                                        .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                            .Take(20)
                                                .ToListAsync();
        }

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
                                 .Where(q=>q.Categories.Any(z=>z.CategoryId==categoryId) && q.IsDeleted != true)
                                     .OrderByDescending(c => c.CreatedOn.Value.Date)
                                         .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                             .Take(20)
                                                 .ToListAsync();
        }
    }
}