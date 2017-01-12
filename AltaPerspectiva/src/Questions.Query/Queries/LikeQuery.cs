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

        public bool GetQuestionBeforeLike(Guid? questionId, Guid loggedinUser)
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

        public bool GetAnswerBeforeLike(Guid? answerId, Guid loggedinUser)
        {
            var alreadyLiked =
               DbContext.Likes.FirstOrDefault(x => x.UserId == loggedinUser &&  x.AnswerId == answerId);
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

        public async Task<IEnumerable<Like>> Answer(Guid answerId)
        {
            return await DbContext.Likes.Where(x => x.AnswerId == answerId).ToListAsync();
        }

        public async Task<IEnumerable<Like>> GetLikeByAnswerId(Guid questionId,Guid answerId)
        {
            return await DbContext.Likes.Where(x => x.QuestionId == questionId &&x.AnswerId== answerId).ToListAsync();
        }
    }
    
    
}
