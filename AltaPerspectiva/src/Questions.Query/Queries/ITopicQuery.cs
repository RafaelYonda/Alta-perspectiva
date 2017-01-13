using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Questions.Domain;

namespace Questions.Query.Queries
{
    public interface ITopicQuery:IQuery
    {
        IEnumerable<Topic> GeTopics(Guid categoryId);

       // Task<IEnumerable<Topic>> GetTopicsByCategoryId(Guid categoryId);

       Topic GeTopicByTopicId(Guid topicId);

     //   Task<IEnumerable<Topic>> GetTopFiveTopicsByCategoryId(Guid categoryId);


    }
}
