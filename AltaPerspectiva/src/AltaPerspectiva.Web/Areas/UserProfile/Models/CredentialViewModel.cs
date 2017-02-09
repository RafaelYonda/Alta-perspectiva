﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class CredentialViewModel
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int? ProfileViewCount { get; set; }

        public virtual ICollection<Education> Educations { get; set; }
        public virtual ICollection<Employment> Employments { get; set; }
        public virtual ICollection<Follower> Followers { get; set; }
        public virtual ICollection<Following> Followings { get; set; }
        public virtual ICollection<Place> Places { get; set; }
    }
}