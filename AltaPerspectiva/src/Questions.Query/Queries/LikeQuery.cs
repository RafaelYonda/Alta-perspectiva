using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Questions.Domain;
using Questions.Query.DbContext;

namespace Questions.Query.Queries
{
    public class LikeQuery : EFQueryBase<QuestionsQueryDbContext>, ILikeQuery
    {
        public LikeQuery(QuestionsQueryDbContext context)
			: base(context)
		{
        }

        public async Task<IEnumerable<Like>> Execute(Guid questionId)
        {
            return await DbContext.Likes.Where(x => x.QuestionId==questionId).ToListAsync();
        }

        public bool GetUserBeforeLike(Guid? questionId, Guid loggedinUser)
        {
            var alreadyLiked =
                DbContext.Likes.FirstOrDefault(x => x.UserId == loggedinUser && x.QuestionId == questionId &&x.AnswerId==null);
            if (alreadyLiked != null)
            {
                //Like ited before
                return true;
            }
            else
            {
                return false;
            }
        }
    }
    
    
}
