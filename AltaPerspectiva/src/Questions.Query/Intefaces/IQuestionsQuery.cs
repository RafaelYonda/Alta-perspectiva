using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using AltaPerspectiva.Core.SpecificationPattern;

namespace Questions.Query
{
    public interface IQuestionsQuery:IQuery
    {
        Task<IEnumerable<Question>> Execute();
        Task<IEnumerable<Question>> ExecuteDirectQuestion(Guid questionAskedToUser);
        Task<IEnumerable<Question>> ExecuteByUserId(Guid userId);
        Task<IEnumerable<Question>> GetLatestQuestion(Guid UserId, Guid categoryId);
        
        Task<IEnumerable<Question>> GetTopFiveQuestion();

        Task<IEnumerable<Question>> GetTopFiveQuestionByCategoryId(Guid categoryId);

        Task<IEnumerable<Question>> GetQuestionByTopciNCategoryId(Guid topicId,Guid categoryId);

        Task<IEnumerable<Question>> GetBookmark(Guid userId);


        //Question Home page
        Task<IEnumerable<Question>> GetMoreViewedQuestionByViewCount(Guid categoryId);

        Task<IEnumerable<Question>> GetBestQuestionbyTotalLike(Guid categoryId);
        
        //Drafted Questions
        IEnumerable<Question> DraftedQuestionAnswers(Guid userId);

        //GEtQuestion For Email
        Question QuestionForEmail(Guid questionId);

        //GEt postedQuestion Aka Shared Question
        Task<IEnumerable<Question>> GetSharedQuestion(Guid userId);

        Task<IEnumerable<Question>> Filter(Specification<Question> specification );
    }
}