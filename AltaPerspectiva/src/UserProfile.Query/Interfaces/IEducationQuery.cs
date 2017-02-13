using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;
namespace UserProfile.Query.Queries
{
    public interface IEducationQuery:IQuery
    {
        Education GetEducation(Guid credentialId);
        Education GetEducationByUserId(Guid userId);
    }
}
