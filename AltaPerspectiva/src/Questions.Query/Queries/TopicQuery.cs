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
            return DbContext.Topics
                .Where(x => x.CategoryId == categoryId && x.IsDeleted==null)
                .ToList();
        }

        public async Task<IEnumerable<Topic>> GetTopicsByCategoryId(Guid categoryId)
        {
            return await DbContext.Topics.Where(x => x.CategoryId == categoryId && x.IsDeleted == null).ToListAsync();
        }

        public Topic GetTopicByTopicId(Guid topicId)
        {
            return DbContext.Topics.FirstOrDefault(x => x.Id == topicId);
        }

        public async Task<IEnumerable<Topic>> GetTopFiveTopicsByCategoryId(Guid categoryId)
        {
            return await DbContext.Topics
                .Where(x => x.CategoryId == categoryId && x.QuestionTopics.Any(t=>t.TopicId==x.Id) && x.IsDeleted == null)
                .OrderBy(x => x.TopicName)
                .ToListAsync();

        }

        public async Task<IEnumerable<Topic>> GetTopicsWithQuestion()
        {
            return 
                await DbContext.Topics
                .Include(x => x.Category)
                .Where(x=>x.QuestionTopics.Any(t=>t.TopicId==x.Id) && x.IsDeleted==null)
                .OrderBy(x => x.TopicName)
                .ToListAsync();
        }

        public async Task<IEnumerable<Topic>> GetRelatedTopicsByTopicId(Guid topicId)
        {
            var categoryId = DbContext.Topics.Where(x => x.Id == topicId).Select(y=>y.CategoryId).FirstOrDefault();

            return await DbContext.Topics.Where(x => x.CategoryId == categoryId &&x.Id!=topicId && x.IsDeleted == null).ToListAsync();
        }

        public List<Topic> GetAllTopics()
        {
            return DbContext.Topics.ToList();
        }

        public bool IsTopicExists(string topicName, Guid categoryId)
        {
            return DbContext.Topics
                .Where(x=>x.IsDeleted==null && x.CategoryId==categoryId)
                .Any(x => x.TopicName.ToLower() == topicName);
        }
    }
    
    
}
