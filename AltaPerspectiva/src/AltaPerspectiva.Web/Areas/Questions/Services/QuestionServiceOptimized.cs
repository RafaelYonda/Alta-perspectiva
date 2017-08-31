using AltaPerspectiva.Web.Areas.Questions.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Dapper;
using Questions.Domain;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using HtmlAgilityPack;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using AltaPerspectiva.Web.Areas.UserProfile.Services;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class QuestionServiceOptimized
    {
        private string connectionString = Startup.ConnectionString;
        private AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();

        //        private string selectQuery =
        //            @"select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn,qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
        //(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
        //(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
        //(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
        //bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn ,bestAns.IsAnonymous
        //from Questions.Questions q ";


        private string selectQuery = @"

select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn,qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn ,bestAns.IsAnonymous,
(select COUNT(*) from Questions.Likes l where l.QuestionId = q.Id) as QuestionLike
from Questions.Questions q
";

        private string joinQuery = @"LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id";
        


        public  List<QuestionViewModel> FilterQuestionByGeneralCategory(int pageNumber, bool mostLikedQuestion,bool mostViewedQuestion)
        {
            string whereQuery = @"where q.IsDeleted is null and q.IsDirectQuestion =0 ";

            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }


   
        QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;
        }

        public List<QuestionViewModel> FilterQuestionByCategoryIdOnly(Guid categoryId , int pageNumber, bool mostLikedQuestion, bool mostViewedQuestion)
        {
            string whereQuery = String.Format(@"where q.IsDeleted is null and q.IsDirectQuestion = 0 and qc.CategoryId = '{0}' ", categoryId);
            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }
            QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;

        }
        public List<QuestionViewModel> FilterQuestionByCategoryAndTopic(Guid categoryId ,Guid topicId, int pageNumber, bool mostLikedQuestion, bool mostViewedQuestion)
        {
            string whereQuery = String.Format(@"where q.IsDeleted is null and q.IsDirectQuestion = 0 and qc.CategoryId = '{0}' and qt.TopicId = '{1}'", categoryId,topicId);
            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }
            QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;

        }


        public List<QuestionViewModel> FilterQuestionByCategoryAndLevel(Guid categoryId, Guid levelId, int pageNumber,bool mostLikedQuestion, bool mostViewedQuestion)
        {
            string whereQuery = String.Format(@"where q.IsDeleted is null and q.IsDirectQuestion = 0 and qc.CategoryId = '{0}' and ql.LevelId = '{1}'", categoryId, levelId);
            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }
            QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;

        }
        public List<QuestionViewModel> FilterQuestionByCategoryAndTopicAndLevel(Guid categoryId,Guid topicId, Guid levelId, int pageNumber, bool mostLikedQuestion, bool mostViewedQuestion)
        {
            string whereQuery = String.Format(@"where q.IsDeleted is null and q.IsDirectQuestion = 0 and qc.CategoryId = '{0}' and qt.TopicId = '{1}' and ql.LevelId = '{2}'", categoryId, topicId,levelId);
            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }
            QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;

        }
        public List<QuestionViewModel> FilterQuestionByGeneralCategoryTopic(Guid topicId, int pageNumber, bool mostLikedQuestion, bool mostViewedQuestion)
        {
            string whereQuery = String.Format(@"where q.IsDeleted is null and q.IsDirectQuestion = 0 and  qt.TopicId = '{0}' ", topicId);
            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }
            QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;

        }
        public List<QuestionViewModel> FilterQuestionByGeneralCategoryLevel(Guid levelId, int pageNumber, bool mostLikedQuestion, bool mostViewedQuestion)
        {
            string whereQuery = String.Format(@"where q.IsDeleted is null and q.IsDirectQuestion = 0 and   ql.LevelId = '{0}'", levelId);
            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }
            QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;

        }
        public List<QuestionViewModel> FilterQuestionByGeneralCategoryTopicAndLevel( Guid topicId, Guid levelId, int pageNumber, bool mostLikedQuestion, bool mostViewedQuestion)
        {
            string whereQuery = String.Format(@"where q.IsDeleted is null and q.IsDirectQuestion = 0 and  qt.TopicId = '{0}' and ql.LevelId = '{1}'", topicId, levelId);
            // bool mostLikedQuestion,bool mostViewedQuestion
            //MostRecentQuestion (Default)
            string orderByQuery = "";
            orderByQuery = "order by q.CreatedOn desc";

            if (mostLikedQuestion)
            {
                orderByQuery = "order by QuestionLike desc  ,q.CreatedOn desc  ";
            }
            if (mostViewedQuestion)
            {
                orderByQuery = "order by q.ViewCount desc ";
            }
            QuestionViewModelBuilder builder = new QuestionViewModelBuilder()
                .WithSelectQuery(selectQuery)
                            .WithJoinQuery(joinQuery)
                .WithWhereQuery(whereQuery)
                .WithOrderByQuery(orderByQuery)
                .WithSkipTakeQuery(pageNumber: pageNumber);

            List<QuestionViewModel> questionViewModels = builder.BuildQuery();
            return questionViewModels;

        }

        private List<QuestionDbModel> QueryBuilderForQuestionDbModel(IDbConnection db, Guid userid, int pageNumber = 0, int pageCount = 15, FilterParameter filterParameter = null )
        {
            string filterQuery = string.Empty;
            if (filterParameter == null || (filterParameter.CategoryId == null && filterParameter.TopicId == null && filterParameter.LevelId == null)) //1.ok
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn,
CASE 
WHEN EXISTS (select 1 from [Questions].[QuestionUserFollowings] f where f.AnswerId = bestAns.Id and f.UserId ='{2}' and f.IsDeleted is null)  then 1
else 0 
END as IsFollowing,
bestAns.IsAnonymous
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT 15 ROWS ONLY; -- take 10 rows
", pageNumber * pageCount, pageCount,userid);          
            }
            else if (filterParameter.CategoryId.HasValue && !filterParameter.TopicId.HasValue && !filterParameter.LevelId.HasValue ) //2.filter only category
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0 and qc.CategoryId = '{2}'
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows

