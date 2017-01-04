﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Questions.Domain;

namespace Questions.Query.Queries
{
    public interface ILikeQuery:IQuery
    {
        Task<IEnumerable<Like>> Execute(Guid questionId);

        Boolean GetQuestionBeforeLike(Guid? questionId,Guid loggedinUser);

        Task<IEnumerable<Like>> Answer(Guid answerId);
        Boolean GetAnswerBeforeLike(Guid? questionId, Guid loggedinUser);
    }
}
