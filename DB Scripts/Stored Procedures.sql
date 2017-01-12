USE [AltaPerspectiva]
GO

/****** Object:  StoredProcedure [dbo].[SpTopUserCalculation]    Script Date: 1/5/2017 6:52:35 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


--create proc SpUserInfo
--as
--BEGIN
-- select 1 Id,'akash' Name;

--END

CREATE proc [dbo].[SpTopUserCalculation]
(
  @userId nvarchar(200)=null
)
as
BEGIN
--for Top Five user
if (@userId is null)
	BEGIN
	;with CTE
	as(
	SELECT  [Id]
	,[UserName],
	(select top 1 FirstName+' '+LastName as FullName from UserProfile.ContractInformation where UserId=u.Id order by Id desc) FullName,
	(select top 1 Image as FullName from UserProfile.UserImage where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) TotalAnswer
	FROM [Identity].AspNetUsers u

	)
	select top 5 * from CTE order by CTE.TotalAnswer desc,CTE.TotalQuestion desc,CTE.TotalComment desc,CTE.TotalLike desc
	END
ELSE
	BEGIN
	SELECT  [Id]
	,[UserName],
	(select top 1 FirstName+' '+LastName as FullName from UserProfile.ContractInformation where UserId=u.Id order by Id desc) FullName,
	(select top 1 Image as FullName from UserProfile.UserImage where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) TotalAnswer
	FROM [Identity].AspNetUsers u 
	where u.Id=@userId
	END

END

GO
/****** Object:  StoredProcedure [dbo].[SpTopTopicCalculation]    Script Date: 1/12/2017 11:42:07 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

create proc [dbo].[SpTopTopicCalculation]
  (
   @categoryId nvarchar(200)=null
  )
  as
  BEGIN
	if @categoryId is null
	BEGIN
		;with CTE
	  as(
	  select t.CategoryId,t.TopicName,COUNT(*) TopicCount 
	  from Questions.QuestionCategories qc
	  inner join Questions.QuestionTopics qt
	  on qc.QuestionId=qt.QuestionId
	  inner join Questions.Topics t
	  on qt.TopicId=t.Id 
	  group by t.CategoryId,t.TopicName
	  )
	  select top 5 * from CTE order by TopicCount desc
	END
	else
	BEGIN
	;with CTE
	  as(
	  select t.CategoryId,t.TopicName,COUNT(*) TopicCount 
	  from Questions.QuestionCategories qc
	  inner join Questions.QuestionTopics qt
	  on qc.QuestionId=qt.QuestionId
	  inner join Questions.Topics t
	  on qt.TopicId=t.Id 
	  where t.CategoryId=@categoryId
	  group by t.CategoryId,t.TopicName
	  )
	  select top 5 * from CTE order by TopicCount desc
	END
  END


GO




