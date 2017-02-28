using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using UserProfile.Domain;
using System.ComponentModel.DataAnnotations;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class AddVirtualStoreViewModel
    {
        public Guid Id { get; set; }
        [Range(0, Double.MaxValue, ErrorMessage = "Please enter a value bigger than {1}")]
        public double Price { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [ValidateFile(ErrorMessage = "Please select a jpeg/png format, smaller than 512 kb")]
        public IFormFile ScreenShotImage { get; set; }
        public string ScreenShotFileName { get; set; }
        [ValidateRequired(ErrorMessage = "Please insert a file")]
        public IFormFile ProductFile { get; set; }
        public string ProductFileName { get; set; }
        public List<VirtualStore> VirtualStores { get; set; }
    }
    public class ValidateRequiredAttribute : RequiredAttribute
    {
        public override bool IsValid(object value)
        {
            var file = value as IFormFile;
            if (file == null)
            {
                return false;
            }
            return true;

        }
    }
}
