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

        public IEnumerable<Topic> GeTopics(Guid categoryId)
        {
            return DbContext.Topics.Where(x => x.CategoryId == categoryId).ToList();
        }

        public async Task<IEnumerable<Topic>> GetTopicsByCategoryId(Guid categoryId)
        {
            return await DbContext.Topics.Where(x => x.CategoryId == categoryId).ToListAsync();
        }

        public Topic GeTopicByTopicId(Guid topicId)
        {
            return DbContext.Topics.FirstOrDefault(x => x.Id == topicId);
        }

        //public Task<IEnumerable<Topic>> GetTopFiveTopicsByCategoryId(Guid categoryId)
        //{
            
        //}
    }
    
    
}
