namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
   // using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class UpdateKeywordCommand : ICommand
    {
        public UpdateKeywordCommand(long keywordId, string keywordName, bool? isDeleted)
        {
            // QuestionId = _questionId;     
            KeywordId = keywordId;
            KeywordName = keywordName;
            IsDeleted = isDeleted;
        }
        public Guid Id { get; set; }
        public long KeywordId { get; set; }
        public String KeywordName { get; set; }
        public bool? IsDeleted { get; set; }
    }
}

