using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain.ReadModel
{
    public class ProfileParameter
    {
        public int Followings { get; set; }
        public int Followers{ get; set; }
        public int Bookmarks { get; set; }
        public int Answers { get; set; }
        public int Questions { get; set; }
        public int DirectQuestions { get; set; }
        public int Blogs { get; set; }

        //others
        public int ProfileViewCount { get; set; }
        public int AnswerLikeCount { get; set; }
        public int AnswerMadeThisMonth { get; set; }
        public int QuestionMadeThisMonth { get; set; }
        public int AnonymousQuestionCount { get; set; }
        public int AnonymousAnswerCount { get; set; }

    }
}
