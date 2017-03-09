using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AltaPerspectiva.Core.Helpers
{
    public class EmailHandler
    {

        public string Email { get; set; }
        public string Title { get; set; }
        public string QuestionUserName { get; set; }
        public string QuestionUserEmail { get; set; }

        public Guid QuestionId { get; set; }
        public string QuestionTitle { get; set; }
        public string QuestionText { get; set; }
        public String AnswerUserName { get; set; }
        public string AnswerText { get; set; }
        public DateTime CreatedOn { get; set; }
        public string ImageUrl { get; set; }
        private string SendGridApiKey { get; set; }

        private string MailFromMailAddress = "no-reply@altap.azurewebsites.net";

        private string MailTitle = "Team Alta Perspectiva";

        public EmailHandler(String sendGridApiKey, Guid questionId, String questionUserName, string questionTitle, string answerUserName, string answerText, string userIamgeUrl,string questionUserEmail)
        {
            this.SendGridApiKey = sendGridApiKey;
            this.QuestionId = questionId;

            this.QuestionUserName = questionUserName;
            this.QuestionTitle = questionTitle;
            this.AnswerUserName = answerUserName;
            this.AnswerText = answerText;
            this.ImageUrl = userIamgeUrl;
            this.QuestionUserEmail = questionUserEmail;

            Execute().Wait();
        }

        private string BuildAnswerReply()
        {
            String link = @"http://altap.azurewebsites.net/question/detail/" + QuestionId.ToString();
            String stringFormat =
                String.Format(@"
<div style='width:100%'>

    <div style = 'width:66%;margin:5px auto;'>
        <p>
<h2>
    <img  style = 'width:30px;height:40px;vertical-align:middle;' src = 'https://altablob.blob.core.windows.net/category/LOGO%20CUADRADO.png' /> Alta Prespectiva</h2>
</p>
        Dear {0},
                               <br/>
                               <h3> You have a new answer</h3>.
   
                                  <br/>
                               {1}
                               <br/>
                               <p> <img src = '{5}'  style ='width:30px ;height: 40px;vertical-align:middle;'>{2}  </p>
         
                                         <br/>
                               {4}
                               <br/>
                              <a href ='{3}'>Click this link</a>  
      </div>
  

                      </div> ",
                    QuestionUserName, QuestionTitle, AnswerUserName, link, AnswerText, ImageUrl);
            return stringFormat;

        }
        async Task Execute()
        {
            /*  var apiKey = "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"*/
            ;
            var client = new SendGridClient(SendGridApiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(MailFromMailAddress, MailTitle),
                Subject = "You have a new answer",
                // PlainTextContent = "Do i really need Plaintext content",
                HtmlContent = BuildAnswerReply()
            };
            msg.AddTo(new EmailAddress(QuestionUserEmail, QuestionUserName));
            var response = await client.SendEmailAsync(msg);
        }


    }
}
