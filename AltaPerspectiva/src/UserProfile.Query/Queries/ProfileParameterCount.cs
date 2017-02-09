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
    public class ProfileParameterCount: EFQueryBase<UserProfileQueryDbContext>, IProfileParameterCount
    {
        public ProfileParameterCount(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public ProfileParameter GetProfileParameter(Guid credentialId)
        {
            ProfileParameter profileParameter=new ProfileParameter();
            using (var connection = (SqlConnection)DbContext.Database.GetDbConnection())
            {
                connection.Open();
                //String query = String.Format(@"select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=@UserId");
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpProfileParameterCount";
                command.Parameters.AddWithValue("@credentialId", credentialId);
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

                }
            }
            return profileParameter;
        }
    }
}
