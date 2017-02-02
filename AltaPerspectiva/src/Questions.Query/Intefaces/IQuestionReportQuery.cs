using AltaPerspectiva.Core;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Questions.Query
{
    public interface IQuestionReportQuery : IQuery
    {
        List<QuestionReport> GetQuestionReports();
        List<QuestionReport> GetAnswerReports();
    }
}