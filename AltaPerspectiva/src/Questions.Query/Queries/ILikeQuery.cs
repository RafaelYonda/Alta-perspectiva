using System;
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

        Boolean GetUserBeforeLike(Guid? questionId,Guid loggedinUser);
    }
}
