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
        public UserViewModel GetUserViewModel(Guid userId)
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
                    connection.Query<UserViewModel>(userQuery, new { @id = userId }).FirstOrDefault();
              //  string imageUrl = ThumbnailHelper.ThumbnailImageName(userViewModel.ImageUrl);

                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(userViewModel.ImageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
            }

            return userViewModel;
        }

        public UserViewModel GetUserViewModelWithThumbnailImage(Guid userId)
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
                    connection.Query<UserViewModel>(userQuery, new { @id = userId }).FirstOrDefault();
                string imageUrl = ThumbnailHelper.ThumbnailImageName(userViewModel.ImageUrl);

                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
            }

            return userViewModel;
        }

        public List<UserViewModel> GetUserViewModelsWithThumbnailImage(List<Guid> userIds)
        {
            String userQuery = String.Format(@"
 select UserId,
ISNULL(ISNULL(FirstName,'')+' '+ISNULL(LastName,''),Email) as Name,
ISNULL(ImageUrl,'avatar.png') ImageUrl,
Email,
Occupation
from UserProfile.Credentials
  where UserId in @ids
");
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            List<UserViewModel> userViewModels =new List<UserViewModel>();

            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                userViewModels = connection.Query<UserViewModel>(userQuery, new { @ids = userIds }).ToList();
            }
            foreach (var userViewModel in userViewModels)
            {
                string imageUrl = ThumbnailHelper.ThumbnailImageName(userViewModel.ImageUrl);
                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
            }
            return userViewModels;
        }


        public List<UserViewModel> GetUserViewModelsWithThumbnailImageFromUserName(string userName)
        {
            List<UserViewModel> userViewModels = new List<UserViewModel>();
            String userQuery = String.Format(@" select UserId,
ISNULL(ISNULL(FirstName,'')+' '+ISNULL(LastName,''),Email) as Name,
ISNULL(ImageUrl,'avatar.png') ImageUrl,
Occupation,
Email
from UserProfile.Credentials cr
where (cr.FirstName+cr.LastName) like '%{0}%'", userName);
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                userViewModels = connection.Query<UserViewModel>(userQuery).ToList();
            }
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            foreach (var userViewModel in userViewModels)
            {
                string imageUrl = ThumbnailHelper.ThumbnailImageName(userViewModel.ImageUrl);
                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = userViewModel.Email;
                }
            }
            return userViewModels;
        }

        public UserInfoDetails GetUserInfoDetails(Guid userId)
        {
            String query = String.Format("SpUserInfoDetails '{0}'", userId);
            UserInfoDetails userInfoDetails = new UserInfoDetails();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                userInfoDetails = connection.Query<UserInfoDetails>(query).FirstOrDefault();
            }

            if (userInfoDetails != null)
            {
                if (!string.IsNullOrEmpty(userInfoDetails.Education))
                {
                    userInfoDetails.Education = userInfoDetails.Education.Trim(' ').Trim(',');
                }
                if (!string.IsNullOrEmpty(userInfoDetails.Employment))
                {
                    userInfoDetails.Employment = userInfoDetails.Employment.Trim(' ').Trim(',');
                }
            }
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            string imageUrl = ThumbnailHelper.ThumbnailImageName(userInfoDetails.ImageUrl);
          //  userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
            userInfoDetails.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
            return userInfoDetails;
        }

        public List<UserSummary> GetUserSummary(Guid categoryId)
        {
            AzureFileUploadHelper azureFileUploadHelper=new AzureFileUploadHelper();
            List<UserSummary> summeries = new List<UserSummary>();
            String query = String.Empty;
            if (categoryId != Guid.Empty)
            {
                //    List<UserSummary> userSummery = new List<UserSummary>();
                query = String.Format("SpTopUserCalculation null,'{0}'", categoryId);
                //    userSummery = await Task.Run(() => new DataReaderToListHelper().DataReaderToList<UserSummary>(connectionString, query));
                //  summeries = await queryFactory.ResolveQuery<IProfileParameters>().GetUserSummnaryByCategoryId(categoryId, connectionString);


            }
            else
            {
                //List<UserSummary> userSummery = new List<UserSummary>();
                query = String.Format("SpTopUserCalculation");
                //return await Task.Run(() => userSummery = new DataReaderToListHelper().DataReaderToList<UserSummary>(connectionString, query));
                //summeries = await queryFactory.ResolveQuery<IProfileParameters>().GetTopFiveUserSummary(connectionString);
                //summeries = summeries.Take(5).ToList();
            }
            using (IDbConnection db = new SqlConnection(Startup.ConnectionString))
            {
                summeries = db.Query<UserSummary>(query).ToList();
            }
            foreach (UserSummary summery in summeries)
            {
                string imageUrl = ThumbnailHelper.ThumbnailImageName(summery.ImageUrl);
                summery.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
            }
            return summeries;
        }

        public List<UserSummary> GetAllUserSummaries()
        {
            List<UserSummary> summeries = new List<UserSummary>();
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            using (IDbConnection dbConnection = new SqlConnection(Startup.ConnectionString))
            {
                string query = String.Format(@"SpTopHundredUserSummary");
                summeries = dbConnection.Query<UserSummary>(query).ToList();
            }
            foreach (UserSummary summery in summeries)
            {
                string imageUrl = ThumbnailHelper.ThumbnailImageName(summery.ImageUrl);
                summery.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
                
            }
            return summeries;
        }

        public UserSummary GetUserSummaryFromUserId(Guid userId)
        {
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            UserSummary summary = new UserSummary();
            string query = String.Format("SpTopUserCalculation '" + userId + "'");
            using (IDbConnection db = new SqlConnection(Startup.ConnectionString))
            {
                summary =  db.Query<UserSummary>(query).FirstOrDefault();
            }
            string imageUrl = ThumbnailHelper.ThumbnailImageName(summary.ImageUrl);
            summary.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
            return summary;
        }


    }
}
