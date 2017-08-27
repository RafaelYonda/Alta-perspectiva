using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using UserProfile.Query;
using UserProfile.Query.Queries;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using Dapper;
using Microsoft.Extensions.Configuration;
using UserProfile.Domain.ReadModel;
using UserProfile.Query.Interfaces;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserService
    {
        public UserViewModel GetUserViewModel(IQueryFactory queryFactory, Guid loggedinUser,IConfigurationRoot configuration)
        {
            UserViewModel userViewModel = null;

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                String userQuery = String.Format(@" select UserId,
ISNULL(ISNULL(FirstName,'')+' '+ISNULL(LastName,''),Email) as Name,
ISNULL(ImageUrl,'avatar.png') ImageUrl,
Occupation,
Email
from UserProfile.Credentials
  where userId  = @id ");
                userViewModel =
                    connection.Query<UserViewModel>(userQuery, new { @id = loggedinUser }).FirstOrDefault();

                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
            }

            return userViewModel;
        }
    }
}
