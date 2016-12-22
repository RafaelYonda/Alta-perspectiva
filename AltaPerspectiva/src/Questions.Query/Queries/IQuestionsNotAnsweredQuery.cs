﻿using AltaPerspectiva.Core;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionsNotAnsweredQuery : IQuery
    {
        Task<IEnumerable<Question>> Execute(Guid CategoryId);
    }
}