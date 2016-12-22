using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public class UserImageQuery : EFQueryBase<UserProfileQueryDbContext>, IUserImageQuery
    {
        public UserImageQuery(UserProfileQueryDbContext context)
			: base(context)
		{
        }

        public UserImage Execute(Guid userId)
        {
            return DbContext.UserImage.FirstOrDefault(x=>x.UserId==userId); //.OrderBy(x => x.FirstName);
        }
    }
   
}
