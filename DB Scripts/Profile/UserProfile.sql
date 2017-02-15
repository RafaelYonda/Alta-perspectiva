USE [AltaPerspectiva]
GO
DROP TABLE [Questions].[DirectQuestions];
GO
GO

CREATE TABLE [Questions].[DirectQuestions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[QuestionAskedToUser] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK__DirectQu__3214EC07DA8C3D86] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
DROP TABLE [UserProfile].[Followers]
GO
DROP TABLE [UserProfile].[Followings]
Go
/****** Object:  Schema [UserProfile]    Script Date: 2/6/2017 7:10:43 PM ******/
DROP TABLE UserProfile.Biography;
GO
DROP TABLE UserProfile.ContractInformation;
GO
DROP TABLE UserProfile.Education;
Go
DROP TABLE UserProfile.Experience;
Go
DROP TABLE UserProfile.Insight;
Go
DROP TABLE UserProfile.PracticeArea;
Go
DROP TABLE UserProfile.Skill;
Go
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
