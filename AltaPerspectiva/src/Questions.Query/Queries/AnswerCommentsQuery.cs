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
	public class AnswerCommentsQuery : EFQueryBase<QuestionsQueryDbContext>, IAnswerCommentsQuery
    {
		public AnswerCommentsQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public async Task<IEnumerable<Comment>> Execute(Guid AnswerId)
        {
              return await DbContext.Comments                                    
                                    .Where(c=> c.AnswerId == AnswerId)                                  
                                    .ToListAsync();
        }
    }
}