", pageNumber * pageCount, pageCount, filterParameter.CategoryId);
            }
            else if (filterParameter.CategoryId.HasValue && filterParameter.TopicId.HasValue &&
                     !filterParameter.LevelId.HasValue) //3.filter only category and topic
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0 and qc.CategoryId = '{2}' and qt.TopicId = '{3}'
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows

", pageNumber * pageCount, pageCount, filterParameter.CategoryId,filterParameter.TopicId);
            }
            else if (filterParameter.CategoryId.HasValue && !filterParameter.TopicId.HasValue &&
                     filterParameter.LevelId.HasValue) // 4. filter by category and level 
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0 and qc.CategoryId = '{2}' and ql.LevelId = '{3}'
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows

", pageNumber * pageCount, pageCount, filterParameter.CategoryId,filterParameter.LevelId);
            }
            else if (filterParameter.CategoryId.HasValue && filterParameter.TopicId.HasValue &&
                     filterParameter.LevelId.HasValue) //5.filter only category ,topic and level
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0 and qc.CategoryId = '{2}' and qt.TopicId = '{3}' and ql.LevelId = '{4}'
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows

", pageNumber * pageCount, pageCount, filterParameter.CategoryId,filterParameter.TopicId,filterParameter.LevelId);
            }
            
            else if (!filterParameter.CategoryId.HasValue && filterParameter.TopicId.HasValue &&
                     !filterParameter.LevelId.HasValue) // 6. filter by topic 
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0 and qt.TopicId = '{2}'
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows

", pageNumber * pageCount, pageCount, filterParameter.TopicId);
            }
            else if (!filterParameter.CategoryId.HasValue && filterParameter.TopicId.HasValue &&
                     filterParameter.LevelId.HasValue) //7.Topic and level only
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0 and qt.TopicId = '{2}' and ql.LevelId = '{3}'
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows

