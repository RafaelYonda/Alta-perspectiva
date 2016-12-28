using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Query;

namespace AltaPerspectiva.Web.Areas.Common.Repositories
{
    public class UserRepository
    {
        public static UserViewModel GetUserViewModel(IQueryFactory queryFactory, Guid loggedinUser)
        {
            UserViewModel userViewModel;
            var contact = queryFactory.ResolveQuery<IContractInformationQuery>().Execute(loggedinUser);
            var occupation = queryFactory.ResolveQuery<IPracticeAreaQuery>().Execute(loggedinUser);
            var userImage = queryFactory.ResolveQuery<IUserImageQuery>().Execute(loggedinUser);

            userViewModel = new Areas.UserProfile.Models.UserViewModel
            {
                Name = contact.FirstName + " " + contact.LastName,
                Occupation = String.Join(",", occupation),
                ImageUrl = userImage.Image
            };

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
                qv.UserViewModel = UserRepository.GetUserViewModel(queryFactory, loggedinUser);

                questions.Add(qv);
            }
            return questions;

        }
    }
}
