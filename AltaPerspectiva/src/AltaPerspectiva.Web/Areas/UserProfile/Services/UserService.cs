using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Query;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class UserService
    {
        public UserViewModel GetUserViewModel(IQueryFactory queryFactory, Guid loggedinUser)
        {
            String fullName = String.Empty;
            String image = String.Empty;
            String occupassion = String.Empty;
            //ContractInformation information = queryFactory.ResolveQuery<IContractInformationQuery>().Execute(loggedinUser);
            var contact = queryFactory.ResolveQuery<IContractInformationQuery>().Execute(loggedinUser);
            if (contact != null)
            {
                fullName = contact.FirstName + " " + contact.LastName;
            }
            else
            {
                fullName = "Guest";
            }

            var userImage = queryFactory.ResolveQuery<IUserImageQuery>().Execute(loggedinUser);
            if (userImage != null)
            {
                image = userImage.Image;
            }
            else
            {
                image = "avatar.png";
            }
            
           
            var occupationModel = queryFactory.ResolveQuery<IPracticeAreaQuery>().Execute(loggedinUser);//Return IEnumrable
            if (occupationModel.Any())
            {
                occupassion = String.Join(",", occupationModel);
            }
             else
            {
                occupassion = "n/a";
            }

    UserViewModel userViewModel = new UserViewModel
            {
                ImageUrl = image,
                Name = fullName,
                Occupation = occupassion,
                UserId = loggedinUser
            };           

            return userViewModel;
        }      
    }
}
