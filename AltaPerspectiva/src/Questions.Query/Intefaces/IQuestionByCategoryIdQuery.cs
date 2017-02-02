using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionsByCategoryIdQuery : IQuery
    {
        Task<IEnumerable<Question>> Execute(Guid id);
    }
}