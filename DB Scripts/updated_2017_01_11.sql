CREATE TABLE [Questions].[Topics](
	[Id] [uniqueidentifier] NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[TopicName] [nvarchar](max) NULL,
 CONSTRAINT [PK_Topics] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [Questions].[Topics]  WITH CHECK ADD  CONSTRAINT [FK_Topics_Categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [Questions].[Categories] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [Questions].[Topics] CHECK CONSTRAINT [FK_Topics_Categories_CategoryId]
GO

CREATE TABLE [Questions].[Levels](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[LevelName] [nvarchar](max) NULL,
	[LevelRank] [int] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
 CONSTRAINT [PK_Levels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
CREATE TABLE [Questions].[QuestionLevels](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[LevelId] [uniqueidentifier] NOT NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_QuestionLevels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [Questions].[QuestionLevels]  WITH CHECK ADD  CONSTRAINT [FK_QuestionLevels_Levels_LevelId] FOREIGN KEY([LevelId])
REFERENCES [Questions].[Levels] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [Questions].[QuestionLevels] CHECK CONSTRAINT [FK_QuestionLevels_Levels_LevelId]
GO

ALTER TABLE [Questions].[QuestionLevels]  WITH CHECK ADD  CONSTRAINT [FK_QuestionLevels_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [Questions].[QuestionLevels] CHECK CONSTRAINT [FK_QuestionLevels_Questions_QuestionId]
GO

CREATE TABLE [Questions].[QuestionTopics](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[TopicId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_QuestionTopics] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [Questions].[QuestionTopics]  WITH CHECK ADD  CONSTRAINT [FK_QuestionTopics_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [Questions].[QuestionTopics] CHECK CONSTRAINT [FK_QuestionTopics_Questions_QuestionId]
GO

ALTER TABLE [Questions].[QuestionTopics]  WITH CHECK ADD  CONSTRAINT [FK_QuestionTopics_Topics_TopicId] FOREIGN KEY([TopicId])
REFERENCES [Questions].[Topics] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [Questions].[QuestionTopics] CHECK CONSTRAINT [FK_QuestionTopics_Topics_TopicId]
GO
