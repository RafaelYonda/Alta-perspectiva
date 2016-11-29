using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;

namespace Questions.Query
{
    public interface IQuestionByIdQuery : IQuery
    {
        Question Execute(Guid id);
    }
}