using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Questions.Query;
using Questions.Query.Queries;
using Questions.Query.Intefaces;
using UserProfile.Query.Queries;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class QuestionService
    {

        public List<QuestionViewModel> GetQuestionViewModels(IEnumerable<Question> questionList, IQueryFactory queryFactory)
        {
            #region UserPrefetchOptimization
            List<Guid> userList = new List<Guid>();
            foreach (var question in questionList)
            {
                userList.Add(question.UserId);
                List<Guid> anserUserList = question.Answers.Select(x => x.UserId).Distinct().ToList();
                if (anserUserList.Any())
                {
                    userList.AddRange(anserUserList);
                }
                List<Guid> answerLikeUser = question.Answers.SelectMany(x => x.Likes.Select(l => l.UserId)).Distinct().ToList();
                if (answerLikeUser.Any())
                {
                    userList.AddRange(answerLikeUser);
                }

            }
            userList = userList.Distinct().ToList();
            List<UserViewModel> userViewModels = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(userList).Select(x => new UserViewModel
            {
                CredentialId = x.Id,
                UserId = x.UserId,
                Name = x.FirstName + "" + x.LastName,
                ImageUrl = x.ImageUrl,
                Occupation = x.Employments.Select(y => y.Position).Take(1).FirstOrDefault()
            }).ToList();
            #endregion

            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            foreach (var q in questionList)
            {
                var qv = new QuestionViewModel();
                qv.Id = q.Id;
                qv.Title = "¿" + q.Title + "?";
                qv.Body = q.Body;
                qv.CreatedOn = q.CreatedOn;
                qv.UserViewModel = userViewModels.Where(uv => uv.UserId == q.UserId).FirstOrDefault();
                qv.Answers = q.Answers.Where(drafted => drafted.IsDrafted != true && drafted.IsDeleted != true).OrderByDescending(y => y.Likes.Count).Take(1).Select(x =>
                                        new AnswerViewModel
                                        {
                                            Id = x.Id,
                                            Text = x.Text,
                                            AnswerDate = x.CreatedOn,
                                            UserId = x.UserId,
                                            QuestionId = x.QuestionId.Value,
                                            CreatedOn = x.CreatedOn,
                                            UserViewModel = userViewModels.Where(uv => uv.UserId == x.UserId).FirstOrDefault(),
                                            Comments = x.Comments?.Select(y => new AnswerCommentViewModel
                                            {
                                                Id = y.Id,
                                                AnswerId = y.AnswerId,
                                                CommentText = y.CommentText,
                                                UserId = y.UserID,
                                                UserViewModel = userViewModels.Where(uv => uv.UserId == y.UserID).FirstOrDefault()
                                            }).ToList(),
                                            Likes = x.Likes?.Select(z => new AnswerLikeViewModel
                                            {
                                                UserViewModel = userViewModels.Where(uv => uv.UserId == z.UserId).FirstOrDefault(),
                                                AnswerId = z.AnswerId,
                                                Id = z.Id,
                                                UserId = z.UserId
                                            }).ToList(),
                                            IsAnonymous = x.IsAnonymous

                                        }).ToList();

                qv.Likes = q.Likes.Select(l => new QuestionLikeViewModel { Id = l.Id, QuestionId = l.QuestionId.Value, UserId = l.UserId }).ToList();

                qv.Comments = q.Comments.Select(c => new QuestionCommentViewModel { Id = c.Id, CommentText = c.CommentText, QuestionId = c.QuestionID, UserId = c.UserID }).ToList();

                qv.Categories = q.Categories.Select(ct => new CategoryViewModel { Name = ct.Category.Name, Id = ct.CategoryId }).ToList();

                qv.ViewCount = q.ViewCount;

                qv.QuestionTopics = q.QuestionTopics;
                qv.QuestionLevels = q.QuestionLevels;

                qv.AnswerCount = q.Answers.Where(drafted => drafted.IsDrafted != true && drafted.IsDeleted != true).ToList().Count;
                qv.IsAnonymous = q.IsAnonymous;


                foreach (var questionTopic in qv.QuestionTopics)
                {
                    var topicId = questionTopic.TopicId;
                    if (topicId != null)
                    {
                        Topic topic = queryFactory.ResolveQuery<ITopicQuery>().GetTopicByTopicId(topicId.Value);
                        if (topic != null)
                        {
                            qv.QuestionTopicNames.Add(topic.TopicName);
                        }
                    }

                }
                foreach (var questionLevel in qv.QuestionLevels)
                {
                    var levelId = questionLevel.LevelId;
                    if (levelId != null)
                    {
                        Level level = queryFactory.ResolveQuery<ILevelQuery>().GetLevelByLevelId(levelId.Value);
                        if (level != null)
                        {
                            qv.QuestionLevelNames.Add(level.LevelName);
                        }
                    }

                }
                qv.IsDirectQuestion = q.IsDirectQuestion;
                if (qv.IsDirectQuestion)
                {
                    qv.QuestionAskedToUser =
                        queryFactory.ResolveQuery<IDirectQuestionQuery>().GetDirectQuestionUser(q.Id);
                }
                questions.Add(qv);
            }

            return questions.ToList();
        }
       
        public List<QuestionCommentViewModel> GetComments(IEnumerable<Comment> commentList, IQueryFactory queryFactory)
        {
            List<QuestionCommentViewModel> commentVMs = new List<QuestionCommentViewModel>();
            foreach (var cvm in commentList)
            {
                var tmp = new QuestionCommentViewModel();
                tmp.Id = cvm.Id;
                tmp.CommentText = cvm.CommentText;
                tmp.QuestionId = cvm.QuestionID;
                tmp.UserId = cvm.UserID;
                tmp.UserViewModel = new UserService().GetUserViewModel(queryFactory, cvm.UserID);
                commentVMs.Add(tmp);
            }
            return commentVMs.ToList();
        }

        public List<AnswerCommentViewModel> GetAnswersComments(IEnumerable<Comment> commentList, IQueryFactory queryFactory)
        {
            List<AnswerCommentViewModel> commentVMs = new List<AnswerCommentViewModel>();
            foreach (var cvm in commentList)
            {
                var tmp = new AnswerCommentViewModel();
                tmp.Id = cvm.Id;
                tmp.CommentText = cvm.CommentText;
                tmp.AnswerId = cvm.AnswerId;
                tmp.UserId = cvm.UserID;
                tmp.UserViewModel = new UserService().GetUserViewModel(queryFactory, cvm.UserID);
                commentVMs.Add(tmp);
            }
            return commentVMs.ToList();
        }


        public String RemoveQuestionMark(String title)
        {
            if (!String.IsNullOrEmpty(title))
            {
                var hasQuestionMark = title.ToCharArray()[title.Length - 1] == '?';
                if (hasQuestionMark)
                {
                    title = title.TrimEnd('?');
                }
                hasQuestionMark = title.ToCharArray()[0] == '?';
                if (hasQuestionMark)
                {
                    title = title.TrimStart('?');
                }

            }
            return title;
        }
    }
}



