using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Helpers
{
    public static class Utilities
    {
        public static string AddQuestionMarks(this string stringValue)
        {
            return "¿" + stringValue + "?";
        }

        public static string AddHttpToText(string text)
        {
            if (String.IsNullOrEmpty(text))
            {
                return text;
            }
            HtmlAgilityPack.HtmlDocument doc = new HtmlAgilityPack.HtmlDocument();
            doc.LoadHtml(text);
            foreach (var a in doc.DocumentNode.Descendants("a"))
            {
                var hrefVlaue = a.Attributes["href"].Value;
                if (!(hrefVlaue.Contains("http://") || hrefVlaue.Contains("https://")))
                {
                    a.Attributes["href"].Value = "http://" + hrefVlaue;
                }
            }
            var newContent = doc.DocumentNode.OuterHtml;
            return newContent;
        }

        public static string AddHttpToSocialLink(string text)
        {
            if (string.IsNullOrEmpty(text))
            {
                return text;
            }
            if (!(text.Contains("http://") || text.Contains("https://")))
            {
                return "http://" + text;
            }
            return text;
        }
    }
}
