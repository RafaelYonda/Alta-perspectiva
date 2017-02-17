using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using UserProfile.Domain;
using UserProfile.Domain.ReadModel;

namespace UserProfile.Query.Queries
{
    public class CredentialQuery: EFQueryBase<UserProfileQueryDbContext>, ICredentialQuery
    {
        public CredentialQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }
        public Credential GetCredential(Guid userId)
        {
            return DbContext.Credentials.Include(x => x.Employments).Where(x => x.UserId == userId)
                
                .FirstOrDefault();
        }

        public Credential GetCredentialForProfile(Guid userId)
        {
            return DbContext.Credentials
                            .Include(x => x.Employments)
                            .Include(x=>x.Educations)
                            .Include(x=>x.Places)
                            .Include(x=>x.Others)
                            .Where(x => x.UserId == userId)
                .FirstOrDefault();
        }

        public Credential GetCredentialByCredentialId(Guid credentialId)
        {
            return DbContext.Credentials.Include(x => x.Employments).Where(x => x.Id == credentialId)

               .FirstOrDefault();
        }

        public List<Credential> GetCredentials(List<Guid> userIds)
        {
            return DbContext.Credentials.Include(x=>x.Employments).Where(x => userIds.Contains(x.UserId)).ToList();
        }

        public string GetUserNameAspNetUsers(Guid userId, String connectionString)
        {
            String userName = "Guest";
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                var command = connection.CreateCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = "SELECT [UserName] FROM [AltaPerspectiva].[Identity].[AspNetUsers] where Id=@userId";
                command.Parameters.AddWithValue("@userId", userId);
                var reader = command.ExecuteReader();
                while (reader.Read())
                {
                    userName = Convert.ToString(reader["userName"]);
                }
            }
            return userName;
        }
    }
}
