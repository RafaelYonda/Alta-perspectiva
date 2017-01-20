using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Questions.Domain;
using Questions.Query.DbContext;

namespace Questions.Query.Queries
{
    public class TopicQuery : EFQueryBase<QuestionsQueryDbContext>, ITopicQuery
    {
        public TopicQuery(QuestionsQueryDbContext context)
			: base(context)
		{
        }

        public IEnumerable<Topic> GetTopics(Guid categoryId)
        {
            return DbContext.Topics.Where(x => x.CategoryId == categoryId).ToList();
        }

        public async Task<IEnumerable<Topic>> GetTopicsByCategoryId(Guid categoryId)
        {
            return await DbContext.Topics.Where(x => x.CategoryId == categoryId).ToListAsync();
        }

        public Topic GetTopicByTopicId(Guid topicId)
        {
            return DbContext.Topics.FirstOrDefault(x => x.Id == topicId);
        }

        public async Task<IEnumerable<Topic>> GetTopFiveTopicsByCategoryId(Guid categoryId)
        {
            String query = String.Format(@"select top 5 T.Id, t.TopicName ,

(select CategoryId from Questions.Topics where Id=t.Id) CategoryId,cast(cast(0 as binary) as uniqueidentifier) CreatedBy,GETDATE() CreatedOn,GETDATE() DTS,null [IsActive]
      ,null [IsDeleted]
      ,null [ModifiedBy]
      ,null [ModifiedOn]
from Questions.Topics t
join Questions.QuestionTopics qt
on t.Id = qt.TopicId
join Questions.Questions q
on q.Id = qt.QuestionId
where t.CategoryId='{0}'
GROUP BY T.Id, T.TopicName
order by SUM(q.ViewCount) DESC
", categoryId);
            return
                await DbContext.Topics.FromSql(query).ToListAsync();

        }

        public async Task<IEnumerable<Topic>> GetTopFiveTopics()
        {
            String query = String.Format(@"select top 5 T.Id, t.TopicName ,

(select CategoryId from Questions.Topics where Id=t.Id) CategoryId,cast(cast(0 as binary) as uniqueidentifier) CreatedBy,GETDATE() CreatedOn,GETDATE() DTS,null [IsActive]
      ,null [IsDeleted]
      ,null [ModifiedBy]
      ,null [ModifiedOn]
from Questions.Topics t
join Questions.QuestionTopics qt
on t.Id = qt.TopicId
join Questions.Questions q
on q.Id = qt.QuestionId

GROUP BY T.Id, T.TopicName
order by SUM(q.ViewCount) DESC
");

            return
                await DbContext.Topics.FromSql(query).ToListAsync();
        }

       
       
    }
    
    
}
