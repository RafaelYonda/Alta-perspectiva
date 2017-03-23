USE [AltaPerspectiva]
GO
/****** Object:  Schema [Blog]    Script Date: 3/23/2017 5:42:32 PM ******/
CREATE SCHEMA [Blog]
GO
/****** Object:  Schema [Identity]    Script Date: 3/23/2017 5:42:33 PM ******/
CREATE SCHEMA [Identity]
GO
/****** Object:  Schema [Questions]    Script Date: 3/23/2017 5:42:33 PM ******/
CREATE SCHEMA [Questions]
GO
/****** Object:  Schema [UserProfile]    Script Date: 3/23/2017 5:42:34 PM ******/
CREATE SCHEMA [UserProfile]
GO
/****** Object:  Table [Blog].[BlogComments]    Script Date: 3/23/2017 5:42:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Blog].[BlogComments](
	[Id] [uniqueidentifier] NOT NULL,
	[BlogPostId] [uniqueidentifier] NOT NULL,
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Blog].[BlogLikes]    Script Date: 3/23/2017 5:42:35 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Blog].[BlogPosts]    Script Date: 3/23/2017 5:42:35 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Blog].[Blogs]    Script Date: 3/23/2017 5:42:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Blog].[Blogs](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Url] [nvarchar](max) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_Blogs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[AspNetRoleClaims]    Script Date: 3/23/2017 5:42:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[AspNetRoles]    Script Date: 3/23/2017 5:42:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[AspNetUserClaims]    Script Date: 3/23/2017 5:42:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[AspNetUserLogins]    Script Date: 3/23/2017 5:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[AspNetUserRoles]    Script Date: 3/23/2017 5:42:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[AspNetUsers]    Script Date: 3/23/2017 5:42:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[Name] [nvarchar](max) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[UserName] [nvarchar](256) NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[AspNetUserTokens]    Script Date: 3/23/2017 5:42:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[OpenIddictApplications]    Script Date: 3/23/2017 5:42:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[OpenIddictApplications](
	[Id] [nvarchar](450) NOT NULL,
	[ClientId] [nvarchar](450) NULL,
	[ClientSecret] [nvarchar](max) NULL,
	[DisplayName] [nvarchar](max) NULL,
	[LogoutRedirectUri] [nvarchar](max) NULL,
	[RedirectUri] [nvarchar](max) NULL,
	[Type] [nvarchar](max) NULL,
 CONSTRAINT [PK_OpenIddictApplications] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[OpenIddictAuthorizations]    Script Date: 3/23/2017 5:42:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[OpenIddictAuthorizations](
	[Id] [nvarchar](450) NOT NULL,
	[Scope] [nvarchar](max) NULL,
 CONSTRAINT [PK_OpenIddictAuthorizations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[OpenIddictScopes]    Script Date: 3/23/2017 5:42:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[OpenIddictScopes](
	[Id] [nvarchar](450) NOT NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_OpenIddictScopes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Identity].[OpenIddictTokens]    Script Date: 3/23/2017 5:42:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Identity].[OpenIddictTokens](
	[Id] [nvarchar](450) NOT NULL,
	[ApplicationId] [nvarchar](450) NULL,
	[AuthorizationId] [nvarchar](450) NULL,
	[Type] [nvarchar](max) NULL,
 CONSTRAINT [PK_OpenIddictTokens] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[Answers]    Script Date: 3/23/2017 5:42:42 PM ******/
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
	[IsDrafted] [bit] NULL,
	[IsAnonymous] [bit] NULL,
	[FirstImageUrl] [nvarchar](max) NULL,
 CONSTRAINT [PK_Answers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[Bookmarks]    Script Date: 3/23/2017 5:42:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[Categories]    Script Date: 3/23/2017 5:42:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
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
	[Icon] [varchar](50) NULL,
	[Active] [varchar](20) NULL,
	[Sequence] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[Image] [varchar](250) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Questions].[CategoryFollowers]    Script Date: 3/23/2017 5:42:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[CategoryIcon]    Script Date: 3/23/2017 5:42:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Questions].[CategoryIcon](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[IconName] [varchar](250) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Questions].[Comments]    Script Date: 3/23/2017 5:42:45 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[DirectQuestions]    Script Date: 3/23/2017 5:42:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[DirectQuestions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[QuestionAskedToUser] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK__DirectQu__3214EC07DA8C3D86] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[Keywords]    Script Date: 3/23/2017 5:42:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Questions].[Keywords](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Text] [varchar](250) NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Keywords] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Questions].[Levels]    Script Date: 3/23/2017 5:42:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[Likes]    Script Date: 3/23/2017 5:42:47 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[QuestionCategories]    Script Date: 3/23/2017 5:42:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[QuestionCategories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_QuestionCategories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[QuestionLevels]    Script Date: 3/23/2017 5:42:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[QuestionLevels](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[LevelId] [uniqueidentifier] NOT NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_QuestionLevels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[QuestionReports]    Script Date: 3/23/2017 5:42:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
	[ModiferComment] [nvarchar](max) NULL,
 CONSTRAINT [PK_QuestionReports] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[Questions]    Script Date: 3/23/2017 5:42:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[Questions](
	[Id] [uniqueidentifier] NOT NULL,
	[Body] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Title] [nvarchar](max) NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[ViewCount] [int] NULL,
	[IsAnonymous] [bit] NULL,
	[IsDirectQuestion] [bit] NOT NULL CONSTRAINT [DF_Questions_IsDirectQuestion]  DEFAULT ((0)),
 CONSTRAINT [PK_Questions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[QuestionTopics]    Script Date: 3/23/2017 5:42:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Questions].[QuestionTopics](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[QuestionId] [uniqueidentifier] NOT NULL,
	[TopicId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_QuestionTopics] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[QuestionUserFollowings]    Script Date: 3/23/2017 5:42:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[ShareQuestions]    Script Date: 3/23/2017 5:42:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [Questions].[Topics]    Script Date: 3/23/2017 5:42:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [UserProfile].[Credentials]    Script Date: 3/23/2017 5:42:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
	[ProfileViewCount] [int] NULL,
	[Title] [nvarchar](max) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[TwitterLink] [nvarchar](max) NULL,
	[FacebookLink] [nvarchar](max) NULL,
	[LinkedinLink] [nvarchar](max) NULL,
 CONSTRAINT [PK_Credentials] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [UserProfile].[Educations]    Script Date: 3/23/2017 5:42:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [UserProfile].[Educations](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CredentialId] [uniqueidentifier] NOT NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[SchoolName] [nvarchar](max) NULL,
	[Concentration] [nvarchar](max) NULL,
	[SecondaryConcentration] [nvarchar](max) NULL,
	[DegreeType] [nvarchar](max) NULL,
	[GraduationYear] [int] NULL,
 CONSTRAINT [PK_Educations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [UserProfile].[Employments]    Script Date: 3/23/2017 5:42:52 PM ******/
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
	[IsActive] [bit] NULL,
	[IsCurrentlyWorking] [bit] NOT NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Position] [nvarchar](max) NULL,
	[StartDate] [int] NULL,
	[EndDate] [int] NULL,
 CONSTRAINT [PK_Employments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [UserProfile].[OtherExperiences]    Script Date: 3/23/2017 5:42:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [UserProfile].[Places]    Script Date: 3/23/2017 5:42:53 PM ******/
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
	[IsActive] [bit] NULL,
	[IsCurrentyLiving] [bit] NOT NULL,
	[IsDeleted] [bit] NULL,
	[LocationName] [nvarchar](max) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[StartYear] [int] NULL,
	[EndYear] [int] NULL,
 CONSTRAINT [PK_Places] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [UserProfile].[ProductComments]    Script Date: 3/23/2017 5:42:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [UserProfile].[ProductComments](
	[Id] [uniqueidentifier] NOT NULL,
	[CommentText] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[VirtualStoreId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_ProductComments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [UserProfile].[VirtualStores]    Script Date: 3/23/2017 5:42:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [UserProfile].[VirtualStores](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ScreenShotFileName] [nvarchar](max) NULL,
	[ProductFileName] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Price] [float] NOT NULL,
	[Title] [nvarchar](max) NULL,
 CONSTRAINT [PK_VirtualStores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

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
ALTER TABLE [Identity].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [Identity].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Identity].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [Identity].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [Identity].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Identity].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [Identity].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [Identity].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Identity].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [Identity].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [Identity].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Identity].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [Identity].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [Identity].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Identity].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [Identity].[OpenIddictTokens]  WITH CHECK ADD  CONSTRAINT [FK_OpenIddictTokens_OpenIddictApplications_ApplicationId] FOREIGN KEY([ApplicationId])
REFERENCES [Identity].[OpenIddictApplications] ([Id])
GO
ALTER TABLE [Identity].[OpenIddictTokens] CHECK CONSTRAINT [FK_OpenIddictTokens_OpenIddictApplications_ApplicationId]
GO
ALTER TABLE [Identity].[OpenIddictTokens]  WITH CHECK ADD  CONSTRAINT [FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId] FOREIGN KEY([AuthorizationId])
REFERENCES [Identity].[OpenIddictAuthorizations] ([Id])
GO
ALTER TABLE [Identity].[OpenIddictTokens] CHECK CONSTRAINT [FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId]
GO
ALTER TABLE [Questions].[Answers]  WITH CHECK ADD  CONSTRAINT [FK_Answers_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
GO
ALTER TABLE [Questions].[Answers] CHECK CONSTRAINT [FK_Answers_Questions_QuestionId]
GO
ALTER TABLE [Questions].[Bookmarks]  WITH CHECK ADD  CONSTRAINT [FK_Bookmarks_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Questions].[Bookmarks] CHECK CONSTRAINT [FK_Bookmarks_Questions_QuestionId]
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
ALTER TABLE [Questions].[Keywords]  WITH CHECK ADD  CONSTRAINT [FK_Keywords_Categories] FOREIGN KEY([CategoryId])
REFERENCES [Questions].[Categories] ([Id])
GO
ALTER TABLE [Questions].[Keywords] CHECK CONSTRAINT [FK_Keywords_Categories]
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
ALTER TABLE [Questions].[QuestionCategories]  WITH CHECK ADD  CONSTRAINT [FK_QuestionCategories_Categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [Questions].[Categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Questions].[QuestionCategories] CHECK CONSTRAINT [FK_QuestionCategories_Categories_CategoryId]
GO
ALTER TABLE [Questions].[QuestionCategories]  WITH CHECK ADD  CONSTRAINT [FK_QuestionCategories_Questions_QuestionId] FOREIGN KEY([QuestionId])
REFERENCES [Questions].[Questions] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Questions].[QuestionCategories] CHECK CONSTRAINT [FK_QuestionCategories_Questions_QuestionId]
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
ALTER TABLE [Questions].[Topics]  WITH CHECK ADD  CONSTRAINT [FK_Topics_Categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [Questions].[Categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [Questions].[Topics] CHECK CONSTRAINT [FK_Topics_Categories_CategoryId]
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
ALTER TABLE [UserProfile].[ProductComments]  WITH CHECK ADD  CONSTRAINT [FK_ProductComments_VirtualStores_VirtualStoreId] FOREIGN KEY([VirtualStoreId])
REFERENCES [UserProfile].[VirtualStores] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [UserProfile].[ProductComments] CHECK CONSTRAINT [FK_ProductComments_VirtualStores_VirtualStoreId]
GO
/****** Object:  StoredProcedure [dbo].[SpCategoryWiseAnswer]    Script Date: 3/23/2017 5:42:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc [dbo].[SpCategoryWiseAnswer]
(
@userId nvarchar(255)
)
AS
BEGIN

select COUNT(*) AnswerCount,(select Name from Questions.Categories c where c.Id=qc.CategoryId) CategoryName,(select Image from Questions.Categories cc where cc.Id=qc.CategoryId) ImageUrl,qc.CategoryId
from Questions.Answers a 
inner join Questions.Questions q
on a.QuestionId=q.Id
inner join Questions.QuestionCategories qc
on q.Id=qc.QuestionId
where a.UserId=@userId
group by qc.CategoryId


END


GO
/****** Object:  StoredProcedure [dbo].[SpProfileParameterCount]    Script Date: 3/23/2017 5:42:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[SpProfileParameterCount] --'3a3e773a-614f-48b6-af14-96be31589001'
(
@userId nvarchar(255)
)
AS
BEGIN 
DECLARE @ProfileViewCount int;
--Extra
DECLARE @credentialId nvarchar(255);
select top 1 @ProfileViewCount=ISNULL(ProfileViewCount,0)
from  UserProfile.[Credentials] c 
where c.UserId=@userId;

DECLARE @AnswerLikeCount int ;
set @AnswerLikeCount=(select SUM(X.LikeCount) AnswerLikeCount from (
select 
(select count(*) from Questions.Likes l where l.AnswerId= a.Id) LikeCount
from Questions.Answers a
where a.UserId=@userId
) X)

DECLARE @AnswerMadeThisMonth int;
set @AnswerMadeThisMonth=(select COUNT(*) 
from Questions.Answers a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()) and a.IsDrafted=null) 

DECLARE @QuestionMadeThisMonth int;
set @QuestionMadeThisMonth=(select COUNT(*) 
from Questions.Questions a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()))


DECLARE @Followings int;
select @Followings=count(*) from Questions.QuestionUserFollowings qf where qf.UserId=@userId and qf.IsDeleted is null;
DECLARE @Followers int;
select @Followers=count(*) from Questions.QuestionUserFollowings qf where qf.FollowedUserId=@userId and qf.IsDeleted is null
DECLARE @Bookmarks int;
select @Bookmarks=COUNT(*) from Questions.Bookmarks b where b.UserId=@userId
DECLARE @Answers int;
select @Answers=COUNT(*) from Questions.Answers a where a.UserId=@userId and a.IsDrafted is null
DECLARE @Questions int ;
select @Questions=COUNT(*) from Questions.Questions q where q.UserId=@userId and q.IsDirectQuestion=0
DECLARE @DirectQuestions int;
select @DirectQuestions=COUNT(*) from Questions.DirectQuestions q where q.QuestionAskedToUser=@userId 
DECLARE @Blogs int;
SELECT @Blogs=count(*) FROM [AltaPerspectiva].[Blog].[Blogs] where UserId=@userId;
select 
ISNULL(@ProfileViewCount,0) ProfileViewCount,
ISNULL(@AnswerLikeCount,0) AnswerLikeCount,
ISNULL(@AnswerMadeThisMonth,0) AnswerMadeThisMonth,
ISNULL(@QuestionMadeThisMonth,0) QuestionMadeThisMonth,
ISNULL(@Followings,0) [Followings],
ISNULL(@Followers,0) Followers,
ISNULL(@Bookmarks,0) Bookmarks,
ISNULL(@Answers,0) Answers,
ISNULL(@Questions,0) Questions,
ISNULL(@DirectQuestions,0) DirectQuestions,
ISNULL(@Blogs,0) Blogs
;
END



GO
/****** Object:  StoredProcedure [dbo].[SpTopUserCalculation]    Script Date: 3/23/2017 5:42:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[SpTopUserCalculation] 
(
  @userId nvarchar(200)=null,
  @catgeoryId nvarchar(200)=null
)
as
BEGIN
--for Top Five user
if (@userId is null)
	BEGIN
	;with CTE
	as(
	SELECT  [Id],CONVERT(uniqueidentifier,Id) UserId,
	ISNULL((select top 1 FirstName+' '+LastName as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc),[UserName]) Name,
	(select top 1 ImageUrl as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) *2+
	 (select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) *4
	) TotalCommulativePoint,
	(
	select top 1 e.Position from UserProfile.Employments e 
where CredentialId=(select top 1 Id from UserProfile.Credentials c where c.UserId=u.Id)
order by CreatedOn desc
	) Occupation,
	ISNULL((select top 1 ProfileViewCount from UserProfile.Credentials where UserId=u.Id),0) ProfileViewCount
	
	FROM [Identity].AspNetUsers u

	)
	select top 5 * from CTE order by TotalCommulativePoint desc
	END
	---top user by category Id
ELSE IF (@userId is null and @catgeoryId is not null)
BEGIN
;with TopFiveUserCTE
as
(
SELECT  [Id],CONVERT(uniqueidentifier,Id) UserId,
	ISNULL((select top 1 FirstName+' '+LastName as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc),[UserName]) Name,
	(select top 1 ImageUrl as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion 
	from Questions.Questions q 
	inner join Questions.QuestionCategories qc
	on q.Id=qc.QuestionId
	where qc.CategoryId=@catgeoryId and q.UserId=u.Id) TotalQuestion,
	(
	select ISNULL(count(*),0) TotalAnswer from Questions.Answers a
	inner join Questions.QuestionCategories qc
	on a.QuestionId=qc.QuestionId
	where CategoryId=@catgeoryId and  UserId=u.Id
	) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) *2+
	 (select ISNULL(count(*),0) TotalQuestion 
	from Questions.Questions q 
	inner join Questions.QuestionCategories qc
	on q.Id=qc.QuestionId
	where qc.CategoryId=@catgeoryId and q.UserId=u.Id) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers a
	inner join Questions.QuestionCategories qc
	on a.QuestionId=qc.QuestionId
	where CategoryId=@catgeoryId and  UserId=u.Id) *4
	) TotalCommulativePoint
	,
	(
	select top 1 e.Position from UserProfile.Employments e 
where CredentialId=(select top 1 Id from UserProfile.Credentials c where c.UserId=u.Id)
order by CreatedOn desc
	) Occupation,
	ISNULL((select ProfileViewCount from UserProfile.Credentials where UserId=u.Id),0) ProfileViewCount
	FROM [Identity].AspNetUsers u

)
select top 5 * from TopFiveUserCTE order by TotalCommulativePoint desc 
END

ELSE
	BEGIN
	SELECT  [Id],CONVERT(uniqueidentifier,Id) UserId,
	ISNULL((select top 1 FirstName+' '+LastName as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc),[UserName]) Name,
	(select top 1 ImageUrl as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) *2+
	 (select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) *4
	) TotalCommulativePoint,
	
	(
	select top 1 e.Position from UserProfile.Employments e 
where CredentialId=(select top 1 Id from UserProfile.Credentials c where c.UserId=@userId)
order by CreatedOn desc
	) Occupation,
	ISNULL((select ProfileViewCount from UserProfile.Credentials where UserId=@userId),0) ProfileViewCount
	
	FROM [Identity].AspNetUsers u
	where u.Id=@userId
	END

END


GO
/****** Object:  StoredProcedure [dbo].[SpUserInfoDetails]    Script Date: 3/23/2017 5:42:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[SpUserInfoDetails] --'9f5b4ead-f9e7-49da-b0fa-1683195cfcba'
(
@userId nvarchar(255)
)
AS
BEGIN

DECLARE @ImageUrl nvarchar(500);
DECLARE @FullName nvarchar(500);
DECLARE @Title nvarchar(500);

DECLARE @ProfileViewCount int;
--Extra
DECLARE @credentialId nvarchar(255);
select top 1 @credentialId=Id, @ImageUrl=ImageUrl,@FullName=ISNULL(FirstName,'')+' '+ISNULL(LastName,''),@ProfileViewCount=ISNULL(ProfileViewCount,0)
from  UserProfile.[Credentials] c 
where c.UserId=@userId;
if(@FullName='' or @FullName is null)
BEGIN
select @FullName=UserName from[Identity].[AspNetUsers] a where a.Id = @userId;
END

--
set @Title=(select top 1 Position from UserProfile.Employments e where e.CredentialId=@credentialId);
--Depends on credentialId
DECLARE @Education nvarchar(500);
set @Education=(select top 1 ISNULL(Concentration,'')+' , '+ISNULL(SchoolName,'')+', '+ISNULL(SecondaryConcentration,'') As Education
from UserProfile.Educations  edu 
where  edu.CredentialId=@credentialId
order by CreatedOn desc);

DECLARE @Employment nvarchar(500);
set @Employment=(
select top 1 Position+' , '+ISNULL(CompanyName,'') as Employment
from UserProfile.Employments  emp 
where  emp.CredentialId=@credentialId
order by CreatedOn desc
)
DECLARE @Place nvarchar(500);

set @Place=(
select top 1 LocationName as LocationName
from UserProfile.Places  p 
where  p.CredentialId=@credentialId
order by CreatedOn desc
);
DECLARE @OtherExperience nvarchar(500);

set @OtherExperience=(
select top 1 [Description] 
from UserProfile.OtherExperiences o
where o.CredentialId=@credentialId
order by CreatedOn desc
);

--Dependes on userId
DECLARE @AnswerCount int;
set @AnswerCount=(select count(*) as TotalAnswer from Questions.Answers a where a.UserId=@userId)
DECLARE @QuestionCount int;
set @QuestionCount=(select COUNT(*) QuestionCount from Questions.Questions q where q.UserId=@UserId);
DECLARE @QuestionViewCount int;
set @QuestionViewCount=(select SUM(ISNULL(q.ViewCount,0)) QuestionViewCount from Questions.Questions q where q.UserId=@userId);


DECLARE @AnswerLikeCount int ;

set @AnswerLikeCount=(select SUM(X.LikeCount) AnswerLikeCount from (

select 
(select count(*) from Questions.Likes l where l.AnswerId= a.Id) LikeCount
from Questions.Answers a
where a.UserId=@userId
) X)

DECLARE @AnswerMadeThisMonth int;

set @AnswerMadeThisMonth=(select COUNT(*) 
from Questions.Answers a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()))

DECLARE @QuestionMadeThisMonth int;

set @QuestionMadeThisMonth=(select COUNT(*) 
from Questions.Questions a
where a.UserId=@userId and MONTH(a.CreatedOn)=MONTH(GETDATE()))


select CONVERT(UNIQUEIDENTIFIER, @userId) UserId,
@ImageUrl ImageUrl,
@FullName FullName,
@Title Title,
@AnswerCount AnswerCount,
@QuestionCount QuestionCount,
ISNULL(@QuestionViewCount,0) QuestionViewCount,
@Education Education,
@Employment Employment,
@Place Place,
@OtherExperience OtherExperience,

ISNULL(@QuestionViewCount,0) QuestionViewCount
END

GO
