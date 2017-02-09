using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Query;
using UserProfile.Query.Queries;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserService
    {
        
        public String GetUserFullName(IQueryFactory queryFactory,Guid loggedinUser)
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
            string education = string.Empty;
            string places = string.Empty;
            var credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(loggedinUser);
            if (credential != null)
            {
                fullName = credential.FirstName + " " + credential.LastName;
                imageUrl = credential.ImageUrl?? "avatar.png";
                occupation = "PLZ ADD Your occupation";
            }
            else
            {
                fullName = "Guest";
                imageUrl = "avatar.png";
                occupation = " ";
            }
           
    UserViewModel userViewModel = new UserViewModel
            {
                ImageUrl = imageUrl,
                Name = fullName,
                Occupation = occupation,
                UserId = loggedinUser
            };           

            return userViewModel;
        }      
    }
}
