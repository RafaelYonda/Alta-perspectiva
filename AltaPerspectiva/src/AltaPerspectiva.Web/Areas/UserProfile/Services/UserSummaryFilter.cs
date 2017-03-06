using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using UserProfile.Domain.ReadModel;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using Microsoft.Extensions.Configuration;
using UserProfile.Query.Queries;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserSummaryFilter
    {
        //For Name of Unknown uSer
        public List<UserSummary> GetUserSummaryFilter(List<UserSummary> summary, IQueryFactory queryFactory, IConfigurationRoot configuration)
        {
            AzureFileUploadHelper azureFileUploadHelper=new AzureFileUploadHelper();
            foreach (var user in summary)
            {
                //user.UserId = new Guid(user.Id);
                if (user.Name == "")
                {
                    String connectionString =
                configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;

                    String Name = queryFactory.ResolveQuery<ICredentialQuery>()
                        .GetUserNameAspNetUsers(user.UserId, connectionString);
                    user.Name = Name;
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
