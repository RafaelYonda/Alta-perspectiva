using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using UserProfile.Domain.ReadModel;

namespace UserProfile.Query.Queries
{
    public class TopUserQuery : EFQueryBase<UserProfileQueryDbContext>, ITopUserQuery
    {
        public TopUserQuery(UserProfileQueryDbContext dbContext) : base(dbContext)
        {
        }

      
        public List<UserSummary> GetTopFiveUser()
        {
            List < UserSummary > userSummery=new List<UserSummary>();
            using (var connection = (SqlConnection)DbContext.Database.GetDbConnection())
            {
                connection.Open();
                //String query = String.Format(@"select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=@UserId");
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpTopUserCalculation";
                //command.Parameters.AddWithValue("@UserId", userId);

                var reader = command.ExecuteReader();
                while (reader.Read())
                {
                    UserSummary summary=new UserSummary();
                    summary.Name = Convert.ToString(reader["FullName"]);
                    summary.Id = Convert.ToString(reader["Id"]);
                    summary.ImageUrl = Convert.ToString(reader["ImageUrl"]);
                    userSummery.Add(summary);
                }
            }
            return userSummery;
        }
    }
}
