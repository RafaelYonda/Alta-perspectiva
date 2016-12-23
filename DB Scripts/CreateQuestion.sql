
USE [AltaPerspectiva]
GO
/****** Object:  Schema [Questions]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE SCHEMA [Questions]
GO
/****** Object:  Table [Questions].[Answers]    Script Date: 11/15/2016 3:40:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[Answers](
	[Id] [uniqueidentifier] NOT NULL,
	[AnswerDate] [datetime2](7) NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[QuestionId] [uniqueidentifier] NULL,
	[Text] [nvarchar](max) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Answers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Questions].[Categories]    Script Date: 11/15/2016 3:40:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[Categories](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Name] [nvarchar](max) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Questions].[Comments]    Script Date: 11/15/2016 3:40:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[Comments](
	[Id] [uniqueidentifier] NOT NULL,
	[AnswerId] [uniqueidentifier] NULL,
	[CommentDate] [datetime2](7) NOT NULL,
	[CommentText] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[QuestionID] [uniqueidentifier] NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Questions].[Likes]    Script Date: 11/15/2016 3:40:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[Likes](
	[Id] [uniqueidentifier] NOT NULL,
	[AnswerId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[QuestionId] [uniqueidentifier] NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Likes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Questions].[QuestionCategories]    Script Date: 11/15/2016 3:40:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[QuestionCategories](
	[Id] [uniqueidentifier] NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[QuestionId1] [uniqueidentifier] NULL,
 CONSTRAINT [PK_QuestionCategories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Questions].[Questions]    Script Date: 11/15/2016 3:40:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[Questions](
	[Id] [uniqueidentifier] NOT NULL,
	[Body] [nvarchar](max) NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Title] [nvarchar](max) NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Questions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [IX_Answers_QuestionId]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_Answers_QuestionId] ON [Questions].[Answers]
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Comments_AnswerId]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_Comments_AnswerId] ON [Questions].[Comments]
(
	[AnswerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Comments_QuestionID]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_Comments_QuestionID] ON [Questions].[Comments]
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Likes_AnswerId]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_Likes_AnswerId] ON [Questions].[Likes]
(
	[AnswerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Likes_QuestionId]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_Likes_QuestionId] ON [Questions].[Likes]
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_QuestionCategories_QuestionId]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_QuestionCategories_QuestionId] ON [Questions].[QuestionCategories]
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_QuestionCategories_QuestionId1]    Script Date: 11/15/2016 3:40:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_QuestionCategories_QuestionId1] ON [Questions].[QuestionCategories]
(
	[QuestionId1] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [Questions].[Answers]  WITH CHECK ADD  CONSTRAINT [FK_Answers_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
GO
ALTER TABLE [Questions].[Answers] CHECK CONSTRAINT [FK_Answers_Questions_QuestionId]
GO
ALTER TABLE [Questions].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Answers_AnswerId] FOREIGN KEY([AnswerId])
REFERENCES [Questions].[Answers] ([Id])
GO
ALTER TABLE [Questions].[Comments] CHECK CONSTRAINT [FK_Comments_Answers_AnswerId]
GO
ALTER TABLE [Questions].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Questions_QuestionID] FOREIGN KEY([QuestionID])
REFERENCES [Questions].[Questions] ([Id])
GO
ALTER TABLE [Questions].[Comments] CHECK CONSTRAINT [FK_Comments_Questions_QuestionID]
GO
ALTER TABLE [Questions].[Likes]  WITH CHECK ADD  CONSTRAINT [FK_Likes_Answers_AnswerId] FOREIGN KEY([AnswerId])
REFERENCES [Questions].[Answers] ([Id])
GO
ALTER TABLE [Questions].[Likes] CHECK CONSTRAINT [FK_Likes_Answers_AnswerId]
GO
ALTER TABLE [Questions].[Likes]  WITH CHECK ADD  CONSTRAINT [FK_Likes_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
GO
ALTER TABLE [Questions].[Likes] CHECK CONSTRAINT [FK_Likes_Questions_QuestionId]
GO
ALTER TABLE [Questions].[QuestionCategories]  WITH CHECK ADD  CONSTRAINT [FK_QuestionCategories_Categories_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Questions].[QuestionCategories] CHECK CONSTRAINT [FK_QuestionCategories_Categories_QuestionId]
GO
ALTER TABLE [Questions].[QuestionCategories]  WITH CHECK ADD  CONSTRAINT [FK_QuestionCategories_Questions_QuestionId1] FOREIGN KEY([QuestionId1])
REFERENCES [Questions].[Questions] ([Id])
GO
ALTER TABLE [Questions].[QuestionCategories] CHECK CONSTRAINT [FK_QuestionCategories_Questions_QuestionId1]
GO
USE [master]
GO

CREATE TABLE [Questions].[CategoryFollowers](
	[Id] [uniqueidentifier] NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_CategoryFollowers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]