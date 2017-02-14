USE [AltaPerspectiva]
GO

DROP PROC [dbo].[SpUserInfoDetails];
GO

CREATE PROC [dbo].[SpUserInfoDetails] --'a61da2ca-aa87-4a07-ab6f-e66cb6242e1b'
(
@userId nvarchar(255)
)
AS
BEGIN

DECLARE @ImageUrl nvarchar(500);
DECLARE @FullName nvarchar(500);
DECLARE @Title nvarchar(500);

DECLARE @ProfileViewCount int;
--Extra
DECLARE @credentialId nvarchar(255);
select top 1 @credentialId=Id, @ImageUrl=ImageUrl,@FullName=ISNULL(FirstName,'')+' '+ISNULL(LastName,''),@ProfileViewCount=ISNULL(ProfileViewCount,0)
from  UserProfile.[Credentials] c 
where c.UserId=@userId;

--
set @Title=(select Position from UserProfile.Employments e where e.CredentialId=@credentialId);
--Depends on credentialId
DECLARE @Education nvarchar(500);
set @Education=(select top 1 ISNULL(Certification,'')+' , '+ISNULL(CertificationType,'')+', '+ISNULL(CollegeDegree,'') As Education
from UserProfile.Educations  edu 
where  edu.CredentialId=@credentialId
order by CreatedOn desc);

DECLARE @Employment nvarchar(500);
set @Employment=(
select top 1 Position+' , '+CompanyName as Employment
from UserProfile.Employments  emp 
where  emp.CredentialId=@credentialId
order by CreatedOn desc
)
DECLARE @Place nvarchar(500);

set @Place=(
select top 1 LocationName as LocationName
from UserProfile.Places  p 
where  p.CredentialId=@credentialId
order by CreatedOn desc
);
DECLARE @OtherExperience nvarchar(500);

set @OtherExperience=(
select top 1 [Description] 
from UserProfile.OtherExperiences o
where o.CredentialId=@credentialId
order by CreatedOn desc
);

--Dependes on userId
DECLARE @AnswerCount int;
set @AnswerCount=(select count(*) as TotalAnswer from Questions.Answers a where a.UserId=@userId)
DECLARE @QuestionCount int;
set @QuestionCount=(select COUNT(*) QuestionCount from Questions.Questions q where q.UserId=@UserId);
DECLARE @QuestionViewCount int;
set @QuestionViewCount=(select SUM(ISNULL(q.ViewCount,0)) QuestionViewCount from Questions.Questions q where q.UserId=@userId);


DECLARE @AnswerLikeCount int ;

set @AnswerLikeCount=(select SUM(X.LikeCount) AnswerLikeCount from (

select 
(select count(*) from Questions.Likes l where l.AnswerId= a.Id) LikeCount
from Questions.Answers a
where a.UserId=@userId
) X)

DECLARE @AnswerMadeThisMonth int;

set @AnswerMadeThisMonth=(select COUNT(*) 
from Questions.Answers a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()))

DECLARE @QuestionMadeThisMonth int;

set @QuestionMadeThisMonth=(select COUNT(*) 
from Questions.Questions a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()))


select  
@ImageUrl ImageUrl,
@FullName FullName,
@Title Title,
@AnswerCount AnswerCount,
@QuestionCount QuestionCount,
ISNULL(@QuestionViewCount,0) QuestionViewCount,
@Education Education,
@Employment Employment,
@Place Place,
@OtherExperience OtherExperience,

ISNULL(@QuestionViewCount,0) QuestionViewCount
END


GO

DROP PROC [dbo].[SpTopUserCalculation];
GO

CREATE proc [dbo].[SpTopUserCalculation]
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
	SELECT  [Id]
	,[UserName],
	(select top 1 FirstName+' '+LastName as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) FullName,
	(select top 1 ImageUrl as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) *2+
	 (select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) *4
	) TotalCommulativePoint
	
	FROM [Identity].AspNetUsers u

	)
	select top 5 * from CTE order by TotalCommulativePoint desc
	END
	---top user by category Id
ELSE IF (@userId is null and @catgeoryId is not null)
BEGIN
;with TopFiveUserCTE
as
(
SELECT  [Id]
	,[UserName],
	(select top 1 FirstName+' '+LastName as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) FullName,
	(select top 1 ImageUrl as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion 
	from Questions.Questions q 
	inner join Questions.QuestionCategories qc
	on q.Id=qc.QuestionId
	where qc.CategoryId=@catgeoryId and q.UserId=u.Id) TotalQuestion,
	(
	select ISNULL(count(*),0) TotalAnswer from Questions.Answers a
	inner join Questions.QuestionCategories qc
	on a.QuestionId=qc.QuestionId
	where CategoryId=@catgeoryId and  UserId=u.Id
	) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) *2+
	 (select ISNULL(count(*),0) TotalQuestion 
	from Questions.Questions q 
	inner join Questions.QuestionCategories qc
	on q.Id=qc.QuestionId
	where qc.CategoryId=@catgeoryId and q.UserId=u.Id) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers a
	inner join Questions.QuestionCategories qc
	on a.QuestionId=qc.QuestionId
	where CategoryId=@catgeoryId and  UserId=u.Id) *4
	) TotalCommulativePoint
	
	FROM [Identity].AspNetUsers u

)
select top 5 * from TopFiveUserCTE order by TotalCommulativePoint desc 
END

ELSE
	BEGIN
	SELECT  [Id]
	,[UserName],
	(select top 1 FirstName+' '+LastName as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) FullName,
	(select top 1 ImageUrl as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) *2+
	 (select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) *4
	) TotalCommulativePoint
	
	FROM [Identity].AspNetUsers u
	where u.Id=@userId
	END

END

GO

USE [AltaPerspectiva]
GO
DROP proc [dbo].[SpProfileParameterCount];

GO

CREATE proc [dbo].[SpProfileParameterCount]
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

DECLARE @AnswerMadeThisMonth int;
set @AnswerMadeThisMonth=(select COUNT(*) 
from Questions.Answers a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()))

DECLARE @QuestionMadeThisMonth int;
set @QuestionMadeThisMonth=(select COUNT(*) 
from Questions.Questions a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()))


DECLARE @Followings int;
DECLARE @Followers int;
DECLARE @Bookmarks int;
DECLARE @Answers int;
DECLARE @Questions int ;
DECLARE @DirectQuestions int;
DECLARE @Blogs int;
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



