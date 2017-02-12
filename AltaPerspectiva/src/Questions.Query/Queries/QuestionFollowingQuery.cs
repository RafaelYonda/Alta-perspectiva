﻿using AltaPerspectiva.Core.Infrastructure;
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
            return DbContext.QuestionUserFollowings.Where(x => x.FollowedUserId == userId).ToList();
        }

        public IEnumerable<QuestionUserFollowing> GetFollowings(Guid userId)
        {
            return DbContext.QuestionUserFollowings.Where(x => x.UserId == userId).ToList();
        }
    }
}