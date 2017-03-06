using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Helpers
{
    public class Base64Image
    {
        public static Base64Image Parse(string base64Content)
        {
            if (string.IsNullOrEmpty(base64Content))
            {
                throw new ArgumentNullException(nameof(base64Content));
            }

            int indexOfSemiColon = base64Content.IndexOf(";", StringComparison.OrdinalIgnoreCase);

            string dataLabel = base64Content.Substring(0, indexOfSemiColon);

            string contentType = dataLabel.Split(':').Last();

            var startIndex = base64Content.IndexOf("base64,", StringComparison.OrdinalIgnoreCase) + 7;
            //For last tow caracter
            base64Content = base64Content.Remove(base64Content.Length - 2);

            var fileContents = base64Content.Substring(startIndex);

            var bytes = Convert.FromBase64String(fileContents);

            String extension = String.Empty;
            if (contentType == "image/x-icon")
            {
                extension = ".ico";
            }
            else if (contentType == "image/jpg")
            {
                extension = ".jpg";
            }
            else if (contentType == "image/jpeg")
            {
                extension = ".jpeg";
            }
            else if (contentType == "image/png")
            {
                extension = ".png";
            }

            var baseStream = new MemoryStream(bytes);
            return new Base64Image
            {
                ContentType = contentType,
                FileContents = bytes,
                Extension = extension,
                baseStream = baseStream
            };

        }

        public string ContentType { get; set; }
        public string Extension { get; set; }
        public Stream baseStream;
        public byte[] FileContents { get; set; }

        public override string ToString()
        {
            return $"data:{ContentType};base64,{Convert.ToBase64String(FileContents)}";
        }
        public static List<string> GetImagesInHTMLString(string htmlString)
        {
            List<string> images = new List<string>();
            string pattern = @"<(img)\b[^>]*>";

            Regex rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            MatchCollection matches = rgx.Matches(htmlString);

            for (int i = 0, l = matches.Count; i < l; i++)
            {
                images.Add(matches[i].Value);
            }

            return images;
        }
    }
}
