﻿using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using UserProfile.Query;
using UserProfile.Query.Queries;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserService
    {
        //public List<UserViewModel> GetUserViewModels(IQueryFactory queryFactory, List<Question> questions,List<Guid> userIds )
        //{

        //}

        public String GetUserFullName(IQueryFactory queryFactory, Guid loggedinUser)
        {
            String fullName = String.Empty;
            var credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(loggedinUser);
            if (credential != null)
            {
                fullName = credential.FirstName + " " + credential.LastName;
            }
            else
            {
                fullName = "Guest";
            }
            return fullName;
        }
        public UserViewModel GetUserViewModel(IQueryFactory queryFactory, Guid loggedinUser)
        {
            string fullName = string.Empty;
            string imageUrl = string.Empty;
            string occupation = string.Empty;
            Guid credentialId = Guid.Empty;
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            var credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(loggedinUser);
            if (credential != null)
            {
                fullName = credential.FirstName + " " + credential.LastName;

                if (credential.ImageUrl == "" || credential.ImageUrl == null)
                {
                    imageUrl = azureFileUploadHelper.GetProfileImage("avatar.png");
                }
                else
                {

                    imageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);
                }

                occupation = credential.Employments.Select(x => x.Position).Take(1).FirstOrDefault();
                credentialId = credential.Id;
            }
            else
            {
                fullName = "Guest";
                imageUrl = azureFileUploadHelper.GetProfileImage("avatar.png");
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
