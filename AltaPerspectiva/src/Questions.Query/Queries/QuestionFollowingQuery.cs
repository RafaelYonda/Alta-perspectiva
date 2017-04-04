using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using Questions.Query.Intefaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questions.Domain;

namespace Questions.Query.Queries
{
    public class QuestionFollowingQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionFollowingQuery
    {
        public QuestionFollowingQuery(QuestionsQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<QuestionUserFollowing> GetFollowers(Guid userId)
        {
            var questionUserFollowings= DbContext.QuestionUserFollowings.Where(x => x.FollowedUserId == userId && x.IsDeleted==null).ToList();
            return questionUserFollowings;
        }

        public IEnumerable<QuestionUserFollowing> GetFollowings(Guid userId)
        {
            return DbContext.QuestionUserFollowings.Where(x => x.UserId == userId && x.IsDeleted == null).ToList();
        }

        public bool IsLogginUserFollowingAnswer(Guid userId,Guid answerId)
        {
            return DbContext.QuestionUserFollowings.Any(x => x.UserId == userId && x.AnswerId==answerId);
        }
    }
}
