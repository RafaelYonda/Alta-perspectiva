﻿using System;
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
    }
    
    
}