namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class UpdateTopicCommand : ICommand
    {
        public UpdateTopicCommand(Guid topicId,string topicName,bool? isDeleted)
        {   
           // QuestionId = _questionId;     
            TopicId = topicId;
            TopicName = topicName;
            IsDeleted = isDeleted;
        }
        public Guid Id { get; set; }        
        public Guid TopicId { get; set; }        
        public String TopicName { get; set; }      
        public bool? IsDeleted { get; set; }
    }
}

