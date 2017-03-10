using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Helpers;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using Questions.Domain;
using Questions.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;
using UserProfile.Domain.ReadModel;
using UserProfile.Query;
using UserProfile.Query.Interfaces;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class SendEmailService
    {
        public async Task SendAnswerEmailAsync( IQueryFactory queryFactory,Guid loggedinUser,Guid questionId,string answerText,string title)
        {
            Employment employment = queryFactory.ResolveQuery<IEmploymentQuery>().GetEmploymentByUserId(loggedinUser);
            String answerUserOccupation = String.Empty;
            if (employment != null)
            {
                answerUserOccupation = employment.Position;
                if (!string.IsNullOrEmpty(employment.CompanyName))
                {
                    answerUserOccupation = answerUserOccupation + " at" + employment.CompanyName;
                }
            }

            Question question = queryFactory.ResolveQuery<IQuestionsQuery>().QuestionForEmail(questionId);
            UserEmailParameter answerUserEmailParamter =
              queryFactory.ResolveQuery<IProfileParameters>()
                  .GetUserEmailParameter(Startup.ConnectionString, loggedinUser);

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            answerUserEmailParamter.ImageUrl = azureFileUploadHelper.GetProfileImage(answerUserEmailParamter.ImageUrl);

            UserEmailParameter questionUserEmailParamter =
               queryFactory.ResolveQuery<IProfileParameters>()
                   .GetUserEmailParameter(Startup.ConnectionString, question.UserId);

            EmailHandler emailHandler = new EmailHandler(Startup.SendGridApiKey);

            emailHandler.Title = title;
            emailHandler.QuestionId = questionId;
            emailHandler.QuestionUserName = questionUserEmailParamter.UserName;
            emailHandler.QuestionTitle = question.Title;
            emailHandler.AnswerUserName = answerUserEmailParamter.UserName;
            emailHandler.AnswerText = answerText;
            emailHandler.ImageUrl = answerUserEmailParamter.ImageUrl;
            emailHandler.ToMailAddress = questionUserEmailParamter.Email;
            emailHandler.AnswerUserOccupation = answerUserOccupation;

            await emailHandler.ExecuteEmailForAnswer();
        }

        public async Task SendDirectQuestionEmailAsync(IQueryFactory queryFactory, string title, string questionTitle,string ansTextAsQuestionTextGivenByLoggedinUser, Guid loggedinUser, Guid questionAskedToUser)
        {
            Employment employment = queryFactory.ResolveQuery<IEmploymentQuery>().GetEmploymentByUserId(loggedinUser);
            String answerUserOccupation = String.Empty;
            if (employment != null)
            {
                answerUserOccupation = employment.Position;
                if (!string.IsNullOrEmpty(employment.CompanyName))
                {
                    answerUserOccupation = answerUserOccupation + " at" + employment.CompanyName;
                }
            }

            ////Question question = queryFactory.ResolveQuery<IQuestionsQuery>().QuestionForEmail(questionId);
            UserEmailParameter userEmailParamter =
              queryFactory.ResolveQuery<IProfileParameters>()
                  .GetUserEmailParameter(Startup.ConnectionString, loggedinUser);

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            userEmailParamter.ImageUrl = azureFileUploadHelper.GetProfileImage(userEmailParamter.ImageUrl);

            //UserEmailParameter questionUserEmailParamter =
            //   queryFactory.ResolveQuery<IProfileParameters>()
            //       .GetUserEmailParameter(Startup.ConnectionString, question.UserId);

            EmailHandler emailHandler = new EmailHandler(Startup.SendGridApiKey);
            emailHandler.Title = title;
            //emailHandler.QuestionId = questionId;
            //emailHandler.QuestionUserName = questionUserEmailParamter.UserName;
            emailHandler.QuestionTitle = questionTitle;
            
            
            emailHandler.ImageUrl = userEmailParamter.ImageUrl;
            emailHandler.AnswerUserName = userEmailParamter.UserName;
            //emailHandler.QuestionUserEmail = questionUserEmailParamter.Email;
            emailHandler.AnswerUserOccupation = answerUserOccupation;
            emailHandler.AnswerText = ansTextAsQuestionTextGivenByLoggedinUser;

            emailHandler.ToMailAddress = 
              queryFactory.ResolveQuery<IProfileParameters>()
                  .GetUserEmailParameter(Startup.ConnectionString, questionAskedToUser).Email;



            await emailHandler.ExecuteEmailForDirectQuestion(questionAskedToUser);
        }
    }
}
