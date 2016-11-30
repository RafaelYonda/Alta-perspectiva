using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;

namespace Questions.Query
{
    public interface IQuestionsByCategoryIdQuery : IQuery
    {
        IEnumerable<Question> Execute(Guid id);
    }
}