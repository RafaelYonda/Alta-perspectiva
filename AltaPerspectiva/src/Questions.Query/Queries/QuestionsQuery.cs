using System.Collections.Generic;
using  Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;


namespace Questions.Query
{
	public class QuestionsQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsQuery
    {
		public QuestionsQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public IEnumerable<Question> Execute()
        {
            return DbContext.Questions; 
        }
    }
}