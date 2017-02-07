using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query.Queries
{
    public class UserViewQuery : EFQueryBase<UserProfileQueryDbContext>, IUserViewQuery
    {
        public UserViewQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }
        public UserView GetUserView(Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}
