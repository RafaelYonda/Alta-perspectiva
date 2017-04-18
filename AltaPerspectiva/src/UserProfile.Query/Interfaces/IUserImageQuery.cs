using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;

namespace UserProfile.Query
{
    public interface IUserImageQuery : IQuery
    {
        UserImage Execute(Guid userId);
    }
}
