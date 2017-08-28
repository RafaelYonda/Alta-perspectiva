using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Helpers;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using Questions.Domain;
using Questions.Query;
using System;
using System.Collections.Generic;
using System.IO;
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
        public async Task SendAnswerEmailAsync( IQueryFactory queryFactory,String webRootPath, Guid loggedinUser,Guid questionId,string answerText,string title)
        {
            Employment employment = queryFactory.ResolveQuery<IEmploymentQuery>().GetEmploymentByUserId(loggedinUser);
            String answerUserOccupation = String.Empty;
            if (employment != null)
            {
                answerUserOccupation = employment.Position;
                if (!string.IsNullOrEmpty(employment.CompanyName))
                {
                    answerUserOccupation = answerUserOccupation + " en" + employment.CompanyName;
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

            EmailHandler emailHandler = new EmailHandler(Startup.SendGridApiKey,Startup.Url);

            emailHandler.Title = title;
            emailHandler.QuestionId = questionId;
            emailHandler.QuestionUserName = questionUserEmailParamter.UserName;
            emailHandler.QuestionTitle = "¿ " + question.Title +" ?";
            emailHandler.AnswerUserName = answerUserEmailParamter.UserName;
            emailHandler.AnswerText = answerText;
            emailHandler.ImageUrl = answerUserEmailParamter.ImageUrl;
            emailHandler.ToMailAddress = questionUserEmailParamter.Email;
            emailHandler.AnswerUserOccupation = answerUserOccupation;
            String path = webRootPath+"/Views/EmailFormat/AnswerEmailFormat.html";
            string html = File.ReadAllText(path);
            try
            {
                await emailHandler.ExecuteEmailForAnswer(html);
            }
            catch (Exception e)
            {
                //Console.WriteLine(e);
                //throw;
            }
          
        }

        public async Task SendDirectQuestionEmailAsync(IQueryFactory queryFactory, String webRootPath, string title, string questionTitle,string ansTextAsQuestionTextGivenByLoggedinUser, Guid loggedinUser, Guid questionAskedToUser)
        {
            Employment employment = queryFactory.ResolveQuery<IEmploymentQuery>().GetEmploymentByUserId(loggedinUser);
            String answerUserOccupation = String.Empty;
            if (employment != null)
            {
                answerUserOccupation = employment.Position;
                if (!string.IsNullOrEmpty(employment.CompanyName))
                {
                    answerUserOccupation = answerUserOccupation + " en" + employment.CompanyName;
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

            EmailHandler emailHandler = new EmailHandler(Startup.SendGridApiKey, Startup.Url);
            emailHandler.Title = title;
            //emailHandler.QuestionId = questionId;
            //emailHandler.QuestionUserName = questionUserEmailParamter.UserName;
            emailHandler.QuestionTitle = "¿ " + questionTitle + " ?";


            emailHandler.ImageUrl = userEmailParamter.ImageUrl;
            emailHandler.AnswerUserName = userEmailParamter.UserName;
            //emailHandler.QuestionUserEmail = questionUserEmailParamter.Email;
            emailHandler.AnswerUserOccupation = answerUserOccupation;
            emailHandler.AnswerText = ansTextAsQuestionTextGivenByLoggedinUser;

            emailHandler.ToMailAddress = 
              queryFactory.ResolveQuery<IProfileParameters>()
                  .GetUserEmailParameter(Startup.ConnectionString, questionAskedToUser).Email;
            String path = webRootPath + "/Views/EmailFormat/AnswerEmailFormat.html";
            string html = File.ReadAllText(path);
            try
            {
                //await emailHandler.ExecuteEmailForAnswer(html);
                await emailHandler.ExecuteEmailForDirectQuestion(html,questionAskedToUser);
            }
            catch (Exception e)
            {
                //Console.WriteLine(e);
                //throw;
            }


            
        }
    }
}
