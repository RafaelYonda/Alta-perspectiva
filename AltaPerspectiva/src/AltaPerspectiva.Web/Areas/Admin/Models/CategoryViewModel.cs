using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class CategoryViewModel
    {
        public Guid Id { get; set; }
        [Required]
        [RegularExpression(@"[a-zA-Z-\s0-9]{1,40}$",ErrorMessage = "Invalid category name")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Category Name cannot be longer than 100 characters and less than 2 characters")]
        public string Name { get; set; }
        [Required]
        public string Icon { get; set; }
        // public string Active { get; set; }
        [Required]
        public string Description { get; set; }
        //  public int Sequence { get; set; }
        [ValidateFile(ErrorMessage = "Please select a jpeg/png format, smaller than 512 kb")]
        public IFormFile Image { get; set; }

        public String ImagePath { get; set; }
    }
    public class ValidateFileAttribute : RequiredAttribute
    {
        public override bool IsValid(Object value)
        {
            var file = value as FormFile;
            if (file == null)
            {
                return false;
            }

            if (file.Length > 1 * 1024 * 512 || !(file.ContentType == "image/jpeg" || file.ContentType == "image/png"))
            {
                return false;
            }

            return true;
        }
    }
}
