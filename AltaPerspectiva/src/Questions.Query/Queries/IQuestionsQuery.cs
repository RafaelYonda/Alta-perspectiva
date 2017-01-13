using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionsQuery:IQuery
    {
        Task<IEnumerable<Question>> Execute();
        Task<IEnumerable<Question>> GetTopFiveQuestion();

        Task<IEnumerable<Question>> GetTopFiveQuestionByCategoryId(Guid categoryId);
    }
}