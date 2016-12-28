using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class QuestionService
    {
        public List<QuestionViewModel> GetQuestionViewModel(IEnumerable<Question> questionList, IQueryFactory queryFactory, Guid loggedinUser)
        {
            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            foreach (var q in questionList)
            {
                var qv = new QuestionViewModel();
                qv.Id = q.Id;
                qv.Title = q.Title;
                qv.Body = q.Body;
                qv.UserViewModel = new UserService().GetUserViewModel(queryFactory, q.UserId);
                qv.Answers = q.Answers.Select(x =>
                                    new AnswerViewModel
                                    {
                                        Id = x.Id,
                                        Text = x.Text,
                                        Comments = x.Comments?.Select(y => new AnswerCommentViewModel { Id = y.Id, AnswerId = y.AnswerId, CommentText = y.CommentText, UserId = y.UserID }).ToList(),
                                        AnswerDate = x.AnswerDate,
                                        UserId = x.UserId,
                                        QuestionId = x.QuestionId.Value
                                    }).ToList();

                qv.Likes = q.Likes.Select(l => new QuestionLikeViewModel { Id = l.Id, QuestionId = l.QuestionId.Value, UserId = l.UserId, UserViewModel = new UserService().GetUserViewModel(queryFactory, q.UserId) }).ToList();

                qv.Comments = q.Comments.Select(c => new QuestionCommentViewModel { Id = c.Id, CommentText = c.CommentText, QuestionId = c.QuestionID, UserId = c.UserID, UserViewModel = new UserService().GetUserViewModel(queryFactory, c.UserID.Value) }).ToList();

                qv.Categories = q.Categories.Select(ct => new CategoryViewModel { Name = ct.Category.Name, Id = ct.CategoryId }).ToList();

                questions.Add(qv);
            }

            return questions.ToList();
        }
    }
}
