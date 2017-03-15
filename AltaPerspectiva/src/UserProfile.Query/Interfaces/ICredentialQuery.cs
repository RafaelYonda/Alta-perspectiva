using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public interface ICredentialQuery : IQuery
    {
        Credential GetCredentialByCredentialId(Guid credentialId);
        Credential GetCredential(Guid userId);
        List<Credential> GetCredentials(List<Guid> userIds );
        Credential GetCredentialForProfile(Guid userId);
        string GetUserNameAspNetUsers(Guid userId,String connectionString);

        Task<List<Guid>> GetAllUserIds(string userName);
    }
}
