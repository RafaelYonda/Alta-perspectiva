using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using UserProfile.Query;
using UserProfile.Query.Queries;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using Microsoft.Extensions.Configuration;
using UserProfile.Domain.ReadModel;
using UserProfile.Query.Interfaces;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserService
    {
        public String GetUserFullName(IQueryFactory queryFactory, Guid loggedinUser, IConfigurationRoot configuration)
        {
            String fullName = String.Empty;
            var credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(loggedinUser);
            if (credential != null)
            {
                fullName = credential.FirstName + " " + credential.LastName;
            }
            else
            {
                //No credential .Fetech from aspNetUser
                String connectionString =
            configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;
               // String connectionString = Startup.ConnectionString;

                String Name = queryFactory.ResolveQuery<ICredentialQuery>()
                    .GetUserNameAspNetUsers(loggedinUser, connectionString);
                fullName = Name;
            }
            return fullName;
        }
        public UserViewModel GetUserViewModel(IQueryFactory queryFactory, Guid loggedinUser,IConfigurationRoot configuration)
        {
            string fullName = string.Empty;
            string imageUrl = string.Empty;
            string occupation = string.Empty;
            Guid credentialId = Guid.Empty;
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            String connectionString =
           configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;

            UserReadModel userReadModel =
                queryFactory.ResolveQuery<IProfileParameters>().GetUserReadModel(connectionString, loggedinUser);
            UserViewModel userViewModel=new UserViewModel();
            if (userReadModel != null)
            {
                userViewModel = new UserViewModel
                {
                    ImageUrl = azureFileUploadHelper.GetProfileImage(userReadModel.ImageUrl),
                    Name = userReadModel.Name,
                    Occupation = userReadModel.Occupation,
                    UserId = loggedinUser,
                    CredentialId = userReadModel.CredentialId
                };
            }
            else
            {
                userViewModel = new UserViewModel
                {
                    ImageUrl = azureFileUploadHelper.GetProfileImage(null),
                    Name = "Guest",
                    Occupation = " ",
                    UserId = loggedinUser,
                    CredentialId = Guid.Empty
                };
            }
          

            return userViewModel;
        }
    }
}
