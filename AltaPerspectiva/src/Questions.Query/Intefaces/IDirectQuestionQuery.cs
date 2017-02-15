using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Questions.Query.Intefaces
{
    public interface IDirectQuestionQuery:IQuery
    {
        Guid GetDirectQuestionUser(Guid questionId);
    }
}
