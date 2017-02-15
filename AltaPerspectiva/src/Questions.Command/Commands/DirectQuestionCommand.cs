using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace Questions.Command.Commands
{
    public class DirectQuestionCommand:ICommand
    {
        public DirectQuestionCommand(string _title, string _body, DateTime _date, Guid _userId, List<Guid> _categoryIds, Guid? topicId, Guid? levelId, bool? isAnonymous, bool isDirectQuestion,Guid questionAskedToUser)
        {
            Title = _title;
            Body = _body;
            Date = _date;
            UserId = _userId == null ? (new System.Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba")) : _userId;
            CategoryIds = _categoryIds == null ? (new List<Guid>()) : _categoryIds;
            TopicId = topicId;
            LevelId = levelId;
            IsAnonymous = isAnonymous;
            IsDirectQuestion = isDirectQuestion;
            QuestionAskedToUser = questionAskedToUser;
        }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime Date { get; set; }
        public Guid Id { get; set; }
        public List<Guid> CategoryIds { get; set; }
        public Guid UserId { get; set; }
        
        public Guid? TopicId { get; set; }
        public Guid? LevelId { get; set; }
        public bool? IsAnonymous { get; set; }
        public bool IsDirectQuestion { get; set; }
        public Guid QuestionAskedToUser { get; set; }
    }
}
