using AltaPerspectiva.Core;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionCommentsQuery : IQuery
    {
        Task<IEnumerable<Comment>> Execute(Guid QuestionId);
    }
}