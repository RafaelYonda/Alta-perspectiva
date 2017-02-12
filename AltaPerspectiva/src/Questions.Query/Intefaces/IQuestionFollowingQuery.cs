using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Questions.Domain;

namespace Questions.Query.Intefaces
{
    public interface IQuestionFollowingQuery:IQuery
    {
        IEnumerable<QuestionUserFollowing> GetFollowings(Guid userId);
        IEnumerable<QuestionUserFollowing> GetFollowers(Guid userId);
    }
}
