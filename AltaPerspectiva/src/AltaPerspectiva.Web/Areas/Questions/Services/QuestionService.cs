using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Microsoft.Extensions.Configuration;
using Questions.Query;
using Questions.Query.Queries;
using Questions.Query.Intefaces;
using UserProfile.Domain;
using UserProfile.Query.Queries;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class QuestionService
    {
        public QuestionViewModel GetQuestionViewModel(Question question, IQueryFactory queryFactory,IConfigurationRoot configuration)
        {
            var q = question;
            var qv = new QuestionViewModel();
            qv.Id = q.Id;
            qv.Title = "¿" + q.Title + "?";
            qv.Body = q.Body;
            qv.CreatedOn = q.CreatedOn;
            qv.UserViewModel = new UserService().GetUserViewModel(queryFactory, q.UserId, configuration);
            qv.Answers = q.Answers.Where(drafted => drafted.IsDrafted != true && drafted.IsDeleted != true).Select(x => //Drafted is nullable .so only true are drafted
                                    new AnswerViewModel
                                    {
                                        Id = x.Id,
                                        Text = x.Text,
                                        Comments = x.Comments?.Select(y => new AnswerCommentViewModel { Id = y.Id, AnswerId = y.AnswerId, CommentText = y.CommentText, UserId = y.UserID, UserViewModel = new UserService().GetUserViewModel(queryFactory, y.UserID,configuration) }).ToList(),
                                        AnswerDate = x.AnswerDate,
                                        UserId = x.UserId,
                                        QuestionId = x.QuestionId.Value,
                                        CreatedOn = x.CreatedOn,
                                        UserViewModel = new UserService().GetUserViewModel(queryFactory, x.UserId,configuration),
                                        Likes = x.Likes?.Select(z => new AnswerLikeViewModel
                                        {
                                            UserViewModel = new UserService().GetUserViewModel(queryFactory, z.UserId,configuration),
                                            AnswerId = z.AnswerId,
                                            Id = z.Id,
                                            UserId = z.UserId
                                        }
                                        ).ToList(),
                                        IsAnonymous = x.IsAnonymous,
                                        FirstImageUrl = x.FirstImageUrl
                                    }).ToList();

            qv.Likes = q.Likes.Select(l => new QuestionLikeViewModel { Id = l.Id, QuestionId = l.QuestionId.Value, UserId = l.UserId, UserViewModel = new UserService().GetUserViewModel(queryFactory, q.UserId, configuration) }).ToList();

            qv.Comments = q.Comments.Select(c => new QuestionCommentViewModel { Id = c.Id, CommentText = c.CommentText, QuestionId = c.QuestionID, UserId = c.UserID, UserViewModel = new UserService().GetUserViewModel(queryFactory, c.UserID, configuration) }).ToList();

            qv.Categories = q.Categories.Select(ct => new CategoryViewModel { Name = ct.Category.Name, Id = ct.CategoryId }).ToList();


            qv.ViewCount = q.ViewCount;
            qv.AnswerCount = q.Answers.Where(isDrafted => isDrafted.IsDrafted != true && isDrafted.IsDeleted != true).ToList().Count;

            qv.QuestionTopics = q.QuestionTopics;
            qv.QuestionLevels = q.QuestionLevels;

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
           
            return qv;
        }
        public List<QuestionViewModel> GetQuestionViewModelsForDraftAnswer(IEnumerable<Question> questionList, IQueryFactory queryFactory, IConfigurationRoot configuration)
        {
            #region UserPrefetchOptimization

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
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
            List<UserViewModel> userViewModels = new List<UserViewModel>();

            List<Credential> credentials = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(userList);

            foreach (Guid userId in userList)
            {
                Credential credential = credentials.FirstOrDefault(x => x.UserId == userId);
                if (credential != null)
                {
                    userViewModels.Add(new UserViewModel
                    {
                        CredentialId = credential.Id,
                        UserId = credential.UserId,
                        Name = credential.FirstName + "" + credential.LastName,
                        ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl),
                        Occupation = credential.Employments.Select(y => y.Position).Take(1).FirstOrDefault()
                    });
                }
                else
                {
                    //No credential .Fetech from aspNetUser
                    String connectionString =
                configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;
                    userViewModels.Add(new UserViewModel
                    {
                        Name = queryFactory.ResolveQuery<ICredentialQuery>().GetUserNameAspNetUsers(userId, connectionString),
                        ImageUrl = azureFileUploadHelper.GetProfileImage(null),
                        Occupation = "",
                        CredentialId = Guid.Empty,
                        UserId = userId
                    });

                }
            }
            #endregion

            List<Topic> topics = queryFactory.ResolveQuery<ITopicQuery>().GetAllTopics();
            List<Level> levels = queryFactory.ResolveQuery<ILevelQuery>().GetAllLevels();
            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            foreach (var q in questionList)
            {
                var qv = new QuestionViewModel();
                qv.Id = q.Id;
                qv.Title = "¿" + q.Title + "?";
                qv.Body = q.Body;
                qv.CreatedOn = q.CreatedOn;
                qv.UserViewModel = userViewModels.Where(uv => uv.UserId == q.UserId).FirstOrDefault();
                qv.Answers = q.Answers.Where(drafted => drafted.IsDrafted == true && drafted.IsDeleted != true).OrderByDescending(y => y.Likes.Count).Select(x =>
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
                                            IsAnonymous = x.IsAnonymous,
                                            IsDrafted = x.IsDrafted,
                                            FirstImageUrl = x.FirstImageUrl

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
                        // Topic topic = queryFactory.ResolveQuery<ITopicQuery>().GetTopicByTopicId(topicId.Value);
                        Topic topic = topics.FirstOrDefault(x => x.Id == topicId.Value);
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
                        //Level level = queryFactory.ResolveQuery<ILevelQuery>().GetLevelByLevelId(levelId.Value);
                        Level level = levels.FirstOrDefault(x => x.Id == levelId.Value);
                        if (level != null)
                        {
                            qv.QuestionLevelNames.Add(level.LevelName);
                        }
                    }

                }
                //qv.IsDirectQuestion = q.IsDirectQuestion;
                //if (qv.IsDirectQuestion)
                //{
                //    qv.QuestionAskedToUser =
                //        queryFactory.ResolveQuery<IDirectQuestionQuery>().GetDirectQuestionUser(q.Id);
                //}
                questions.Add(qv);
            }

            return questions.ToList();
        }
        
             public List<QuestionViewModel> GetDirectQuestionViewModels(IEnumerable<Question> questionList, IQueryFactory queryFactory, IConfigurationRoot configuration)
        {
            #region UserPrefetchOptimization

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
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
            List<UserViewModel> userViewModels = new List<UserViewModel>();

            List<Credential> credentials = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(userList);

            foreach (Guid userId in userList)
            {
                Credential credential = credentials.FirstOrDefault(x => x.UserId == userId);
                if (credential != null)
                {
                    userViewModels.Add(new UserViewModel
                    {
                        CredentialId = credential.Id,
                        UserId = credential.UserId,
                        Name = credential.FirstName + "" + credential.LastName,
                        ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl),
                        Occupation = credential.Employments.Select(y => y.Position).Take(1).FirstOrDefault()
                    });
                }
                else
                {
                    //No credential .Fetech from aspNetUser
                    String connectionString =
                configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;
                    userViewModels.Add(new UserViewModel
                    {
                        Name = queryFactory.ResolveQuery<ICredentialQuery>().GetUserNameAspNetUsers(userId, connectionString),
                        ImageUrl = azureFileUploadHelper.GetProfileImage(null),
                        Occupation = "",
                        CredentialId = Guid.Empty,
                        UserId = userId
                    });

                }
            }
            #endregion

            List<Topic> topics = queryFactory.ResolveQuery<ITopicQuery>().GetAllTopics();
            List<Level> levels = queryFactory.ResolveQuery<ILevelQuery>().GetAllLevels();
            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            foreach (var q in questionList)
            {
                var qv = new QuestionViewModel();
                qv.Id = q.Id;
                qv.Title = "¿" + q.Title + "?";
                qv.Body = q.Body;
                qv.CreatedOn = q.CreatedOn;
                qv.UserViewModel = userViewModels.Where(uv => uv.UserId == q.UserId).FirstOrDefault();
                qv.Answers = q.Answers.Where(drafted =>  drafted.IsDeleted != true).Select(x =>
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
                                            IsAnonymous = x.IsAnonymous,
                                            FirstImageUrl = x.FirstImageUrl

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
                        // Topic topic = queryFactory.ResolveQuery<ITopicQuery>().GetTopicByTopicId(topicId.Value);
                        Topic topic = topics.FirstOrDefault(x => x.Id == topicId.Value);
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
                        //Level level = queryFactory.ResolveQuery<ILevelQuery>().GetLevelByLevelId(levelId.Value);
                        Level level = levels.FirstOrDefault(x => x.Id == levelId.Value);
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
        public List<QuestionViewModel> GetQuestionViewModels(IEnumerable<Question> questionList, IQueryFactory queryFactory, IConfigurationRoot configuration)
        {
            #region UserPrefetchOptimization

            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
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
            List<UserViewModel> userViewModels = new List<UserViewModel>();

            List<Credential> credentials = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(userList);

            foreach (Guid userId in userList)
            {
                Credential credential = credentials.FirstOrDefault(x => x.UserId == userId);
                if (credential != null)
                {
                    var u = new UserViewModel
                    {
                        CredentialId = credential.Id,
                        UserId = credential.UserId,
                        // Name = credential.FirstName + "" + credential.LastName,
                        ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl),
                        Occupation = credential.Employments.Select(y => y.Position).Take(1).FirstOrDefault()
                    };
                    if (credential.FirstName == null && credential.LastName == null)
                    {
                        String connectionString =
                configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;

                        String Name = queryFactory.ResolveQuery<ICredentialQuery>()
                            .GetUserNameAspNetUsers(userId, connectionString);
                        u.Name = Name;
                    }
                    else
                    {
                        u.Name = credential.FirstName + " " + credential.LastName;
                    }
                    userViewModels.Add(u);
                }
                else
                {
                    //No credential .Fetech from aspNetUser
                    String connectionString =
                configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;
                    userViewModels.Add(new UserViewModel
                    {
                        Name = queryFactory.ResolveQuery<ICredentialQuery>().GetUserNameAspNetUsers(userId, connectionString),
                        ImageUrl = azureFileUploadHelper.GetProfileImage(null),
                        Occupation = "",
                        CredentialId = Guid.Empty,
                        UserId = userId
                    });

                }
            }
            #endregion

            List<Topic> topics = queryFactory.ResolveQuery<ITopicQuery>().GetAllTopics();
            List<Level> levels = queryFactory.ResolveQuery<ILevelQuery>().GetAllLevels();
            List<QuestionViewModel> questions = new List<QuestionViewModel>();
            foreach (var q in questionList)
            {
                var qv = new QuestionViewModel();
                qv.Id = q.Id;
                qv.Title = "¿" + q.Title + "?";
                qv.Body = q.Body;
                qv.CreatedOn = q.CreatedOn;
                qv.UserViewModel = userViewModels.Where(uv => uv.UserId == q.UserId).FirstOrDefault();
                qv.Answers = q.Answers.Where(drafted => drafted.IsDrafted != true && drafted.IsDeleted != true).Take(1).OrderByDescending(y => y.Likes.Count).Select(x =>
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
                                            IsAnonymous = x.IsAnonymous,
                                            FirstImageUrl = x.FirstImageUrl

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
                        // Topic topic = queryFactory.ResolveQuery<ITopicQuery>().GetTopicByTopicId(topicId.Value);
                        Topic topic = topics.FirstOrDefault(x => x.Id == topicId.Value);
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
                        //Level level = queryFactory.ResolveQuery<ILevelQuery>().GetLevelByLevelId(levelId.Value);
                        Level level = levels.FirstOrDefault(x => x.Id == levelId.Value);
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

        public List<QuestionCommentViewModel> GetComments(IEnumerable<Comment> commentList, IQueryFactory queryFactory,IConfigurationRoot configuration)
        {
            List<QuestionCommentViewModel> commentVMs = new List<QuestionCommentViewModel>();
            foreach (var cvm in commentList)
            {
                var tmp = new QuestionCommentViewModel();
                tmp.Id = cvm.Id;
                tmp.CommentText = cvm.CommentText;
                tmp.QuestionId = cvm.QuestionID;
                tmp.UserId = cvm.UserID;
                tmp.UserViewModel = new UserService().GetUserViewModel(queryFactory, cvm.UserID, configuration);
                commentVMs.Add(tmp);
            }
            return commentVMs.ToList();
        }

        public List<AnswerCommentViewModel> GetAnswersComments(IEnumerable<Comment> commentList, IQueryFactory queryFactory,IConfigurationRoot configuration)
        {
            List<AnswerCommentViewModel> commentVMs = new List<AnswerCommentViewModel>();
            foreach (var cvm in commentList)
            {
                var tmp = new AnswerCommentViewModel();
                tmp.Id = cvm.Id;
                tmp.CommentText = cvm.CommentText;
                tmp.AnswerId = cvm.AnswerId;
                tmp.UserId = cvm.UserID;
                tmp.UserViewModel = new UserService().GetUserViewModel(queryFactory, cvm.UserID, configuration);
                commentVMs.Add(tmp);
            }
            return commentVMs.ToList();
        }


        public String RemoveQuestionMark(String title)
        {
           String  testTitle = title.Trim().TrimStart().TrimEnd();
            if (!String.IsNullOrEmpty(title))
            {
                
                var hasQuestionMark = testTitle.ToCharArray()[testTitle.Length - 1] == '?';
                while (hasQuestionMark)
                {
                    testTitle = testTitle.TrimEnd('?');
                    testTitle = testTitle.Trim().TrimStart().TrimEnd();
                    hasQuestionMark = testTitle.ToCharArray()[testTitle.Length - 1] == '?';
                }
                hasQuestionMark = testTitle.ToCharArray()[0] == '?';
                if (hasQuestionMark)
                {
                    testTitle = testTitle.TrimStart('?');
                }

                hasQuestionMark = testTitle.ToCharArray()[0] == '¿';
                if (hasQuestionMark)
                {
                    testTitle = testTitle.TrimStart('¿');
                }

            }
            return testTitle;
        }
    }
}



