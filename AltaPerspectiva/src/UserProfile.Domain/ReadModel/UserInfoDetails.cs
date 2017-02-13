using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Domain.ReadModel
{
    public class UserInfoDetails
    {
        public Guid UserId { get; set; }
        public int AnswerCount { get; set; }
        public int QuestionCount { get; set; }
        public string Education { get; set; }
        public string Employment { get; set; }
        public string Place { get; set; }
        public string OtherExperience { get; set; }

        public string ImageUrl { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }
        

    }
}
