using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Questions.Domain;
using Dapper;
using System.Linq;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using HtmlAgilityPack;

namespace AltaPerspectiva.Web.Controllers
{
    public class SocialShareController : Controller
    {
        public SocialShareController()
        {
        }
        public async Task<ActionResult> ShareQuestionInSocialMedia(Guid id)
        {
            string query = String.Format("select * from Questions.Questions  where Id = '{0}'", id);

            Question question = new Question();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                question = connection.Query<Question>(query).FirstOrDefault();
            }
            ViewBag.og_title = question.Title;
            ViewBag.og_description = question.Body; 
            ViewBag.questionUrl= "http://alta-staging.azurewebsites.net/question/detail/"+question.Id.ToString();
            ViewBag.og_url = "http://alta-staging.azurewebsites.net/SocialShare/ShareQuestionInSocialMedia" + question.Id.ToString(); ;
            ViewBag.og_image = "https://altablob.blob.core.windows.net:443/category/altaperspectiva-logo.png";
            return View();
        }
        public async Task<ActionResult> ShareAnswerInSocialMedia(Guid id)
        {
            Answer answer = new Answer();
            Question question = new Question();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                string answerQuery = String.Format("select * from Questions.Answers  where Id = '{0}'", id);
                answer = connection.Query<Answer>(answerQuery).FirstOrDefault();
               
                string questionQuery = String.Format("select * from Questions.Questions  where Id = '{0}'", answer.QuestionId);
                question = connection.Query<Question>(questionQuery).FirstOrDefault();
            }
            if (answer!=null)
            {
                string htmlDocument = answer.Text;
                var imgTags = Base64Image.GetImagesInHTMLString(answer.Text);

                foreach (var imgTag in imgTags)
                {
                    htmlDocument = answer.Text.Replace(imgTag, "");
                }
                HtmlDocument htmlDoc = new HtmlDocument();
                htmlDoc.LoadHtml(htmlDocument);
                answer.Text = htmlDoc.DocumentNode.InnerText;
            }
            var file = new AzureFileUploadHelper();
            var imageUrl = String.IsNullOrEmpty(answer.FirstImageUrl) ? "https://altablob.blob.core.windows.net:443/category/altaperspectiva-logo.png" : answer.FirstImageUrl;
            ViewBag.og_title = question.Title;
            ViewBag.og_description = answer.Text;
            ViewBag.questionUrl = "http://alta-staging.azurewebsites.net/question/detail/" + question.Id.ToString();
            ViewBag.og_url = "http://alta-staging.azurewebsites.net/SocialShare/ShareAnswerInSocialMedia/" + answer.Id.ToString(); ;
            ViewBag.og_image = imageUrl;
            return View();
        }
    }
}
