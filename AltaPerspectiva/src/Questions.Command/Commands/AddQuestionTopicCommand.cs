namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
   // using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddQuestionTopicCommand : ICommand
    {
        public AddQuestionTopicCommand(Guid questionId, Guid topicId)
        {
            QuestionId = questionId;
            TopicId = topicId;
        }    
       
        public Guid Id { get;  set; }
        public Guid QuestionId { get;  set; }
        public Guid TopicId { get;  set; }
        
         
    }
}

