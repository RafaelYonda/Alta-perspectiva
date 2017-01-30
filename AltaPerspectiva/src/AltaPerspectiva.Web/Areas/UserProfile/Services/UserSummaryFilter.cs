using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain.ReadModel;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserSummaryFilter
    {
        //For Name of Unknown uSer
        public List<UserSummary> GetUserSummaryForNameFilter(List<UserSummary>   summary)
        {
            foreach (var user in summary)
            {
                if (user.Name == "")
                {
                    user.Name = "Guest";
                }
                if (user.ImageUrl == "")
                {
                    user.ImageUrl = "avatar.png";
                }
            }
            return summary;


        }
    }
}
