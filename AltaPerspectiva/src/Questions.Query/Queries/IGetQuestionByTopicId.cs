using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Questions.Domain;

namespace Questions.Query.Queries
{
    public interface IGetQuestionByTopicId : IQuery
    {
        Task<IEnumerable<Question>> Execute(Guid id);
    }
}
