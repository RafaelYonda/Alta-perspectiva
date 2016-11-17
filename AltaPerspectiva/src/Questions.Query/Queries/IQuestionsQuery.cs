using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;

namespace Questions.Query
{
    public interface IQuestionsQuery:IQuery
    {
        IEnumerable<Question> Execute();
    }
}