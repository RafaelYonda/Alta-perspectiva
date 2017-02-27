using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using UserProfile.Domain.ReadModel;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserSummaryFilter
    {
        //For Name of Unknown uSer
        public List<UserSummary> GetUserSummaryForNameFilter(List<UserSummary>   summary)
        {
            AzureFileUploadHelper azureFileUploadHelper=new AzureFileUploadHelper();
            foreach (var user in summary)
            {
                if (user.Name == "")
                {
                    user.Name = "Guest";
                }
                if (user.ImageUrl == "")
                {
                    user.ImageUrl = azureFileUploadHelper.GetProfileImage("avatar.png");
                }
                else
                {
                    user.ImageUrl = azureFileUploadHelper.GetProfileImage(user.ImageUrl);
                }
            }
            return summary;


        }
    }
}
