using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;
using System;

namespace Questions.Query
{
    public class QuestionReportQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionReportQuery
    {
        public QuestionReportQuery(QuestionsQueryDbContext context)
            : base(context)
        {
        }

        public List<QuestionReport> GetAnswerReports()
        {
            return DbContext.QuestionReports.Include(q => q.Question).Include(a => a.Answer).Where(qr => qr.IsActive !=false && qr.AnswerId != null).Take(20).ToList();
        }

        public List<QuestionReport> GetQuestionReports()
        {
            return DbContext.QuestionReports.Include(q => q.Question).Include(a => a.Answer).Where(qr=>qr.IsActive!=false && qr.AnswerId==null).Take(20).ToList();
        }
    }
}