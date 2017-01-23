USE [AltaPerspectiva]
GO

ALTER TABLE [Questions].[Questions]
ADD  [IsAnonymous] [bit] NULL

GO
ALTER TABLE [Questions].[Answers]
ADD  [IsDrafted] [bit] NULL

GO
ALTER TABLE [Questions].[Answers]
ADD  [IsAnonymous] [bit] NULL

GO
/****** Object:  Table [Questions].[Bookmarks]    Script Date: 1/22/2017 6:20:18 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Questions].[Bookmarks](
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
 CONSTRAINT [PK_Bookmarks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [Questions].[Bookmarks]  WITH CHECK ADD  CONSTRAINT [FK_Bookmarks_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [Questions].[Bookmarks] CHECK CONSTRAINT [FK_Bookmarks_Questions_QuestionId]
GO


