GO
select * from [UserProfile].[Credentials] c
SpTopUserCalculation
GO

DROP PROC [dbo].[SpTopUserCalculation];
GO
CREATE proc [dbo].[SpTopUserCalculation] --'476C56FF-D294-43A3-955D-8C7F3F22C512'
(
  @userId nvarchar(200)=null,
  @catgeoryId nvarchar(200)=null
)
as
BEGIN
--for Top Five user
if (@userId is null)
	BEGIN
	;with CTE
	as(
	SELECT  CONVERT(uniqueidentifier,UserId) UserId,
	ISNULL( FirstName + ' ' + LastName ,Email) as Name,
    ImageUrl,
	Occupation,
	ISNULL(ProfileViewCount,0) ProfileViewCount,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId = c.UserId) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId = c.UserId) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId = c.UserId) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId = c.UserId) TotalAnswer
	FROM  [UserProfile].[Credentials] c
	)
	select top 5 * ,1*TotalLike + 2*TotalComment + 3*TotalQuestion + 4*TotalAnswer as TotalCommulativePoint   from CTE order by TotalCommulativePoint desc
	END
ELSE
	BEGIN
	SELECT  CONVERT(uniqueidentifier,UserId) UserId,
	ISNULL( FirstName + ' ' + LastName ,Email) as Name,
    ImageUrl,
	Occupation,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId = c.UserId) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId = c.UserId) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId = c.UserId) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId = c.UserId) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId = c.UserId)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId = c.UserId) *2+
	 (select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId = c.UserId) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId = c.UserId) *4
	) TotalCommulativePoint,
	 Occupation,
	ISNULL(ProfileViewCount,0) ProfileViewCount
	
	FROM  [UserProfile].[Credentials] c
	where c.UserId = @userId
	END

END


Go
DROP proc [dbo].[SpProfileParameterCount];

GO

CREATE proc [dbo].[SpProfileParameterCount] --'3a3e773a-614f-48b6-af14-96be31589001'
(
@userId nvarchar(255)
)
AS
BEGIN 
DECLARE @ProfileViewCount int;
--Extra
DECLARE @credentialId nvarchar(255);
select top 1 @ProfileViewCount=ISNULL(ProfileViewCount,0)
from  UserProfile.[Credentials] c 
where c.UserId=@userId;

DECLARE @AnswerLikeCount int ;
set @AnswerLikeCount=(select SUM(X.LikeCount) AnswerLikeCount from (
select 
(select count(*) from Questions.Likes l where l.AnswerId= a.Id) LikeCount
from Questions.Answers a
where a.UserId=@userId
) X)
---------------Month region-----------------
DECLARE @AnswerMadeThisMonth int;
set @AnswerMadeThisMonth=(select COUNT(*) 
from Questions.Answers a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()) 
and a.IsDrafted is null 
and a.isDeleted is null
and exists(select 1 from  Questions.Questions q where q.Id=a.questionId and q.isDeleted is null )
) 

DECLARE @QuestionMadeThisMonth int;
set @QuestionMadeThisMonth=(select COUNT(*) 
from Questions.Questions q
where q.UserId=@userId and MONTH(q.CreatedOn)=MONTH(GETDATE())  and q.IsDirectQuestion=0 and q.IsDeleted is null)
-----------------end of month region-------------------

DECLARE @Followings int;
--select @Followings=count(*) from Questions.QuestionUserFollowings qf where qf.UserId=@userId and qf.IsDeleted is null;
select @Followings=count(DISTINCT FollowedUserId) 
from Questions.QuestionUserFollowings qf 
where qf.UserId=@userId
and qf.IsDeleted is null
group by qf.UserId
DECLARE @Followers int;
--select @Followers=count(*) from Questions.QuestionUserFollowings qf where qf.FollowedUserId=@userId and qf.IsDeleted is null
select @Followers=count(Distinct userId) from 
Questions.QuestionUserFollowings qf 
where qf.FollowedUserId=@userId
and qf.IsDeleted is null
group by qf.FollowedUserId

