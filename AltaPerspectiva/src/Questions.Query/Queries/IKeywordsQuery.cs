﻿using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;

namespace Questions.Query
{
    public interface IKeywordsQuery : IQuery
    {
        IEnumerable<Keyword> Execute(Guid categoryId);
    }
}