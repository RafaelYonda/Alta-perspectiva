using System;
using System.Collections.Generic;
using  Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;


namespace Questions.Query
{
	public class QuestionByIdQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionByIdQuery
    {
		public QuestionByIdQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public Question Execute(Guid id)
        {
            return DbContext.Questions
                .Include(q=>q.Answers)
                .Include(q=>q.Comments)
                .Include(q=>q.Categories)                
                .Where(q=>q.Id == id)
                .SingleOrDefault(); 
        }
    }
}