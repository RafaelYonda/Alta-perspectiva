﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class UpdateCredentialCommand : ICommand
    {
        
        public UpdateCredentialCommand(Guid credentialId, String firstName, String lastName, String title, String description, String imageUrl)
        {
            CredentialId = credentialId;
            FirstName = firstName;
            LastName = lastName;
            Title = title;
            Description = description;
            ImageUrl = imageUrl;

        }
        public Guid Id { get; set; }
        public Guid CredentialId { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String ImageUrl { get; set; }
    }
}