using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questions.Query;
using Questions.Query.Queries;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class QuestionService
    {
        public List<QuestionViewModel> GetQuestionViewModel(IEnumerable<Question> questionList, IQueryFactory queryFactory)
        {
            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            foreach (var q in questionList)
            {
                var qv = new QuestionViewModel();
                qv.Id = q.Id;
                qv.Title = q.Title;
                qv.Body = q.Body;
                qv.CreatedOn = q.CreatedOn;
                qv.UserViewModel = new UserService().GetUserViewModel(queryFactory, q.UserId);
                qv.Answers = q.Answers.OrderByDescending(y => y.Likes.Count).Take(1).Select(x =>
                                      new AnswerViewModel
                                      {
                                          Id = x.Id,
                                          Text = x.Text,
                                          AnswerDate = x.CreatedOn,
                                          UserId = x.UserId,
                                          QuestionId = x.QuestionId.Value,
                                          CreatedOn = x.CreatedOn,
                                          UserViewModel = new UserService().GetUserViewModel(queryFactory, x.UserId),
                                          Comments = x.Comments?.Select(y => new AnswerCommentViewModel { Id = y.Id, AnswerId = y.AnswerId, CommentText = y.CommentText, UserId = y.UserID, UserViewModel = new UserService().GetUserViewModel(queryFactory, y.UserID) }).ToList(),
                                          Likes = x.Likes?.Select(z => new AnswerLikeViewModel
                                          {
                                              UserViewModel = new UserService().GetUserViewModel(queryFactory, z.UserId),
                                              AnswerId = z.AnswerId,
                                              Id = z.Id,
                                              UserId = z.UserId
                                          }).ToList()

                                      }).ToList();

                qv.Likes = q.Likes.Select(l => new QuestionLikeViewModel { Id = l.Id, QuestionId = l.QuestionId.Value, UserId = l.UserId }).ToList();

                qv.Comments = q.Comments.Select(c => new QuestionCommentViewModel { Id = c.Id, CommentText = c.CommentText, QuestionId = c.QuestionID, UserId = c.UserID }).ToList();

                qv.Categories = q.Categories.Select(ct => new CategoryViewModel { Name = ct.Category.Name, Id = ct.CategoryId }).ToList();

                qv.ViewCount = q.ViewCount;

                qv.QuestionTopics = q.QuestionTopics;
                qv.QuestionLevels = q.QuestionLevels;

                qv.AnswerCount = q.Answers.Count;
                foreach (var questionTopic in qv.QuestionTopics)
                {
                    var topicId = questionTopic.TopicId;
                    if (topicId != null)
                    {
                        Topic topic = queryFactory.ResolveQuery<ITopicQuery>().GeTopicByTopicId(topicId.Value);
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
                questions.Add(qv);
            }

            return questions.ToList();
        }



        public QuestionViewModel GetQuestionViewModel(Question question, IQueryFactory queryFactory)
        {
            var q = question;
            var qv = new QuestionViewModel();
            qv.Id = q.Id;
            qv.Title = q.Title;
            qv.Body = q.Body;
            qv.CreatedOn = q.CreatedOn;
            qv.UserViewModel = new UserService().GetUserViewModel(queryFactory, q.UserId);
            qv.Answers = q.Answers.Select(x =>
                                new AnswerViewModel
                                {
                                    Id = x.Id,
                                    Text = x.Text,
                                    Comments = x.Comments?.Select(y => new AnswerCommentViewModel { Id = y.Id, AnswerId = y.AnswerId, CommentText = y.CommentText, UserId = y.UserID, UserViewModel = new UserService().GetUserViewModel(queryFactory, y.UserID) }).ToList(),
                                    AnswerDate = x.AnswerDate,
                                    UserId = x.UserId,
                                    QuestionId = x.QuestionId.Value,
                                    CreatedOn = x.CreatedOn,
                                    UserViewModel = new UserService().GetUserViewModel(queryFactory, x.UserId),
                                    Likes = x.Likes?.Select(z => new AnswerLikeViewModel
                                    {
                                        UserViewModel = new UserService().GetUserViewModel(queryFactory, z.UserId),
                                        AnswerId = z.AnswerId,
                                        Id = z.Id,
                                        UserId = z.UserId
                                    }).ToList()
                                }).ToList();

            qv.Likes = q.Likes.Select(l => new QuestionLikeViewModel { Id = l.Id, QuestionId = l.QuestionId.Value, UserId = l.UserId, UserViewModel = new UserService().GetUserViewModel(queryFactory, q.UserId) }).ToList();

            qv.Comments = q.Comments.Select(c => new QuestionCommentViewModel { Id = c.Id, CommentText = c.CommentText, QuestionId = c.QuestionID, UserId = c.UserID, UserViewModel = new UserService().GetUserViewModel(queryFactory, c.UserID) }).ToList();

            qv.Categories = q.Categories.Select(ct => new CategoryViewModel { Name = ct.Category.Name, Id = ct.CategoryId }).ToList();


            qv.ViewCount = q.ViewCount;
            qv.AnswerCount = q.Answers.Count;

            qv.QuestionTopics = q.QuestionTopics;
            qv.QuestionLevels = q.QuestionLevels;


            foreach (var questionTopic in qv.QuestionTopics)
            {
                var topicId = questionTopic.TopicId;
                if (topicId != null)
                {
                    Topic topic = queryFactory.ResolveQuery<ITopicQuery>().GeTopicByTopicId(topicId.Value);

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

            return qv;
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
    }
}



