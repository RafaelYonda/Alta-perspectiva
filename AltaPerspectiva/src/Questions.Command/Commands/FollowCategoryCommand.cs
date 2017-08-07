namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
   // using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class FollowCategoryCommand : ICommand
    {
        public FollowCategoryCommand(Guid _categoryId,Guid _userId)
        {    
            UserId = _userId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : _userId;
            CategoryId = _categoryId;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid CategoryId { get; set; }
    }
}

