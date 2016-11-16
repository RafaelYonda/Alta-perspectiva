using System.Collections.Generic;
using System.Linq;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;

namespace EFDataAccess.Queries
{
	public class QuestionsQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionsQuery
    {
		public QuestionsQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

		//public IEnumerable<Questions> Execute()
		//{
		//	return DbContext
		//		.Users
		//		.Where(x => x.IsActive)
		//		.ToArray();
		//}
	}
}