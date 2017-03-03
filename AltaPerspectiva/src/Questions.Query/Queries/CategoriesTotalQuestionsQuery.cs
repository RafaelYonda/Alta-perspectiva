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
    public class CategoriesTotalQuestionsQuery : EFQueryBase<QuestionsQueryDbContext>, ICategoriesTotalQuestionsQuery
    {
        public CategoriesTotalQuestionsQuery(QuestionsQueryDbContext context)
            : base(context)
        {
        }

        public int Execute(Guid CategoryId)
        {
            return DbContext.QuestionCategories.Count(q => q.CategoryId == CategoryId);
        }

        public int TotalAnsweredQuestionCount(Guid categoryId)
        {
            return DbContext.Questions
                .Include(x => x.Answers)
                .Where(x => x.Answers.Count > 0
                && x.Categories.Any(qc => qc.CategoryId == categoryId)).Count();
        }
        public int TotalUnAnsweredQuestionCount(Guid categoryId)
        {
            var answeredQuestions = DbContext
                                            .Answers
                                            .Where(q => q.QuestionId != null && q.IsDeleted != true)
                                            .Select(x => x.QuestionId.Value).ToList();
            return DbContext.
                                Questions
                                    .Include(q => q.Answers)
                                        .ThenInclude(a => a.Likes)
                                    .Include(q => q.Categories)
                                        .ThenInclude(c => c.Category)
                                        .Where(q => answeredQuestions.Contains(q.Id)
                                                && q.Categories.Any(x => x.CategoryId == categoryId && x.QuestionId == q.Id) && q.IsDeleted != true && q.IsDirectQuestion == false)
                                            //.OrderByDescending(c => c.CreatedOn.Value.Date)
                                              //  .ThenByDescending(c => c.CreatedOn.Value.TimeOfDay)
                                                  //  .Take(20)
                                                        .Count();
        }
    }
}