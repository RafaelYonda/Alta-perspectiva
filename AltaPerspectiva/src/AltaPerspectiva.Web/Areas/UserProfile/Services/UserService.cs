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
        public static UserViewModel GetUserViewModel(IQueryFactory queryFactory, Guid loggedinUser)
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

            var userImage = queryFactory.ResolveQuery<IUserImageQuery>().Execute(loggedinUser);
            if (userImage != null)
            {
                image = userImage.Image;
            }
            var occupationModel = queryFactory.ResolveQuery<IPracticeAreaQuery>().Execute(loggedinUser);
            if (occupationModel != null)
            {
                occupassion = String.Join(",", occupationModel);
            }

            UserViewModel userViewModel = new UserViewModel
            {
                ImageUrl = image,
                Name = fullName,
                Occupassion = occupassion,
                UserId = loggedinUser
            };
            //UserViewModel userViewModel;
           
            
            

            //userViewModel = new Areas.UserProfile.Models.UserViewModel
            //{
            //    Name = contact.FirstName + " " + contact.LastName,
            //    Occupation = 
            //    ImageUrl = userImage.Image
            //};

            return userViewModel;
        }

        public static List<QuestionViewModel> GetQuestionWithUserViewModel(IEnumerable<Question> questionList,IQueryFactory queryFactory, Guid loggedinUser)
        {
            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            foreach (var q in questionList)
            {

                //var contact = queryFactory.ResolveQuery<IContractInformationQuery>().Execute(q.UserId);
                //var occupation = queryFactory.ResolveQuery<IPracticeAreaQuery>().Execute(q.UserId);
                //var userImage = queryFactory.ResolveQuery<IUserImageQuery>().Execute(q.UserId);

                //var qv = new QuestionViewModel();
                //qv.Title = q.Title;
                //qv.Body = q.Body;
                //qv.UserViewModel = new Areas.UserProfile.Models.UserViewModel { Name = contact.FirstName + " " + contact.LastName,
                //                                                                Occupation = String.Join(",", occupation),
                //                                                                ImageUrl = userImage.Image
                //                                                              };
                var qv = new QuestionViewModel();
                qv.Title = q.Title;
                qv.Body = q.Body;
                qv.UserViewModel = UserService.GetUserViewModel(queryFactory, loggedinUser);

                questions.Add(qv);
            }
            return questions;

        }
    }
}
