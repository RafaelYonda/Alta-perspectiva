using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface ILevelQuery : IQuery
    {
        Task<List<Level>> GetAllLevel();

        Level GetLevelByLevelId(Guid levelId);
        List<Level> GetAllLevels();
    }
}