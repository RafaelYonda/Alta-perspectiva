using AltaPerspectiva.Core.Helpers;
using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Query.Interfaces;

namespace UserProfile.Query.Queries
{

    public class UserQuery : EFQueryBase<UserProfileQueryDbContext>, IUserQuery
    {
        public UserQuery(UserProfileQueryDbContext context)
            : base(context)
        {
        }

        public bool IsUserAdmin(string connectionString, Guid userId)
        {
            String query = String.Format(@"select 1 admin  from [Identity].[AspNetUserRoles] ur where  ur.roleId ='21B88305-93F1-4040-F789-08D4500A5910' and ur.UserId='{0}'", userId);

            String admin = DataReaderToListHelper.DataReaderToSingleColumn(connectionString, query, "admin");

            return !String.IsNullOrEmpty(admin);
        }
    }
}