", pageNumber * pageCount, pageCount, filterParameter.TopicId , filterParameter.LevelId);
            }
            else if (!filterParameter.CategoryId.HasValue && !filterParameter.TopicId.HasValue &&
                     filterParameter.LevelId.HasValue) //8. level only
            {
                filterQuery = String.Format(@"
select q.Id , q.Title, q.Body ,q.UserId,q.ViewCount,q.CreatedOn, qc.CategoryId ,c.Name as CategoryName ,qt.TopicId ,t.TopicName ,ql.LevelId,l.LevelName ,
(select COUNT(*) from Questions.Answers a where a.QuestionId =q.Id and a.IsDrafted is null and a.IsDeleted is null) AnswerCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId = bestAns.Id) AnswerCommentCount,
(select COUNT(*) from Questions.Likes l where l.AnswerId = bestAns.Id) AnswerLikeCount,
bestAns.Id as AnswerId ,bestAns.UserId as AnswerUserId , bestAns.FirstImageUrl,bestAns.Text,bestAns.IsDrafted,bestAns.AnswerDate as AnswerCreatedOn
from Questions.Questions q 
LEFT JOIN Questions.QuestionCategories qc ON qc.QuestionId = q.Id LEFT  JOIN
Questions.Categories c ON c.Id = qc.CategoryId  

LEFT JOIN Questions.QuestionTopics qt ON qt.QuestionId =q.Id LEFT JOIN
Questions.Topics t ON t.Id=qt.TopicId

LEFT JOIN Questions.QuestionLevels ql on ql.QuestionId =q.Id LEFT JOIN
Questions.Levels l ON ql.LevelId = l.Id
left join
(select a.*
from Questions.Questions q
inner join [Questions].[Answers] a on a.Id=dbo.GetBestAnswerFromQuestionId(q.Id)
where a.IsDrafted is null
) bestAns
on bestAns.QuestionId=q.Id
where q.IsDeleted is null and q.IsDirectQuestion =0 and ql.LevelId = '{2}'
order by q.CreatedOn desc
OFFSET {0} ROWS -- skip 10 rows
FETCH NEXT {1} ROWS ONLY; -- take 10 rows

", pageNumber * pageCount, pageCount, filterParameter.LevelId);
            }
            var questionDbModels = db.Query<QuestionDbModel>(filterQuery).ToList();
            return questionDbModels;
        }

       
        private string BestAnswerTestWithFormattedImage(string answerText, string firstImageUrl)
        {
            string htmlDocument = answerText;
            List<string> imgTags = Base64Image.GetImagesInHTMLString(answerText);
            foreach (var imgTag in imgTags)
            {
                htmlDocument = answerText.Replace(imgTag, "");
            }
            HtmlDocument htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(htmlDocument);
            string result = htmlDoc.DocumentNode.InnerText;

            string formatedImage = string.Empty;
            if (!string.IsNullOrEmpty(firstImageUrl))
            {
                formatedImage = @"<img src='" + firstImageUrl + "' > ";
            }
            string newHtml = "<p>" + formatedImage + result + "</p>";
            return newHtml;
        }
        public List<AnswerViewModel> GetAnswerViewModels(Guid questionId , Guid userId)
        {
            List<AnswerViewModel> answerViewModels = new List<AnswerViewModel>();
            List<UserViewModel> userViewModels = null;
            String answerQuery = String.Format(@"
select * ,
(select COUNT(*) from Questions.Likes l where l.AnswerId =a.Id) LikeCount,
(select COUNT(*) from Questions.Comments c where c.AnswerId =a.Id) CommentCount,
CASE 
WHEN EXISTS (select 1 from [Questions].[QuestionUserFollowings] f where  f.UserId ='{1}' and f.IsDeleted is null  and f.FollowedUserId = a.UserId)  then 1
else 0 
END as IsFollowing,
a.IsAnonymous
from Questions.Answers a 
where QuestionId = '{0}' and a.IsDrafted is null and a.IsDeleted is null
", questionId,userId);

  
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                answerViewModels = db.Query<AnswerViewModel>(answerQuery).ToList();

                List<Guid> userIds = new List<Guid>();
                userIds.AddRange(answerViewModels.Select(x => x.UserId).ToList());

                userViewModels = new UserService().GetUserViewModelsWithThumbnailImage(userIds);
               
            }

            foreach (var answerViewModel in answerViewModels)
            {
                answerViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == answerViewModel.UserId);
                answerViewModel.Comments = new List<AnswerCommentViewModel>();
                for (int i = 0; i < answerViewModel.CommentCount; i++)
                {
                    answerViewModel.Comments.Add(new AnswerCommentViewModel());
                }
                answerViewModel.Likes = new List<AnswerLikeViewModel>();
                for (int i = 0; i < answerViewModel.LikeCount; i++)
                {
                    answerViewModel.Likes.Add(new AnswerLikeViewModel());
                }
            }
            return answerViewModels;
        }
        public QuestionViewModel GetQuestionViewModel(Guid questionId)
        {
            QuestionViewModel questionViewModel = new QuestionViewModel();

            List<CategoryViewModel> categoryViewModels = null;
            List<TopicViewModel> topics = null;
            List<LevelViewModel> levels = null;

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                string questionQuery = String.Format(@"
select q.Id,q.Title,q.Body,q.UserId,q.ViewCount,q.CreatedOn ,
(select COUNT(*) from Questions.Answers a where a.QuestionId=q.Id) AnswerCount,
(select COUNT(*) from Questions.Likes l where l.QuestionId =q.Id) LikeCount,
(select COUNT(*) from Questions.Comments c where c.QuestionId =q.Id) CommentCount,
(select top 1 CategoryId from Questions.QuestionCategories qc where qc.QuestionId=q.id) CategoryId,
(select TopicId from Questions.QuestionTopics qt where qt.QuestionId=q.id) TopicId,
(select LevelId from Questions.QuestionLevels ql where ql.QuestionId=q.id) LevelId,
q.IsAnonymous
from Questions.Questions q
where q.Id = '{0}'
", questionId);
                questionViewModel = db.Query<QuestionViewModel>(questionQuery).FirstOrDefault();
                
                Guid categoryId = questionViewModel.CategoryId;
                Guid topicId = questionViewModel.TopicId;
                Guid levelId = questionViewModel.LevelId;

                String multipleQuery = String.Format(@"
select * from [Questions].[Categories] where id = '{0}';
select  * from Questions.Topics where id = '{1}';
select * from Questions.Levels where id ='{2}';

", categoryId, topicId, levelId);
                var multiple = db.QueryMultiple(multipleQuery);

                questionViewModel.UserViewModel =
                    new UserService().GetUserViewModelWithThumbnailImage(questionViewModel.UserId);
                questionViewModel.Comments = new List<QuestionCommentViewModel>();
                for (int i = 0; i < questionViewModel.CommentCount; i++)
                {
                    questionViewModel.Comments.Add(new QuestionCommentViewModel());
                }
                questionViewModel.Likes = new List<QuestionLikeViewModel>();
                for (int i = 0; i < questionViewModel.LikeCount; i++)
                {
                    
                    questionViewModel.Likes.Add(new QuestionLikeViewModel());
                }

                questionViewModel.Categories = new List<CategoryViewModel>();
                if (categoryId != Guid.Empty)
                {
                    categoryViewModels = multiple.Read<CategoryViewModel>().ToList();
                    var categoryViewModel = categoryViewModels.FirstOrDefault(x => x.Id == categoryId);
                    questionViewModel.Categories.Add(categoryViewModel);

                }
                questionViewModel.QuestionTopics = new List<QuestionTopic>();

                if (topicId != Guid.Empty)
                {
                    topics = multiple.Read<TopicViewModel>().ToList();
                    var topicViewModel = topics.FirstOrDefault(x => x.Id == topicId);
                    if (topicViewModel != null)
                    {
                        QuestionTopic questionTopic = new QuestionTopic
                        {
                            QuestionId = questionViewModel.Id,
                            TopicId = topicViewModel.Id
                        };
                        questionViewModel.QuestionTopics = new List<QuestionTopic>();
                        questionViewModel.QuestionTopics.Add(questionTopic);

                        questionViewModel.QuestionTopicNames = new List<string>();
                        questionViewModel.QuestionTopicNames.Add(topicViewModel.TopicName);
                    }
                }
                questionViewModel.QuestionLevels = new List<QuestionLevel>();

                if (levelId != Guid.Empty)
                {
                    levels = multiple.Read<LevelViewModel>().ToList();
                    var levelViewModel = levels.FirstOrDefault(x => x.Id == levelId);
                    if (levelViewModel != null)
                    {
                        QuestionLevel questionLevel = new QuestionLevel
                        {
                            QuestionId = questionViewModel.Id,
                            LevelId = levelViewModel.Id
                        };
                        questionViewModel.QuestionLevels = new List<QuestionLevel>();
                        questionViewModel.QuestionLevels.Add(questionLevel);
                        questionViewModel.QuestionLevelNames = new List<string>();
                        questionViewModel.QuestionLevelNames.Add(levelViewModel.LevelName);
                    }
                }
            }

            return questionViewModel;
        }
        public List<QuestionViewModel> GetQuestionViewModels(int pageNumber, int pageCount, Guid userId, FilterParameter filterParameter = null)
        {
          //  String query = QueryBuilder(pageNumber, pageCount);
            List<QuestionDbModel> questionDbModels = null;
            List<UserViewModel> userViewModels = null;

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                questionDbModels = QueryBuilderForQuestionDbModel(db, userId, pageNumber,pageCount,  filterParameter);

                List<Guid> userList = new List<Guid>();
                userList.AddRange(questionDbModels.Select(x => x.UserId).ToList());
                userList.AddRange(questionDbModels.Select(x => x.AnswerUserId).ToList());
                userViewModels = new UserService().GetUserViewModelsWithThumbnailImage(userList);
            }
            List<QuestionViewModel> questionViewModels = new List<QuestionViewModel>();
            foreach (var dbModel in questionDbModels)
            {
                QuestionViewModel questionViewModel = new QuestionViewModel();
                questionViewModel.Id = dbModel.Id;
                questionViewModel.Title = dbModel.Title;
                questionViewModel.Body = dbModel.Body;
                questionViewModel.CreatedOn = dbModel.CreatedOn;
                questionViewModel.AnswerCount = dbModel.AnswerCount;
                questionViewModel.Likes = new List<QuestionLikeViewModel>();

                questionViewModel.ViewCount = dbModel.ViewCount;
                questionViewModel.UserId = dbModel.UserId;
                questionViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == dbModel.UserId);
                Guid categoryId = dbModel.CategoryId;
                Guid topicId = dbModel.TopicId;
                Guid levelId = dbModel.LevelId;

                if (categoryId != Guid.Empty)
                {
                    questionViewModel.Categories = new List<CategoryViewModel>();
                    var categoryViewModel = new CategoryViewModel
                    {
                        Id = categoryId,
                        Name = dbModel.CategoryName
                    };
                    questionViewModel.Categories.Add(categoryViewModel);
                }
                if (topicId != Guid.Empty)
                {
                    questionViewModel.QuestionTopics = new List<QuestionTopic>();
                    var topicViewModel = new TopicViewModel
                    {
                        Id = topicId,
                        TopicName = dbModel.TopicName,
                        CategoryId = categoryId
                        
                    };

                    QuestionTopic questionTopic = new QuestionTopic
                    {
                        QuestionId = questionViewModel.Id,
                        TopicId = topicViewModel.Id
                    };
                    questionViewModel.QuestionTopics = new List<QuestionTopic>();
                    questionViewModel.QuestionTopics.Add(questionTopic);

                    questionViewModel.QuestionTopicNames = new List<string>();
                    questionViewModel.QuestionTopicNames.Add(topicViewModel.TopicName);
                }
                if (levelId != Guid.Empty)
                {
                    questionViewModel.QuestionLevels = new List<QuestionLevel>();
                    var levelViewModel = new LevelViewModel
                    {
                        Id = levelId,
                        LevelName = dbModel.LevelName
                    };

                    QuestionLevel questionLevel = new QuestionLevel
                    {
                        QuestionId = questionViewModel.Id,
                        LevelId = levelViewModel.Id
                    };
                    questionViewModel.QuestionLevels = new List<QuestionLevel>();
                    questionViewModel.QuestionLevels.Add(questionLevel);

                    questionViewModel.QuestionLevelNames = new List<string>();
                    questionViewModel.QuestionLevelNames.Add(levelViewModel.LevelName);
                }
                if (dbModel.AnswerId != Guid.Empty)
                {
                    AnswerViewModel answerViewModel = new AnswerViewModel
                    {
                        Id = dbModel.AnswerId,
                        UserId = dbModel.AnswerUserId,
                        AnswerId = dbModel.AnswerId,
                        QuestionId = dbModel.Id,
                        FirstImageUrl = dbModel.FirstImageUrl,
                        Text = BestAnswerTestWithFormattedImage(dbModel.Text, dbModel.FirstImageUrl),
                        IsDrafted = dbModel.IsDrafted,
                        AnswerDate = dbModel.AnswerCreatedOn,
                        IsFollowing = dbModel.IsFollowing,
                        IsAnonymous = dbModel.IsAnonymous
                    };
                    answerViewModel.UserViewModel = userViewModels.FirstOrDefault(x => x.UserId == dbModel.AnswerUserId);
                    answerViewModel.Likes = new List<AnswerLikeViewModel>();
                    for (int i = 0; i < dbModel.AnswerLikeCount; i++)
                    {
                        answerViewModel.Likes.Add(new AnswerLikeViewModel());
                    }
                    answerViewModel.Comments = new List<AnswerCommentViewModel>();
                    for (int i = 0; i < dbModel.AnswerCommentCount; i++)
                    {
                        answerViewModel.Comments.Add(new AnswerCommentViewModel());
                    }
                    questionViewModel.Answers = new List<AnswerViewModel>();
                    questionViewModel.Answers.Add(answerViewModel);
                }
                questionViewModel.UserViewModel = new UserViewModel(); ;
                questionViewModels.Add(questionViewModel);
            }
            return questionViewModels;
        }
        
    }
}
