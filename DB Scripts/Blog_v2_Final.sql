
/****** Object:  Schema [Blog]    Script Date: 2/8/2017 3:42:12 PM ******/
CREATE SCHEMA [Blog]
GO
/****** Object:  Table [Blog].[BlogComments]    Script Date: 2/8/2017 3:42:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Blog].[BlogComments](
	[Id] [uniqueidentifier] NOT NULL,
	[BlogPostId] [uniqueidentifier] NOT NULL,
	[CommentDate] [datetime2](7) NOT NULL,
	[CommentText] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_BlogComments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Blog].[BlogLikes]    Script Date: 2/8/2017 3:42:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Blog].[BlogLikes](
	[Id] [uniqueidentifier] NOT NULL,
	[BlogPostId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_BlogLikes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Blog].[BlogPosts]    Script Date: 2/8/2017 3:42:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Blog].[BlogPosts](
	[Id] [uniqueidentifier] NOT NULL,
	[BlogId] [uniqueidentifier] NOT NULL,
	[BlogViewCount] [bigint] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Title] [nvarchar](max) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_BlogPosts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Blog].[Blogs]    Script Date: 2/8/2017 3:42:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Blog].[Blogs](
	[Id] [uniqueidentifier] NOT NULL,
	[BlogName] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Url] [nvarchar](max) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Blogs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [Blog].[BlogComments]  WITH CHECK ADD  CONSTRAINT [FK_BlogComments_BlogPosts_BlogPostId] FOREIGN KEY([BlogPostId])
REFERENCES [Blog].[BlogPosts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Blog].[BlogComments] CHECK CONSTRAINT [FK_BlogComments_BlogPosts_BlogPostId]
GO
ALTER TABLE [Blog].[BlogLikes]  WITH CHECK ADD  CONSTRAINT [FK_BlogLikes_BlogPosts_BlogPostId] FOREIGN KEY([BlogPostId])
REFERENCES [Blog].[BlogPosts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Blog].[BlogLikes] CHECK CONSTRAINT [FK_BlogLikes_BlogPosts_BlogPostId]
GO
ALTER TABLE [Blog].[BlogPosts]  WITH CHECK ADD  CONSTRAINT [FK_BlogPosts_Blogs_BlogId] FOREIGN KEY([BlogId])
REFERENCES [Blog].[Blogs] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Blog].[BlogPosts] CHECK CONSTRAINT [FK_BlogPosts_Blogs_BlogId]
GO
