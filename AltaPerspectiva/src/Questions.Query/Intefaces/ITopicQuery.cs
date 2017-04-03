﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Questions.Domain;

namespace Questions.Query.Queries
{
    public interface ITopicQuery : IQuery
    {
        IEnumerable<Topic> GetTopics(Guid categoryId);

        Task<IEnumerable<Topic>> GetTopicsByCategoryId(Guid categoryId);

        Topic GetTopicByTopicId(Guid topicId);

        Task<IEnumerable<Topic>> GetTopicsWithQuestion();
        Task<IEnumerable<Topic>> GetTopFiveTopicsByCategoryId(Guid categoryId);

        Task<IEnumerable<Topic>> GetRelatedTopicsByTopicId(Guid topicId);

        List<Topic> GetAllTopics();

        Boolean IsTopicExists(string topicName,Guid categoryId);


    }
}
