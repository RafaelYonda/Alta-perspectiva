
USE AltaPerspectiva
GO
CREATE TABLE [Questions].[QuestionReports](
	[Id] [uniqueidentifier] NOT NULL,
	[AnswerId] [uniqueidentifier] NULL,
	[Comment] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](max) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_QuestionReports] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO


ALTER TABLE [Questions].[QuestionReports]  WITH CHECK ADD  CONSTRAINT [FK_QuestionReports_Answers] FOREIGN KEY([AnswerId])
REFERENCES [Questions].[Answers] ([Id])
GO

ALTER TABLE [Questions].[QuestionReports] CHECK CONSTRAINT [FK_QuestionReports_Answers]
GO

ALTER TABLE [Questions].[QuestionReports]  WITH CHECK ADD  CONSTRAINT [FK_QuestionReports_Questions] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
GO

ALTER TABLE [Questions].[QuestionReports] CHECK CONSTRAINT [FK_QuestionReports_Questions]
GO
