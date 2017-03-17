﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Questions.Domain;

namespace AltaPerspectiva.Web.Areas.Admin.Models
{
    public class TopicViewModel
    {
        [Required]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Topic Name cannot be longer than 100 characters and less than 2 characters")]
        public String TopicName { get; set; }
        [Required]
        public Guid CategoryId { get; set; }
        public String CategoryName { get; set; }

        public IEnumerable<Topic> Topics { get; set; }
    }
   
}
