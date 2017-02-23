USE [AltaPerspectiva]
GO
/*Virtual Stores*/
SET ANSI_NULLS ON
GO
DROP TABLE [UserProfile].[VirtualStores];

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [UserProfile].[VirtualStores](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ScreenShotImage] [nvarchar](max) NULL,
	[FileName] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Prize] [float] NOT NULL,
	[Title] [nvarchar](max) NULL,
 CONSTRAINT [PK_VirtualStores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
















GO
ALTER TABLE Questions.Questions 
ADD IsDirectQuestion bit NOT NULL CONSTRAINT DF_Questions_IsDirectQuestion DEFAULT (0)
GO
ALTER TABLE [Blog].[BlogComments]
DROP COLUMN CommentDate
GO
ALTER TABLE [Blog].Blogs
DROP COLUMN BlogName;

Go
ALTER TABLE [Blog].Blogs 
ADD Title nvarchar(MAX) null
GO
ALTER TABLE [Blog].Blogs 
ADD [Description] nvarchar(MAX) null

Go 
ALTER TABLE UserProfile.Educations
DROP COLUMN SchoolDegreeName,SchoolCompletionDate,CollegeName,CollegeDegree,CollegeCompletionDate,Certification,CertificationType
GO 
ALTER TABLE UserProfile.Educations
ADD [Concentration] nvarchar(MAX) null
GO
ALTER TABLE UserProfile.Educations
ADD SecondaryConcentration nvarchar(MAX) null
GO
ALTER TABLE UserProfile.Educations
ADD DegreeType nvarchar(MAX) null
GO
ALTER TABLE UserProfile.Educations
ADD GraduationYear datetime null
GO

ALTER TABLE UserProfile.Educations drop column GraduationYear
GO

ALTER TABLE UserProfile.Educations ADD 	GraduationYear int NULL
GO

GO

ALTER TABLE UserProfile.Employments drop column StartDate
GO

ALTER TABLE UserProfile.Employments ADD StartDate int NULL
GO
GO

ALTER TABLE UserProfile.Employments drop column EndDate
GO

ALTER TABLE UserProfile.Employments  ADD 	EndDate int NULL
GO
GO

ALTER TABLE UserProfile.Places drop column StartYear
GO

ALTER TABLE UserProfile.Places ADD StartYear int NULL
GO
GO

ALTER TABLE UserProfile.Places drop column EndYear
GO

ALTER TABLE UserProfile.Places  ADD EndYear int NULL
GO
ALTER TABLE Blog.Blogs ADD Title nvarchar(MAX) null
GO
GO
ALTER TABLE Blog.Blogs ADD Description nvarchar(MAX) null
GO