DECLARE @Bookmarks int;
select @Bookmarks=COUNT(*) from Questions.Bookmarks b where b.UserId=@userId
----------------use same as UserInfoDetails---------------------
DECLARE @Answers int;
select @Answers=COUNT(*) from Questions.Answers a where a.UserId=@userId and a.IsDrafted is null and a.IsDeleted is null
and exists (select 1 from Questions.Questions q where q.Id=a.QuestionID and q.IsDirectQuestion=0 and q.Isdeleted is  null)

DECLARE @Questions int ;
select @Questions=COUNT(*) from Questions.Questions q where q.UserId=@userId and q.IsDirectQuestion=0 and q.IsDeleted is null
-----------------end of usage-----------------------------------------------

DECLARE @DirectQuestions int;
select @DirectQuestions=COUNT(*) from Questions.DirectQuestions q where q.QuestionAskedToUser=@userId 
DECLARE @Blogs int;
SELECT @Blogs=count(*) FROM [Blog].[Blogs] where UserId=@userId;
select 
ISNULL(@ProfileViewCount,0) ProfileViewCount,
ISNULL(@AnswerLikeCount,0) AnswerLikeCount,
ISNULL(@AnswerMadeThisMonth,0) AnswerMadeThisMonth,
ISNULL(@QuestionMadeThisMonth,0) QuestionMadeThisMonth,
ISNULL(@Followings,0) [Followings],
ISNULL(@Followers,0) Followers,
ISNULL(@Bookmarks,0) Bookmarks,
ISNULL(@Answers,0) Answers,
ISNULL(@Questions,0) Questions,
ISNULL(@DirectQuestions,0) DirectQuestions,
ISNULL(@Blogs,0) Blogs
;
END

GO
DROP PROC [dbo].[SpGetUsers]
GO
CREATE PROCEDURE [dbo].[SpGetUsers]
  @userIds nvarchar(max)
AS
BEGIN
   select CONVERT(uniqueidentifier,UserId) as UserId ,
   ISNULL( FirstName + ' ' + LastName ,Email) as Name,
   CONVERT(uniqueidentifier,Id) CredentialId,
    ImageUrl,
   Occupation
   from [UserProfile].[Credentials] c
   where c.UserId in (
    select Data
from dbo.Split
(@userIds,',')
	)
END

GO
DROP FUNCTION dbo.Split
GO
CREATE FUNCTION dbo.Split
(
	@RowData nvarchar(2000),
	@SplitOn nvarchar(5)
)
RETURNS @RtnValue table
(
	Id int identity(1,1),
	Data nvarchar(100)
)
AS
BEGIN
	Declare @Cnt int
	Set @Cnt = 1

	While (Charindex(@SplitOn,@RowData)>0)
	Begin
		Insert Into @RtnValue (data)
		Select
			Data = ltrim(rtrim(Substring(@RowData,1,Charindex(@SplitOn,@RowData)-1)))

		Set @RowData = Substring(@RowData,Charindex(@SplitOn,@RowData)+1,len(@RowData))
		Set @Cnt = @Cnt + 1
	End
	
	Insert Into @RtnValue (data)
	Select Data = ltrim(rtrim(@RowData))

	Return
END
GO


GO
DROP PROC SpTopHundredUserSummary;
GO
CREATE PROC SpTopHundredUserSummary
AS
BEGIN
;with CTE
	as(
	SELECT  CONVERT(uniqueidentifier,UserId) Id,CONVERT(uniqueidentifier,UserId) UserId,
	 ISNULL( FirstName + ' ' + LastName ,Email) as Name,
	 ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId = c.UserId) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId = c.UserId) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId = c.UserId) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId = c.UserId) TotalAnswer,
	 Occupation,
	ISNULL(ProfileViewCount ,0) ProfileViewCount
	
	FROM  [UserProfile].[Credentials] c

	)
	select top 100  * ,1*TotalLike + 2*TotalComment + 3*TotalQuestion + 4*TotalAnswer as TotalCommulativePoint   from CTE order by TotalCommulativePoint desc
END
Go



Drop PROC SpGetUserEmailParameter;
GO
CREATE PROC SpGetUserEmailParameter --'575F0F78-4A89-47CC-B7A1-90AF67D9B946' 
(
@userId nvarchar(200)
)
AS
BEGIN
select CONVERT(uniqueidentifier,UserId) as Id,Email,ImageUrl,ISNULL( FirstName + ' ' + LastName ,Email) as UserName
from [UserProfile].[Credentials] 
where UserId = @userId

END
GO