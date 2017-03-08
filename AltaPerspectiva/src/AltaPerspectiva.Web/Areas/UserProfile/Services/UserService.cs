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

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserService
    {
        //public List<UserViewModel> GetUserViewModels(IQueryFactory queryFactory, List<Question> questions,List<Guid> userIds )
        //{

        //}

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
            var credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(loggedinUser);

            if (credential != null)
            {
                imageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);
                if (credential.FirstName == null && credential.LastName == null)
                {
                    String connectionString =
            configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;

                    String Name = queryFactory.ResolveQuery<ICredentialQuery>()
                        .GetUserNameAspNetUsers(loggedinUser, connectionString);
                    fullName = Name;
                }
                else
                {
                    fullName = credential.FirstName + " " + credential.LastName;
                }
                
                occupation = credential.Employments.Select(x => x.Position).Take(1).FirstOrDefault();
                credentialId = credential.Id;
            }
            else
            {
                imageUrl = azureFileUploadHelper.GetProfileImage(null);
                //No credential .Fetech from aspNetUser
                String connectionString =
            configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;

                String Name = queryFactory.ResolveQuery<ICredentialQuery>()
                    .GetUserNameAspNetUsers(loggedinUser, connectionString);
                fullName = Name;
                occupation = " ";
            }
            UserViewModel userViewModel = new UserViewModel
            {
                ImageUrl = imageUrl,
                Name = fullName,
                Occupation = occupation,
                UserId = loggedinUser,
                CredentialId = credentialId
            };

            return userViewModel;
        }
    }
}
