using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AltaPerspectiva.Core.SpecificationPattern;
using Questions.Domain;

namespace Questions.Query.Specifications
{
    public class QuestionFilterSpecification : Specification<Question>
    {
        private Guid? categoryId;
        private Guid? topicId;
        private Guid? levelId;

        public QuestionFilterSpecification(Guid? categoryId, Guid? topicId, Guid? levelId)
        {
            this.categoryId = categoryId;
            this.topicId = topicId;
            this.levelId = levelId;
        }

        public override Expression<Func<Question, bool>> ToExpression()
        {
            // Filter by Category ,Topic and level
            if (categoryId.HasValue && topicId.HasValue && levelId.HasValue)
            {
                return  q =>
                    q.Categories.Any(c => c.CategoryId == categoryId) &&
                    q.QuestionTopics.Any(qt => qt.TopicId == topicId) &&
                    q.QuestionLevels.Any(ql => ql.LevelId == levelId) && q.IsDeleted != true &&
                    q.IsDirectQuestion == false;
            }
            //Filter by category AND TOPIC
            else if (categoryId.HasValue && topicId.HasValue && !levelId.HasValue)
            {
                return
                    q =>
                        q.Categories.Any(c => c.CategoryId == categoryId) &&
                        q.QuestionTopics.Any(qt => qt.TopicId == topicId) && q.IsDeleted != true &&
                        q.IsDirectQuestion == false;

            }
            //Filter by category and level
            else if (categoryId.HasValue && !topicId.HasValue && levelId.HasValue)
            {
                return
                    q =>
                        q.Categories.Any(c => c.CategoryId == categoryId) &&
                        q.QuestionLevels.Any(ql => ql.LevelId == levelId) && q.IsDeleted != true &&
                        q.IsDirectQuestion == false;

            }
            //Filter by Topic and level
            else if (!categoryId.HasValue && topicId.HasValue && levelId.HasValue)
            {
                return
                    q =>
                        q.QuestionTopics.Any(qt => qt.TopicId == topicId) &&
                        q.QuestionLevels.Any(ql => ql.LevelId == levelId) && q.IsDirectQuestion == false && q.IsDeleted != true ;

            }
            //Filter by category only
            else if (categoryId.HasValue && !topicId.HasValue && !levelId.HasValue)
            {
                return
                    q =>
                        q.Categories.Any(c => c.CategoryId == categoryId) && q.IsDeleted != true &&
                        q.IsDirectQuestion == false;

            }

            //Filtered by topic only
            else if (!categoryId.HasValue && topicId.HasValue && !levelId.HasValue)
            {
                return
                    q =>
                        q.QuestionTopics.Any(qt => qt.TopicId == topicId) && q.IsDeleted != true &&
                        q.IsDirectQuestion == false;

            }
            //Filtered by level only
            else if (!categoryId.HasValue && !topicId.HasValue && levelId.HasValue)
            {
                return
                    q =>
                        q.QuestionLevels.Any(ql => ql.LevelId == levelId) && q.IsDeleted != true &&
                        q.IsDirectQuestion == false;

            }
            //Filtered General Category only
            else //(categoryId == emptyGuid && topicId == emptyGuid && levelId == emptyGuid)
            {
                return q => q.IsDeleted != true && q.IsDirectQuestion == false;

            }
        }
    }
}
