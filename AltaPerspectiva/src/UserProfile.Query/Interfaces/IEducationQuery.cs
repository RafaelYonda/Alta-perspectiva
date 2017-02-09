using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public interface IEducationQuery:IQuery
    {
        Education GetEducation(Guid credentialId);
    }
}
