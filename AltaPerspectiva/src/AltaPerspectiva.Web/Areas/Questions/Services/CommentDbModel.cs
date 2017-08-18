using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class CommentDbModel
    {
        public Guid Id { get; set; }
        public string CommentText { get; set; }
        public Guid? QuestionId { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Occupation { get; set; }
        public string ImageUrl { get; set; }
        public Guid CredentialId { get; set; }

        public string Email { get; set; }
    }
}
