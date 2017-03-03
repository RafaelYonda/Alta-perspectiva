using AltaPerspectiva.Core;
using Questions.Domain;
using System;
using System.Collections.Generic;

namespace Questions.Query
{
    public interface ICategoriesTotalQuestionsQuery : IQuery
    {
        int Execute(Guid CategoryId);//TotalQuestions
        int TotalAnsweredQuestionCount(Guid categoryId);
        int TotalUnAnsweredQuestionCount(Guid categoryId);
    }
}