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
using Blog.Domain;
using HtmlAgilityPack;
using System.Text.RegularExpressions;

namespace AltaPerspectiva.Web.Controllers
{
    public class SocialShareController : Controller
    {
        private string ImageUrl
        {
            get { return "https://altablob.blob.core.windows.net:443/category/altaperspectivafb2.png"; }
        }
        public SocialShareController()
        {
        }
        

        public ActionResult ShareQuestionInSocialMedia(Guid id)
        {
            string query = String.Format("select * from Questions.Questions  where Id = '{0}'", id);

            Question question = new Question();
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                question = connection.Query<Question>(query).FirstOrDefault();
            }
            ViewBag.og_title = question.Title.AddQuestionMarks();
            ViewBag.og_description = string.IsNullOrEmpty(question.Body)?"Alta Perspectiva": question.Body; 
            ViewBag.questionUrl = Startup.Url + "question/detail/"+question.Id.ToString();
            ViewBag.og_url = Startup.Url + "SocialShare/ShareQuestionInSocialMedia/" + question.Id.ToString(); ;
            ViewBag.og_image = ImageUrl;
            return View();
        }
        public ActionResult ShareAnswerInSocialMedia(Guid id)
        {
            Answer answer = new Answer();

              Question question = null;
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                string answerQuery = String.Format("select * from Questions.Answers  where Id = '{0}'", id);
                answer = connection.Query<Answer>(answerQuery).FirstOrDefault();
               
                string questionQuery = String.Format("select * from Questions.Questions  where Id = '{0}'", answer.QuestionId);
                question = connection.Query<Question>(questionQuery).FirstOrDefault();
                
            }
            if (question != null)
            {
                question.Title = question.Title.AddQuestionMarks();
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
            var imageUrl = String.IsNullOrEmpty(answer.FirstImageUrl) ? ImageUrl : answer.FirstImageUrl;
            ViewBag.og_title = question.Title;
            ViewBag.og_description = answer.Text;
            ViewBag.questionUrl = Startup.Url + "question/detail/" + question.Id.ToString();
            ViewBag.og_url = Startup.Url + "SocialShare/ShareAnswerInSocialMedia/" + answer.Id.ToString(); 
            ViewBag.og_image = imageUrl;
            return View();
        }
        public IActionResult ShareBlog(Guid id)
        {
            BlogPost blogPost = null;
            String blogQuery = String.Format(@"select * from [Blog].[BlogPosts] where Id='{0}' ", id);
            using (IDbConnection connection = new SqlConnection(Startup.ConnectionString))
            {
                blogPost = connection.Query<BlogPost>(blogQuery).FirstOrDefault();
            }
            var firstImageUrl = Regex.Match(blogPost.Description, "<img.+?src=[\"'](.+?)[\"'].+?>", RegexOptions.IgnoreCase).Groups[1].Value;
            if (blogPost != null)
            {
                string htmlDocument = blogPost.Description;
                var imgTags = Base64Image.GetImagesInHTMLString(blogPost.Description);

                foreach (var imgTag in imgTags)
                {
                    htmlDocument = blogPost.Description.Replace(imgTag, "");
                }
                HtmlDocument htmlDoc = new HtmlDocument();
                htmlDoc.LoadHtml(htmlDocument);
                blogPost.Description = htmlDoc.DocumentNode.InnerText;
            }
            
            
            ViewBag.og_title = blogPost.Title;
            ViewBag.og_description = blogPost.Description;
            ViewBag.questionUrl = Startup.Url + "dashboard/blog-post/" + blogPost.BlogId.ToString();
            ViewBag.og_url = Startup.Url + "SocialShare/ShareBlog/" + blogPost.Id.ToString();
            ViewBag.og_image =string.IsNullOrEmpty(firstImageUrl)? ImageUrl: firstImageUrl;

            return View();
        }

    }
}
