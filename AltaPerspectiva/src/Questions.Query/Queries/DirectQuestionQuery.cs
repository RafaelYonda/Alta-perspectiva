using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using Questions.Query.Intefaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Query.Queries
{
    public class DirectQuestionQuery: EFQueryBase<QuestionsQueryDbContext>, IDirectQuestionQuery
    {
        public DirectQuestionQuery(QuestionsQueryDbContext context)
            : base(context)
        {
        }

        public Guid GetDirectQuestionUser(Guid questionId)
        {
            return  DbContext.DirectQuestions.Where(x => x.QuestionId == questionId)
                .Select(x => x.QuestionAskedToUser)
                .FirstOrDefault();
        }
    }
    
}
