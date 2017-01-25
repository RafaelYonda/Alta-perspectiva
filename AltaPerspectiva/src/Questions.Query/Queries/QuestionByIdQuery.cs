using System;
using System.Collections.Generic;
using  Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;


namespace Questions.Query
{
	public class QuestionByIdQuery : EFQueryBase<QuestionsQueryDbContext>, IQuestionByIdQuery
    {
		public QuestionByIdQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}

        public Question Execute(Guid questionId)
        {
            return DbContext.Questions.Include(qt=>qt.QuestionTopics)
                            .Include(q=>q.Answers).ThenInclude(a=>a.Comments)
                            .Include(q => q.Answers).ThenInclude(a => a.Likes)
                            .Include(q=>q.Comments)
                            .Include(q=>q.Likes)
                            .Include(q=>q.Categories)
                                .ThenInclude(c=>c.Category)                
                            .Where(q=>q.Id == questionId)
                            .FirstOrDefault(); 
        }

        //public Question GetBestAnswer(Guid questionId)
        //{
        //    return DbContext.Questions.Include(qt => qt.QuestionTopics)
        //                    .Include(q => q.Answers).ThenInclude(a => a.Comments)
        //                    .Include(q => q.Answers).ThenInclude(a => a.Likes)
        //                    .OrderByDescending(b=>b.Likes.Count) //added for best liked answer
        //                    .Include(q => q.Comments)
        //                    .Include(q => q.Likes)
        //                    .Include(q => q.Categories)
        //                        .ThenInclude(c => c.Category)
        //                    .Where(q => q.Id == questionId)
                            
        //                    .FirstOrDefault();
        //}

        //public Question GetLatestAnswer(Guid questionId)
        //{
        //    return DbContext.Questions.Include(qt => qt.QuestionTopics)
        //                    .Include(q => q.Answers).ThenInclude(a => a.Comments)
        //                    .Include(q => q.Answers).ThenInclude(a => a.Likes)
                           
        //                    .Include(q => q.Comments)
        //                    .Include(q => q.Likes)
        //                    .Include(q => q.Categories)
        //                        .ThenInclude(c => c.Category)
        //                    .Where(q => q.Id == questionId)
        //                    .OrderByDescending(a=>a.Answers.OrderBy(d=>d.AnswerDate.Date).ThenBy(h=>h.AnswerDate.Hour).ThenBy(m=>m.AnswerDate.Minute).ThenBy(s=>s.AnswerDate.Second))
        //                    .FirstOrDefault();
        //}
    }
}