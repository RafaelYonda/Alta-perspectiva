USE [AltaPerspectiva]
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


