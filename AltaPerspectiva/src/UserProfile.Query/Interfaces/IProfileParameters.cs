using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;
using UserProfile.Domain.ReadModel;

namespace UserProfile.Query.Interfaces
{
    public interface IProfileParameters : IQuery
    {
        ProfileParameter GetProfileParameter(Guid userId,string connectionString);

        UserInfoDetails GetUserInfoDetails(Guid userId,String connectionString);

        List<CategoryWiseAnswer> CategoryWiseAnswerCount(Guid userId, string connectionString);
        Task<List<UserSummary>> GetTopFiveUserSummary( string connectionString);
        Task<List<UserSummary>> GetTopHundredUserSummary( string connectionString);
        Task<UserSummary> GetUserSummary(Guid userId, string connectionString);

        Task<List<UserSummary>> GetUserSummnaryByCategoryId(Guid categoryId,string connectionString);

        UserEmailParameter GetUserEmailParameter(String connectionString, Guid userId);

        List<UserReadModel> GetUserReadModels(String connectionString, List<Guid> userIds);
    }
}
