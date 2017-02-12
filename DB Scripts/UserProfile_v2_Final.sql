USE [AltaPerspectiva]
GO
GO
DROP TABLE [UserProfile].[Followers]
GO
DROP TABLE [UserProfile].[Followings]
Go
/****** Object:  Schema [UserProfile]    Script Date: 2/6/2017 7:10:43 PM ******/
DROP TABLE UserProfile.Biography;
DROP TABLE UserProfile.ContractInformation;
DROP TABLE UserProfile.Education;
DROP TABLE UserProfile.Experience;
DROP TABLE UserProfile.Insight;
DROP TABLE UserProfile.PracticeArea;
DROP TABLE UserProfile.Skill;
DROP TABLE UserProfile.UserImage;

GO
DROP SCHEMA UserProfile;

CREATE SCHEMA UserProfile;

GO
DROP TABLE Question.UserQuestionPost;

GO

CREATE TABLE [Questions].[ShareQuestions](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_QuestionPosts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
DROP TABLE Questions.QuestionFollowings
GO

CREATE TABLE [Questions].[QuestionUserFollowings](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[FollowedUserId] [uniqueidentifier] NOT NULL,
	[AnswerId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_QuestionFollowings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


GO
CREATE TABLE [UserProfile].[Credentials](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[FirstName] [nvarchar](max) NULL,
	[ImageUrl] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[LastName] [nvarchar](max) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[ProfileViewCount] [int]  NULL,
	[Title] [nvarchar](max) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Credentials] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [UserProfile].[Educations]    Script Date: 2/8/2017 3:12:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [UserProfile].[Educations](
	[Id] [uniqueidentifier] NOT NULL,
	[Certification] [nvarchar](max) NULL,
	[CertificationType] [nvarchar](max) NULL,
	[CollegeCompletionDate] [datetime2](7) NULL,
	[CollegeDegree] [nvarchar](max) NULL,
	[CollegeName] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CredentialId] [uniqueidentifier] NOT NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[SchoolCompletionDate] [datetime2](7) NULL,
	[SchoolDegreeName] [nvarchar](max) NULL,
	[SchoolName] [nvarchar](max) NULL,
 CONSTRAINT [PK_Educations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [UserProfile].[Employments]    Script Date: 2/8/2017 3:12:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [UserProfile].[Employments](
	[Id] [uniqueidentifier] NOT NULL,
	[CompanyName] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CredentialId] [uniqueidentifier] NOT NULL,
	[DTS] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NULL,
	[IsActive] [bit] NULL,
	[IsCurrentlyWorking] [bit] NOT NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Position] [nvarchar](max) NULL,
	[StartDate] [datetime2](7) NULL,
 CONSTRAINT [PK_Employments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]


GO
CREATE TABLE [UserProfile].[OtherExperiences](
	[Id] [uniqueidentifier] NOT NULL,
	[CategoryId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CredentialId] [uniqueidentifier] NOT NULL,
	[DTS] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
 CONSTRAINT [PK_OtherExperiences] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [UserProfile].[Places]    Script Date: 2/8/2017 3:12:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [UserProfile].[Places](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CredentialId] [uniqueidentifier] NOT NULL,
	[DTS] [datetime2](7) NOT NULL,
	[EndYear] [datetime2](7) NULL,
	[IsActive] [bit] NULL,
	[IsCurrentyLiving] [bit] NOT NULL,
	[IsDeleted] [bit] NULL,
	[LocationName] [nvarchar](max) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[StartYear] [datetime2](7) NULL,
 CONSTRAINT [PK_Places] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [UserProfile].[Educations]  WITH CHECK ADD  CONSTRAINT [FK_Educations_Credentials_CredentialId] FOREIGN KEY([CredentialId])
REFERENCES [UserProfile].[Credentials] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [UserProfile].[Educations] CHECK CONSTRAINT [FK_Educations_Credentials_CredentialId]
GO
ALTER TABLE [UserProfile].[Employments]  WITH CHECK ADD  CONSTRAINT [FK_Employments_Credentials_CredentialId] FOREIGN KEY([CredentialId])
REFERENCES [UserProfile].[Credentials] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [UserProfile].[Employments] CHECK CONSTRAINT [FK_Employments_Credentials_CredentialId]
GO
ALTER TABLE [UserProfile].[Followers]  WITH CHECK ADD  CONSTRAINT [FK_Followers_Credentials_CredentialId] FOREIGN KEY([CredentialId])
REFERENCES [UserProfile].[Credentials] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [UserProfile].[Followers] CHECK CONSTRAINT [FK_Followers_Credentials_CredentialId]
GO
ALTER TABLE [UserProfile].[Followings]  WITH CHECK ADD  CONSTRAINT [FK_Followings_Credentials_CredentialId] FOREIGN KEY([CredentialId])
REFERENCES [UserProfile].[Credentials] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [UserProfile].[Followings] CHECK CONSTRAINT [FK_Followings_Credentials_CredentialId]
GO
ALTER TABLE [UserProfile].[OtherExperiences]  WITH CHECK ADD  CONSTRAINT [FK_OtherExperiences_Credentials_CredentialId] FOREIGN KEY([CredentialId])
REFERENCES [UserProfile].[Credentials] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [UserProfile].[OtherExperiences] CHECK CONSTRAINT [FK_OtherExperiences_Credentials_CredentialId]
GO
ALTER TABLE [UserProfile].[Places]  WITH CHECK ADD  CONSTRAINT [FK_Places_Credentials_CredentialId] FOREIGN KEY([CredentialId])
REFERENCES [UserProfile].[Credentials] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [UserProfile].[Places] CHECK CONSTRAINT [FK_Places_Credentials_CredentialId]
GO

-----------------------Alter Scripts----------------
go
DROP PROC [dbo].[SpTopUserCalculation];
GO
GO
-- Batch submitted through debugger: SQLQuery1.sql|19|0|C:\Users\Akash\AppData\Local\Temp\~vsC2D6.sql
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
go
DROP PROC [dbo].[SpGetUserViewModel];
GO
CREATE proc [dbo].[SpGetUserViewModel]
(
@userId nvarchar(256)
)
AS
BEGIN
--Default ImageUrl =avatar.png
--        PracticeAreaName = ""
--        fullName="Guest"
select Id UserId,
ISNULL((
select top 1 ImageUrl from UserProfile.Credentials where UserId=u.Id
),'avatar.png') ImageUrl,
ISNULL((
select top 1 ISNULL(FirstName,'')+' '+ISNULL(LastName ,'') from UserProfile.Credentials where UserId=u.Id
),'Guest' )Name,
ISNULL(STUFF((
select pa.Position+','
from UserProfile.Employments pa
where CredentialId=(select top 1 CredentialId from UserProfile.Credentials c where c.UserId=@userId)
FOR XML PATH('')
),1,1,''),'') Occupation
from [Identity].[AspNetUsers] u
where u.Id=@userId

END

Go
DROP PROC SpProfileParameterCount;
GO
CREATE proc SpProfileParameterCount
(
@credentialId nvarchar(255)
)
as
BEGIN 

--select top 1 UserId  from UserProfile.[Credentials] c where c.Id='9f5b4ead-f9e7-49da-b0fa-1683195cfcba'
select 
(select Count(*) from UserProfile.Followings f where f.CredentialId=c.Id ) FollowingsCount,
(select Count(*) from UserProfile.Followers f where f.CredentialId=c.Id ) FollowersCount,
(select count(*) from Questions.Bookmarks b where b.UserId=c.UserId ) BookmarksCount,
(select count(*) from Questions.Answers b where b.UserId=c.UserId) AnswersCount,
(select count(*) from Questions.Questions b where b.UserId=c.UserId)  QuestionsCount,
0 DirectQuestionCount,
(select count(*) from Blog.Blogs b where b.UserId=c.UserId) BlogsCount
from UserProfile.[Credentials] c  
where c.Id=@credentialId

END