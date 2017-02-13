using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain.ReadModel
{
    public class ProfileParameter
    {
        public int FollowingsCount { get; set; }
        public int FollowersCount { get; set; }
        public int BookmarksCount { get; set; }
        public int AnswersCount { get; set; }
        public int QuestionsCount { get; set; }
        public int DirectQuestionCount { get; set; }
        public int BlogsCount { get; set; }

        //others
        public int QuestionViewCount { get; set; }
        public int ProfileViewCount { get; set; }
        public int AnswerLikeCount { get; set; }
        public int AnswerMadeThisMonth { get; set; }
        public int QuestionMadeThisMonth { get; set; }

    }
}
