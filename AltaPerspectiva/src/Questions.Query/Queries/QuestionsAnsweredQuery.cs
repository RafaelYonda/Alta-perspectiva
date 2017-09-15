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

        public Task<Answer> AnswerById(Guid answerId)
        {
            var z= DbContext.
                                Answers.FirstOrDefaultAsync(i=>i.Id==answerId);
            return z;
        }

        public async Task<IEnumerable<Question>> Execute(Guid CategoryId , int pageNo , int pageSize = 15)
        {
            var answeredQuestions = DbContext
                                            .Answers
                                            .Where(q => q.QuestionId != null && q.IsDeleted != true && q.IsDrafted !=true )
                                            .Select(x => x.QuestionId.Value).ToList();

            Guid general = new Guid("7639B416-8D1C-4119-B58E-143CB860E8A6");
            if (general == CategoryId)
            {
                return await DbContext.
                                Questions
                                    .Include(q => q.Answers)
                                        .ThenInclude(a => a.Likes)
                                    .Include(q => q.Categories)
                                        .ThenInclude(c => c.Category)
                                        .Where(q => answeredQuestions.Contains(q.Id)
                                                && q.Categories.Any(x =>  x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                    .Skip(pageNo * pageSize)
                                                    .Take(pageSize)
                                                        .ToListAsync();
            }
            return await DbContext.
                                Questions
                                    .Include(q => q.Answers)
                                        .ThenInclude(a => a.Likes)
                                    .Include(q=>q.Categories)
                                        .ThenInclude(c=>c.Category)
                                        .Where(q=>answeredQuestions.Contains(q.Id) 
                                                && q.Categories.Any(x => x.CategoryId == CategoryId && x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                    .Skip(pageNo * pageSize)
                                                    .Take(pageSize)
                                                        .ToListAsync();
        }
        

        public async Task<IEnumerable<Question>> ExecuteByUserId(Guid userId)
        {
            var answeredQuestions = DbContext
                                           .Answers
                                           .Where(q => q.QuestionId != null && q.IsDeleted != true &&q.UserId==userId)
                                           .Select(x => x.QuestionId.Value).ToList();
            return await DbContext.
                                Questions
                                    .Include(q => q.Answers)
                                        .ThenInclude(a => a.Likes)
                                    .Include(q => q.Categories)
                                        .ThenInclude(c => c.Category)
                                        .Where(q => answeredQuestions.Contains(q.Id)
                                                && q.Categories.Any(x =>  x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                   // .Take(20)
                                                        .ToListAsync();
        }

        public async Task<int> QuestionsAnsweredCount(Guid CategoryId)
        {
            var answeredQuestions = DbContext
                                           .Answers
                                           .Where(q => q.QuestionId != null && q.IsDeleted != true && q.IsDrafted != true)
                                           .Select(x => x.QuestionId.Value).ToList();

            Guid general = new Guid("7639B416-8D1C-4119-B58E-143CB860E8A6");
            if (general == CategoryId)
            {
                return await DbContext.
                                Questions
                                    .Include(q => q.Answers)
                                        .ThenInclude(a => a.Likes)
                                    .Include(q => q.Categories)
                                        .ThenInclude(c => c.Category)
                                        .Where(q => answeredQuestions.Contains(q.Id)
                                                && q.Categories.Any(x => x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                        .CountAsync();
            }
            return await DbContext.
                                Questions
                                    .Include(q => q.Answers)
                                        .ThenInclude(a => a.Likes)
                                    .Include(q => q.Categories)
                                        .ThenInclude(c => c.Category)
                                        .Where(q => answeredQuestions.Contains(q.Id)
                                                && q.Categories.Any(x => x.CategoryId == CategoryId && x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                            .OrderByDescending(c => c.CreatedOn.Value.Date)
                                                .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                     .CountAsync();
        }
    }
    
}