using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using Questions.Domain;
using UserProfile.Domain.ReadModel;
using Questions.Query;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class FilterService
    {
        public async Task<IEnumerable<Question>> GetFilteredQuestions(FilterParameter filterParameter, IQueryFactory queryFactory)
        {
            IEnumerable<Question> questions=new List<Question>();
            Guid? categoryId = filterParameter.CategoryId;
            Guid? topicId = filterParameter.TopicId;
            Guid? levelId = filterParameter.LevelId;


             // Filter by Category ,Topic and level
            if (categoryId.HasValue && topicId.HasValue && levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilterbyCategoryTopicandlevel(categoryId.Value, topicId.Value, levelId.Value);
            }
            //Filter by category AND TOPIC
            else if (categoryId.HasValue && topicId.HasValue && !levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilterbycategoryANDTOPIC(categoryId.Value, topicId.Value);

            }
            //Filter by category and level
            else if (categoryId.HasValue && !topicId.HasValue && levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .Filterbycategoryandlevel(categoryId.Value, levelId.Value);

            }
            //Filter by Topic and level
            else if (!categoryId.HasValue && topicId.HasValue && levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilterbyTopicAndLevel(topicId.Value, levelId.Value);

            }
            //Filter by category only
            else if (categoryId.HasValue && !topicId.HasValue && !levelId.HasValue)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .Filterbycategoryonly(categoryId.Value);

            }

            //Filtered by topic only
            else if (!categoryId.HasValue && topicId.HasValue && !levelId.HasValue)
            {
                questions =
                     await queryFactory.ResolveQuery<IQuestionsQuery>()
                         .Filteredbytopiconly(topicId.Value);

            }
            //Filtered by level only
            else if (!categoryId.HasValue && !topicId.HasValue && levelId.HasValue)
            {
                questions =
                     await queryFactory.ResolveQuery<IQuestionsQuery>()
                         .Filteredbylevelonly(levelId.Value);

            }
            //Filtered General Category only
            else //(categoryId == emptyGuid && topicId == emptyGuid && levelId == emptyGuid)
            {
                questions =
                    await queryFactory.ResolveQuery<IQuestionsQuery>()
                        .FilteredGeneralCategoryonly();

            }

            return questions;
        }
    }
}
