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

      
        public async Task<List<UserSummary>> GetTopFiveUserSummary()
        {
            List <UserSummary> userSummery=new List<UserSummary>();
            using (var connection = (SqlConnection)DbContext.Database.GetDbConnection())
            {
                connection.Open();
                //String query = String.Format(@"select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=@UserId");
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpTopUserCalculation";
                //command.Parameters.AddWithValue("@UserId", userId);
                var reader = await command.ExecuteReaderAsync();
                while (reader.Read())
                {
                    UserSummary summary=new UserSummary();
                    summary.Name = Convert.ToString(reader["FullName"]);
                    summary.Id = Convert.ToString(reader["Id"]);
                    summary.ImageUrl = Convert.ToString(reader["ImageUrl"]);
                    summary.TotalLike = Convert.ToInt16(reader["TotalLike"]);
                    summary.TotalComment = Convert.ToInt16(reader["TotalComment"]);
                    summary.TotalQuestion = Convert.ToInt16(reader["TotalQuestion"]);
                    summary.TotalAnswer = Convert.ToInt16(reader["TotalAnswer"]);
                    userSummery.Add(summary);
                }
            }
            return  userSummery;
        }

        public async Task<UserSummary> GetUserSummary(Guid userId)
        {
            UserSummary summary = new UserSummary();
            using (var connection = (SqlConnection)DbContext.Database.GetDbConnection())
            {
                connection.Open();
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpTopUserCalculation";
                command.Parameters.AddWithValue("@UserId", userId);
                var reader = await command.ExecuteReaderAsync();
                while (reader.Read())
                {
                    summary.Name = Convert.ToString(reader["FullName"]);
                    summary.Id = Convert.ToString(reader["Id"]);
                    summary.ImageUrl = Convert.ToString(reader["ImageUrl"]);
                    summary.TotalLike = Convert.ToInt16(reader["TotalLike"]);
                    summary.TotalComment = Convert.ToInt16(reader["TotalComment"]);
                    summary.TotalQuestion = Convert.ToInt16(reader["TotalQuestion"]);
                    summary.TotalAnswer = Convert.ToInt16(reader["TotalAnswer"]);
                }
            }
            return summary;
        }

        public async Task<List<UserSummary>> GetUserSummnaryByCategoryId(Guid categoryId)
        {
            List<UserSummary> userSummery = new List<UserSummary>();
            using (var connection = (SqlConnection)DbContext.Database.GetDbConnection())
            {
                
                    connection.Open();
                    //String query = String.Format(@"select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=@UserId");
                    var command = connection.CreateCommand();
                    command.CommandType = CommandType.Text;

                    command.CommandText = String.Format("SpTopUserCalculation null,'{0}'", categoryId);


                    var reader = await command.ExecuteReaderAsync();
                    while (reader.Read())
                    {
                        UserSummary summary = new UserSummary();
                        summary.Name = Convert.ToString(reader["FullName"]);
                        summary.Id = Convert.ToString(reader["Id"]);
                        summary.ImageUrl = Convert.ToString(reader["ImageUrl"]);
                        summary.TotalLike = Convert.ToInt16(reader["TotalLike"]);
                        summary.TotalComment = Convert.ToInt16(reader["TotalComment"]);
                        summary.TotalQuestion = Convert.ToInt16(reader["TotalQuestion"]);
                        summary.TotalAnswer = Convert.ToInt16(reader["TotalAnswer"]);
                        userSummery.Add(summary);
                    }
               
                
            }
            return userSummery;
        }
    }
}
