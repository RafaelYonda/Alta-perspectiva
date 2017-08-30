using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Helpers
{
    public class ThumbnailHelper
    {
        public static string thumbnailFileExtention
        {
            get { return "_thumbnail"; }
        }

        public static string ThumbnailImageName(string imageName)
        {
            string thumnailImageName = "";
            string[] array = imageName.Split('.');
            string name = array[0];
            string extension = array[1];

            thumnailImageName = name + thumbnailFileExtention + "." + extension;
            return thumnailImageName;
        }
        public ImageFormat ImageFormatFormContentType(string contentType)
        {
            //string[] array = imageName.Split('.');
            //string name = array[0];

           // string contentType = array[1];
            if (contentType == "image/x-icon")
            {
                //extension = ".ico";
                return ImageFormat.Icon;
            }
            else if (contentType == "image/jpg")
            {
                //extension = ".jpg";
                return ImageFormat.Jpeg;
            }
            else if (contentType == "image/jpeg")
            {
                //extension = ".jpeg";
                return ImageFormat.Jpeg;
            }
            else if (contentType == "image/png")
            {
                //extension = ".png";
                return ImageFormat.Png;
            }
            if (string.IsNullOrEmpty(contentType))
            {
                throw new ArgumentNullException("ImageFormatFormFileContentType exception");
            }
            return null;
        }
        public Image ThumbnailImageFromIFromFile(IFormFile imageFile)
        {
            int height = 80;
            Image image = Image.FromStream(imageFile.OpenReadStream());
            Image thumbnailImage = image.GetThumbnailImage(height, height, null, new System.IntPtr());

            return thumbnailImage;
        }
        public Image ThumbnailImageFromIFromFile(Stream stream)
        {
            int height = 80;
            Image image = Image.FromStream(stream);
            Image thumbnailImage = image.GetThumbnailImage(height, height, null, new System.IntPtr());

            return thumbnailImage;
        }
        public Stream GetStream(Image image, ImageFormat format)
        {
            //var ms = new MemoryStream();
            //img.Save(ms, format);
            //return ms;
            var stream = new System.IO.MemoryStream();
            image.Save(stream, format);
            stream.Position = 0;
            return stream;
        }

    }
}
