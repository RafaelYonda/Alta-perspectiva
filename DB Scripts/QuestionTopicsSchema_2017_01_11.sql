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


GO
INSERT [Questions].[Levels] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [LevelName], [LevelRank], [ModifiedBy], [ModifiedOn]) VALUES (N'59d830c0-de58-4853-575f-08d43a214466', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, N'akash', 1, NULL, NULL)
INSERT [Questions].[Levels] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [LevelName], [LevelRank], [ModifiedBy], [ModifiedOn]) VALUES (N'53047027-601e-4c58-cec0-08d43a2216d9', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, N'Beginer', 1, NULL, NULL)
INSERT [Questions].[Levels] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [LevelName], [LevelRank], [ModifiedBy], [ModifiedOn]) VALUES (N'f29cd69b-b578-45f0-da9b-08d43a2251e3', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, N'Intermediate', 2, NULL, NULL)
INSERT [Questions].[Levels] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [LevelName], [LevelRank], [ModifiedBy], [ModifiedOn]) VALUES (N'b91353c0-471a-4c0d-54aa-08d43a227ea9', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, N'Advanced', 3, NULL, NULL)
INSERT [Questions].[Levels] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [LevelName], [LevelRank], [ModifiedBy], [ModifiedOn]) VALUES (N'a35f9cd5-91f4-42ec-1097-08d43a229943', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, N'akash', 1, NULL, NULL)
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'b32b29f2-0e4b-cfbb-f632-08d43a218741', N'7639b416-8d1c-4119-b58e-143cb860e8a6', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'v1')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'448b0381-48cf-c11f-a67e-08d43a2188d5', N'7639b416-8d1c-4119-b58e-143cb860e8a6', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'v2')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'8fb92414-306d-c23a-bd9a-08d43a218a5e', N'7639b416-8d1c-4119-b58e-143cb860e8a6', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'v3')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'74e27343-fbc4-c13c-ef3a-08d43a229ede', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'e1')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'9afb9dfc-ceb8-ce45-cd40-08d43a22a18f', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'e2')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'87827192-0512-cb1c-7b44-08d43a22a3dd', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'e3')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'3abf5bdc-b8c9-cd69-d34c-08d43a22a827', N'722efc46-dd1a-4ed7-9fb9-1133566a210e', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'p1')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'1d368e0f-c625-c856-543a-08d43a22a9c4', N'722efc46-dd1a-4ed7-9fb9-1133566a210e', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'p2')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'a5815427-25b6-c89e-a5ee-08d43a22ab3e', N'722efc46-dd1a-4ed7-9fb9-1133566a210e', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'p3')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'c3240acf-02d9-ce29-7946-08d43a22b0c4', N'a51d54c3-5c01-4999-885c-3a22eeecca87', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'd1')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'f41ffd00-368c-ccaa-e165-08d43a22b228', N'a51d54c3-5c01-4999-885c-3a22eeecca87', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'd2')
INSERT [Questions].[Topics] ([Id], [CategoryId], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [TopicName]) VALUES (N'f41a1625-8f6f-cddc-d044-08d43a22b383', N'a51d54c3-5c01-4999-885c-3a22eeecca87', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'd3')
GO