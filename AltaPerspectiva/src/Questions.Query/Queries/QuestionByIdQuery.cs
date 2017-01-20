using System;
using System.Collections.Generic;
using  Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
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
            return DbContext.Questions.Include(qt=>qt.QuestionTopics)
                            .Include(q=>q.Answers).ThenInclude(a=>a.Comments)
                            .Include(q => q.Answers).ThenInclude(a => a.Likes)
                            .Include(q=>q.Comments)
                            .Include(q=>q.Likes)
                            .Include(q=>q.Categories)
                                .ThenInclude(c=>c.Category)                
                            .Where(q=>q.Id == id)
                            .FirstOrDefault(); 
        }
    }
}