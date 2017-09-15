using AltaPerspectiva.Core;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionsAnsweredQuery : IQuery
    {
        Task<IEnumerable<Question>> Execute(Guid CategoryId , int pageNo = 0 ,int pageSize =15);
        Task<int> QuestionsAnsweredCount(Guid CategoryId);
        Task<IEnumerable<Question>> ExecuteByUserId(Guid userId);
        Task<Answer> AnswerById(Guid answerId);
    }
}