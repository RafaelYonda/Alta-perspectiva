using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain.ReadModel;


namespace UserProfile.Query.Queries
{
    public interface ITopUserQuery : IQuery
    {
        Task< List<UserSummary>> GetTopFiveUserSummary();
        Task<UserSummary> GetUserSummary(Guid userId);

        Task<List<UserSummary>> GetUserSummnaryByCategoryId(Guid categoryId);
    }
}
