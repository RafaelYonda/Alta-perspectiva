using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionsQuery:IQuery
    {
        Task<IEnumerable<Question>> Execute();
        Task<IEnumerable<Question>> ExecuteByUserId(Guid userId);
        Task<IEnumerable<Question>> GetLatestQuestion(Guid UserId, Guid categoryId);
        
        Task<IEnumerable<Question>> GetTopFiveQuestion();

        Task<IEnumerable<Question>> GetTopFiveQuestionByCategoryId(Guid categoryId);

        Task<IEnumerable<Question>> GetQuestionByTopciNCategoryId(Guid topicId,Guid categoryId);

        Task<IEnumerable<Question>> GetBookmark(Guid userId);


        //Question Home page
        Task<IEnumerable<Question>> GetMoreViewedQuestionByViewCount(Guid categoryId);

        Task<IEnumerable<Question>> GetBestQuestionbyTotalLike(Guid categoryId);

        /*Filter !!!!!!*/

        //Filter by Category ,Topic   and level
         //if (categoryId != emptyGuid && topicId != emptyGuid && levelId != emptyGuid)
        Task<IEnumerable<Question>> FilterbyCategoryTopicandlevel(Guid categoryId,Guid topicId,Guid levelId);
        //Filter by category AND TOPIC
        //else if (categoryId != emptyGuid && topicId != emptyGuid && levelId == emptyGuid)
        Task<IEnumerable<Question>> FilterbycategoryANDTOPIC(Guid categoryId, Guid topicId);

         //Filter by category and level
         // else if (categoryId != emptyGuid && topicId == emptyGuid && levelId != emptyGuid)
        Task<IEnumerable<Question>> Filterbycategoryandlevel(Guid categoryId, Guid levelId);
        //Filter by level and topic
        //else if (categoryId == emptyGuid && topicId != emptyGuid && levelId != emptyGuid)
        Task<IEnumerable<Question>> FilterbyTopicAndLevel( Guid topicId, Guid levelId);
        //Filter by category only
        //    else if (categoryId != emptyGuid && topicId == emptyGuid && levelId == emptyGuid)
        Task<IEnumerable<Question>> Filterbycategoryonly(Guid categoryId);
        //Filtered by topic only
       // else if (categoryId == emptyGuid && topicId != emptyGuid && levelId == emptyGuid)
        Task<IEnumerable<Question>> Filteredbytopiconly(Guid topicId);
        //Filtered by level only
       //else if (categoryId == emptyGuid && topicId == emptyGuid && levelId != emptyGuid)
        Task<IEnumerable<Question>> Filteredbylevelonly( Guid levelId);
        //Filtered General Category only
        //    else //(categoryId == emptyGuid && topicId == emptyGuid && levelId == emptyGuid)
        Task<IEnumerable<Question>> FilteredGeneralCategoryonly();
    }
}