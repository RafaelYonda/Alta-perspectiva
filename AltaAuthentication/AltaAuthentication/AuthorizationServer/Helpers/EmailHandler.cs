using Microsoft.AspNetCore.Http;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AuthorizationServer.Helpers
{
    public class EmailHandler
    {
        public string Email { get; set; }
        public string Title { get; set; }
        public string QuestionUserName { get; set; }
        public Guid QuestionId { get; set; }
        public string QuestionTitle { get; set; }
        public string QuestionText { get; set; }
        public String AnswerUserName { get; set; }
        public String AnswerUserOccupation { get; set; }
        public string AnswerText { get; set; }
        public DateTime CreatedOn { get; set; }
        public string ImageUrl { get; set; }
        private string SendGridApiKey { get; set; }

        private string FromMailAddress = "no-reply@altap.azurewebsites.net";
        public string ToMailAddress { get; set; }

       // private string MailTitle = "Team Alta Perspectiva";
        private string MailTitle = "Equipo Alta perspectiva";

        public EmailHandler(String sendGridApiKey)
        {
            this.SendGridApiKey = sendGridApiKey;
        }

        public async Task ExecuteEmailForAnswer(string html)
        {

            String AnswerLink= @"http://www.altaperspectiva.com/question/detail/" + QuestionId.ToString();
            /*  var apiKey = "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"*/

            //string.Format("{0:f}", date)   // Friday, March 10, 2017 2:31 PM
            var format = "dddd, MMMM dd, yyyy";
            var spanishDate = DateTime.Now.ToString(format, new CultureInfo("es-ES"));


            String answerHtml = html
                .Replace("#Title", "Nueva respuesta")
                .Replace("#QuestionTitle", QuestionTitle)
                .Replace("#ImageUrl", ImageUrl)
                .Replace("#AnswerUserName", AnswerUserName)
                .Replace("#AnswerUserOccupation", AnswerUserOccupation)
                .Replace("#date", "Escrito " + string.Format("{0:f}", spanishDate))
                .Replace("#AnswerText", AnswerText)
                .Replace("#AnswerLink", AnswerLink);
                


            var client = new SendGridClient(SendGridApiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(FromMailAddress, MailTitle),
                Subject = MailTitle,
                // PlainTextContent = "Do i really need Plaintext content",
                HtmlContent = answerHtml
            };
            msg.AddTo(new EmailAddress(ToMailAddress, QuestionUserName));
            var response = await client.SendEmailAsync(msg);
        }

        public async Task ExecuteEmailForDirectQuestion(String html,Guid questionAskedToUser)
        {

            String AnswerLink = @"http://www.altaperspectiva.com/dashboard/viewprofile/" + questionAskedToUser.ToString() + "/direct-question";
            /*  var apiKey = "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"*/
            //String path = "Views/EmailFormat/AnswerEmailFormat.html";
            //string html = File.ReadAllText(path);
            //string.Format("{0:f}", date)   // Friday, March 10, 2017 2:31 PM
            var format = "dddd, MMMM dd, yyyy";
            var spanishDate = DateTime.Now.ToString(format, new CultureInfo("es-ES"));
            String answerHtml = html
                .Replace("#Title", "Nueva respuesta")
                .Replace("#QuestionTitle", QuestionTitle)
                .Replace("#ImageUrl", ImageUrl)
                .Replace("#AnswerUserName", AnswerUserName)
                .Replace("#AnswerUserOccupation", AnswerUserOccupation)
                .Replace("#date", "Escrito " + string.Format("{0:f}", spanishDate))
                .Replace("#AnswerText", AnswerText)
                .Replace("#AnswerLink", AnswerLink);



            var client = new SendGridClient(SendGridApiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(FromMailAddress, MailTitle),
                Subject = MailTitle,
                // PlainTextContent = "Do i really need Plaintext content",
                HtmlContent = answerHtml
            };
            msg.AddTo(new EmailAddress(ToMailAddress, QuestionUserName));
            var response = await client.SendEmailAsync(msg);
        }
        public async Task ExecuteEmailForWelCome(String email)
        {
            var text = @"<div style='width: 100 %'>

    <div style = 'width: 66%;margin: 5px auto;' >
        
        
		<br/>
               Bienvenido a Alta perspectiva 
    <img  style = 'width:40px;height: 40px;vertical-align: middle;' src = 'https://altablob.blob.core.windows.net/category/LOGO%20CUADRADO.png' /> 

			   <br/>
¡Esta es la comunidad del aprendizaje colaborativo en negocios!<br/>
Haz tu pregunta de negocios, conecta y comparte tu conocimiento con otras personas.<br/>                
      </div>
  

                      </div> ";
            var client = new SendGridClient(SendGridApiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(FromMailAddress, MailTitle),
                Subject = MailTitle,
                // PlainTextContent = "Do i really need Plaintext content",
                HtmlContent = text
            };
            msg.AddTo(new EmailAddress(email, QuestionUserName));
            var response = await client.SendEmailAsync(msg);
        }

        public async Task ExecuteEmailForForgetPassword(String email,string subject,string message)
        { 
            var client = new SendGridClient(SendGridApiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(FromMailAddress, subject),
                Subject = MailTitle,
                // PlainTextContent = "Do i really need Plaintext content",
                HtmlContent = message
            };
            msg.AddTo(new EmailAddress(email, QuestionUserName));
            var response = await client.SendEmailAsync(msg);
        }

    }
}
