using AltaPerspectiva.Core;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionsByUserFollowingQuery : IQuery
    {
        Task<IEnumerable<Question>> Execute(Guid UserId);
        Task<IEnumerable<Question>> GetQuestionByTopciNCategoryId(Guid UserId, Guid topicId, Guid categoryId);
    }
}