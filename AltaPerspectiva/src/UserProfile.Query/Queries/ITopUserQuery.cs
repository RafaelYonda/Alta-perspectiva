using System;
using System.Collections.Generic;
using AltaPerspectiva.Core;
using UserProfile.Domain.ReadModel;


namespace UserProfile.Query.Queries
{
    public interface ITopUserQuery : IQuery
    {
        List<UserSummary> GetTopFiveUser();
    }
}
