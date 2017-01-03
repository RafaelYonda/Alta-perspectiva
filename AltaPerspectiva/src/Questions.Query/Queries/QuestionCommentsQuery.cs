using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;
using System;

namespace Questions.Query
{
	public class QuestionCommentsQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionCommentsQuery
    {
		public QuestionCommentsQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Comment>> Execute(Guid QuestionId)
        {
              return await DbContext.Comments                                    
                                    .Where(c=>c.QuestionID == QuestionId && c.AnswerId == null)                                  
                                    .ToListAsync();
        }
    }
}