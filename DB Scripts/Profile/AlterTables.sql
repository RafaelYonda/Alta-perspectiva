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