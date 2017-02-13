using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Query.Interfaces;
using UserProfile.Domain.ReadModel;
using System.Data.SqlClient;
using System.Data;
using Microsoft.EntityFrameworkCore;

namespace UserProfile.Query.Queries
{
    public class ProfileParameters: EFQueryBase<UserProfileQueryDbContext>, IProfileParameters
    {
        public ProfileParameters(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public ProfileParameter GetProfileParameter(Guid userId)
        {
            ProfileParameter profileParameter=new ProfileParameter();
            using (var connection = (SqlConnection)DbContext.Database.GetDbConnection())
            {
                connection.Open();
                //String query = String.Format(@"select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=@UserId");
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpProfileParameterCount";
                command.Parameters.AddWithValue("@userId", userId);
                var reader = command.ExecuteReader();
                while (reader.Read())
                {

                    profileParameter.FollowingsCount = Convert.ToInt32(reader["FollowingsCount"]);
                    profileParameter.FollowersCount = Convert.ToInt32(reader["FollowersCount"]);
                    profileParameter.BookmarksCount = Convert.ToInt32(reader["BookmarksCount"]);
                    profileParameter.AnswersCount = Convert.ToInt32(reader["AnswersCount"]);
                    profileParameter.QuestionsCount = Convert.ToInt32(reader["QuestionsCount"]);
                    profileParameter.AnswersCount = Convert.ToInt32(reader["DirectQuestionCount"]);
                    profileParameter.BlogsCount = Convert.ToInt32(reader["BlogsCount"]);
                    profileParameter.AnswerLikeCount = Convert.ToInt32(reader["AnswerLikeCount"]);
                    profileParameter.ProfileViewCount = Convert.ToInt32(reader["ProfileViewCount"]);
                    profileParameter.AnswerMadeThisMonth = Convert.ToInt32(reader["AnswerMadeThisMonth"]);
                    profileParameter.QuestionMadeThisMonth = Convert.ToInt32(reader["QuestionMadeThisMonth"]);

                }
            }
            return profileParameter;
        }

        public UserInfoDetails GetUserInfoDetails(Guid userId)
        {
            UserInfoDetails userInfoDetails=new UserInfoDetails();
            using (var connection = (SqlConnection)DbContext.Database.GetDbConnection())
            {
                connection.Open();
                //String query = String.Format(@"select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=@UserId");
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpUserInfoDetails";
                command.Parameters.AddWithValue("@userId", userId);
                var reader = command.ExecuteReader();
                while (reader.Read())
                {
                    userInfoDetails.UserId = userId;
                    userInfoDetails.ImageUrl = Convert.ToString(reader["ImageUrl"]);
                    userInfoDetails.Education= Convert.ToString(reader["Education"]);
                    userInfoDetails.Employment= Convert.ToString(reader["Employment"]);
                    userInfoDetails.Place= Convert.ToString(reader["Place"]);
                    userInfoDetails.OtherExperience= Convert.ToString(reader["OtherExperience"]);
                    userInfoDetails.FullName= Convert.ToString(reader["FullName"]);
                    userInfoDetails.Title= Convert.ToString(reader["Title"]);
                    userInfoDetails.AnswerCount = Convert.ToInt32(reader["AnswerCount"]);
                    userInfoDetails.QuestionCount = Convert.ToInt32(reader["QuestionCount"]);  
                    //userInfoDetails.QuestionViewCount = Convert.ToInt32(reader["QuestionViewCount"]);  

                }
            }
            return userInfoDetails;
        }

       
    }
}
