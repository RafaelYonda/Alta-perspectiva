namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddTopicCommand : ICommand
    {
        public AddTopicCommand(string topicName, Guid categoryId)
        {
            TopicName = topicName;
            CategoryId = categoryId;
        }    
       
        public Guid Id { get;  set; }
        public Guid CategoryId { get;  set; }
        public String TopicName { get;  set; }
         
    }
}

