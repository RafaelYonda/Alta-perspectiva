USE [master]
GO
/****** Object:  Database [AltaPerspectiva]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE DATABASE [AltaPerspectiva]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'AltaPerspectiva', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\AltaPerspectiva.mdf' , SIZE = 3264KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'AltaPerspectiva_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\AltaPerspectiva_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [AltaPerspectiva] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AltaPerspectiva].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AltaPerspectiva] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET ARITHABORT OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [AltaPerspectiva] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AltaPerspectiva] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AltaPerspectiva] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET  ENABLE_BROKER 
GO
ALTER DATABASE [AltaPerspectiva] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AltaPerspectiva] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [AltaPerspectiva] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [AltaPerspectiva] SET  MULTI_USER 
GO
ALTER DATABASE [AltaPerspectiva] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AltaPerspectiva] SET DB_CHAINING OFF 
GO
ALTER DATABASE [AltaPerspectiva] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [AltaPerspectiva] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [AltaPerspectiva] SET DELAYED_DURABILITY = DISABLED 
GO
USE [AltaPerspectiva]
GO
/****** Object:  Schema [Identity]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE SCHEMA [Identity]
GO
/****** Object:  Schema [Questions]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE SCHEMA [Questions]
GO
/****** Object:  Table [Identity].[AspNetRoleClaims]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[AspNetRoles]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[AspNetUserClaims]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[AspNetUserLogins]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[AspNetUserRoles]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Identity].[AspNetUsers]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[AspNetUserTokens]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[OpenIddictApplications]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[OpenIddictAuthorizations]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[OpenIddictScopes]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Identity].[OpenIddictTokens]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [Questions].[Answers]    Script Date: 11/29/2016 9:50:15 PM ******/
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
/****** Object:  Table [Questions].[Categories]    Script Date: 11/29/2016 9:50:15 PM ******/
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
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Questions].[Comments]    Script Date: 11/29/2016 9:50:15 PM ******/
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
/****** Object:  Table [Questions].[Keywords]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Questions].[Likes]    Script Date: 11/29/2016 9:50:15 PM ******/
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
/****** Object:  Table [Questions].[QuestionCategories]    Script Date: 11/29/2016 9:50:15 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Questions].[Questions]    Script Date: 11/29/2016 9:50:15 PM ******/
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
	[ViewCount] [int] NULL,
 CONSTRAINT [PK_Questions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [Identity].[AspNetUsers] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [LockoutEnabled], [LockoutEnd], [Name], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', 0, N'73a1c825-3040-4031-953f-49bb0b9fcece', N'zafrul@nascenia.com', 0, 1, NULL, NULL, N'ZAFRUL@NASCENIA.COM', N'ZAFRUL@NASCENIA.COM', N'AQAAAAEAACcQAAAAEPjS6QImSqgbXWtlZJlMSMv+Yb698Ik2OMbZV7VPmQOKN1Qwn4hdBCcDGJlYwE4Mwg==', NULL, 0, N'c75af4b2-26dc-4834-97b4-27ca85728bd7', 0, N'zafrul@nascenia.com')
INSERT [Identity].[OpenIddictApplications] ([Id], [ClientId], [ClientSecret], [DisplayName], [LogoutRedirectUri], [RedirectUri], [Type]) VALUES (N'b3e7c2ed-5f2d-4d55-adf6-57c9d8816a0f', N'azure', N'AQAAAAEAACcQAAAAENLlDJMyK11Broa+9V/j7h4dU6ntRUnnbmfe6BzeAa/Vm8M3q8yvVLQwQ8U5DV79fg==', N'Azure Application', N'http://altap.azurewebsites.net/', N'http://altap.azurewebsites.net/signin-oidc', N'confidential')
INSERT [Identity].[OpenIddictApplications] ([Id], [ClientId], [ClientSecret], [DisplayName], [LogoutRedirectUri], [RedirectUri], [Type]) VALUES (N'ba2a59dd-a966-4d2c-9973-b9b59738d88d', N'localhost', N'AQAAAAEAACcQAAAAEDDMgiepnktK3GD3Oh1/0yr5Xdt9rCMsokCBVx31p8v8tKlYK3fGrYGAhXPyZ+wKPQ==', N'LocalHost Application', N'http://localhost:5273/', N'http://localhost:5273/signin-oidc', N'confidential')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'084067a8-4529-4138-9295-d92fc6fc7593', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'19e232b9-26b0-4e4d-a22b-98177941c3f2', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'1c396057-e320-42ff-93ae-613faf32b4e3', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'1d09c33e-8cf5-4d79-9fb9-b801d1dfb601', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'4aa7344b-9224-48b3-95cf-bfd25485debb', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'4cfe14a9-a671-4acd-a256-563f7aad6f61', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'5872c8c7-35ce-4bd0-ae9c-52edb0b353de', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'6a9051b5-6a43-481a-ac4e-7fed206a63a8', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'722efc46-dd1a-4ed7-9fb9-1133566a210e', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'7639b416-8d1c-4119-b58e-143cb860e8a6', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'894e7284-3b3a-482d-afba-685a85720763', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'949ba7fc-8822-4c4d-8922-2cfc0054d52b', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'9606e2f9-d257-4af1-9099-28c45f453310', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'9a51d513-e76c-405f-bca7-6e19865b8384', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'a51d54c3-5c01-4999-885c-3a22eeecca87', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'c63a1017-bd3c-4eb6-97bd-7b650b28b705', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'ca855c8d-24ba-4b07-a904-eb94e0714e71', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'dd381671-7d0e-4011-ab1d-d5e4981f67f6', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'e9b792f4-e0f8-42a9-89bf-ca216e0528e5', NULL, NULL, N'refresh_token')
INSERT [Identity].[OpenIddictTokens] ([Id], [ApplicationId], [AuthorizationId], [Type]) VALUES (N'ee22c574-861c-435a-83ff-b117d511be38', NULL, NULL, N'refresh_token')
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'economía', N'icon-chart', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'722efc46-dd1a-4ed7-9fb9-1133566a210e', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Producción', N'icon-dice', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'7639b416-8d1c-4119-b58e-143cb860e8a6', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Ver todas', N'icon-star', N'active')
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'a51d54c3-5c01-4999-885c-3a22eeecca87', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Derecho', N'icon-process', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'5872c8c7-35ce-4bd0-ae9c-52edb0b353de', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Gestión Humana', N'icon-users', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'4cfe14a9-a671-4acd-a256-563f7aad6f61', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Recursos humanos
', N'icon-people', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'1c396057-e320-42ff-93ae-613faf32b4e3', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'planeación', N'icon-process', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'c63a1017-bd3c-4eb6-97bd-7b650b28b705', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Contabilidad
', N'icon-chart', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'6a9051b5-6a43-481a-ac4e-7fed206a63a8', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Estrategia', N'icon-dice', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Sistemas
', N'icon-chart', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'19e232b9-26b0-4e4d-a22b-98177941c3f2', NULL, NULL, CAST(N'2002-11-11 22:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Liderazgo', N'icon-people', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'4aa7344b-9224-48b3-95cf-bfd25485debb', NULL, NULL, CAST(N'2016-11-22 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Finanzas', N'icon-chart', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'dd381671-7d0e-4011-ab1d-d5e4981f67f6', NULL, NULL, CAST(N'2016-11-23 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Logística
', N'icon-chart', NULL)
INSERT [Questions].[Categories] ([Id], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Name], [Icon], [Active]) VALUES (N'084067a8-4529-4138-9295-d92fc6fc7593', NULL, NULL, CAST(N'2002-11-11 22:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'mercadeo', N'icon-people', NULL)
SET IDENTITY_INSERT [Questions].[Keywords] ON 

INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1, N'Demanda

', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (2, N'Finanzas personales', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (119, N'Ahorro', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (120, N'Utilidades ', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (121, N'Inversión', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (122, N'Interés', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (123, N'Riesgo', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (124, N'Capital', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (125, N'Presupuesto', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (126, N'Amortización', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (127, N'Cuota', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (128, N'Costo', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (129, N'Contabilidad', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (130, N'Cartera', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (131, N'Iva', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (132, N'Acciones', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (133, N'Activo', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (134, N'Apalacamiento', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (135, N'Cesantias', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (136, N'Liquidación', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (137, N'Sueldo', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (138, N'Salario', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (139, N'Crédito', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (140, N'Cuenta', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (141, N'Préstamo', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (142, N'Banco', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (143, N'Dividendo', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (144, N'Divisa', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (145, N'Financiación', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (146, N'Inflación', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (147, N'Ingresos', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (148, N'Gastos', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (149, N'Ebitda', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (150, N'Leasing', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (151, N'Liquidez', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (152, N'Macroeconomía', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (153, N'Microeconomía', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (154, N'Nómina', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (155, N'Patrimonio', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (156, N'Pasivo', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (157, N'Póliza', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (158, N'Prima', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (159, N'Pymes', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (160, N'Recesión', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (161, N'Rendimiento', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (162, N'Renta', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (163, N'Crédito', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (164, N'Débito', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (165, N'Bienes', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (166, N'Bancarrota', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (167, N'Economia', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (168, N'Valor', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (169, N'Emprender', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (170, N'Emprendimiento', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (171, N'Crisis', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (172, N'Industria', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (173, N'Balanced score card', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (174, N'Transacciones', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (175, N'Bolsa', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (176, N'Flujos', N'4aa7344b-9224-48b3-95cf-bfd25485debb')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (177, N'Estrategias de mercadeo', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (304, N'Marketing inbound', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (439, N'Digital marketing', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (440, N'Mercadotecnia', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (441, N'Redes de mercadeo', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (442, N'Publicidad', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (443, N'Diseño', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (444, N'Producto', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (445, N'Plaza ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (446, N'Precio', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (447, N'Promoción', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (448, N'Demanda', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (449, N'Economia', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (450, N'Comunicación', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (451, N'Anuncios', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (452, N'Ventas', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (453, N'Internet', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (454, N'Canales', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (455, N'Consumidor', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (456, N'Cliente', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (457, N'Hábitos de compra', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (458, N'Mercado   ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (459, N'Nicho', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (460, N'Análisis de mercado', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (461, N'Plan de mercadeo', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (462, N'Satisfacción del usuario', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (463, N'B2a', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (464, N'B2b', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (465, N'B2c', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (466, N'B2e', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (467, N'Brainstorming', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (468, N'Business plan', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (469, N'C2b', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (470, N'C2c', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (471, N'Campaña', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (472, N'Capital', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (473, N'Catálogo', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (474, N'Estrategia ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (475, N'Investigación', N'084067a8-4529-4138-9295-d92fc6fc7593')
GO
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (476, N'Retail', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (477, N'Posicionamiento', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (478, N'Merchandising', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (479, N'Benchmarking', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (480, N'Percepción', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (481, N'Fuentes primarias', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (482, N'Creatividad', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (483, N'Innovación', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (484, N'Tendencias', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (485, N'Oportunidades', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (486, N'Dofa', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (487, N'Pestal', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (488, N'Maslow', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (489, N'Necesidades', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (490, N'Sistema', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (491, N'Branding', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (492, N'Engagement', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (493, N'Concepto ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (494, N'Viral ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (495, N'Marcas ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (496, N'Experiencias', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (497, N'Focus group', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (498, N'Empaque ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (499, N'Consumidor ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (500, N'Nichos ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (501, N'Estilo de vida', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (502, N'Hábitos ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (503, N'Mailing', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (504, N'Servicio ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (505, N'Brief ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (506, N'Sinergia ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (507, N'Manager ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (508, N'Intercambios ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (509, N'Target', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (510, N'Voz a voz ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (511, N'Segmentación ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (512, N'Eslogan', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (513, N'Medios tradicionales ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (514, N'Community manager', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (515, N'Investigación cualitativa', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (516, N'Investigación cuantitativa', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (517, N'Encuestas ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (518, N'Entrevistas a produndidad ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (519, N'Cultura ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (520, N'Subcultura ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (521, N'Camara de gesel ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (522, N'Insight', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (523, N'Lead', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (524, N'Supermercados ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (525, N'Valor ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (526, N'Comunicar ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (527, N'Telemarketing ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (528, N'Estrategias pull ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (529, N'Estrategias push ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (530, N'Fijación de precios ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (531, N'Status', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (532, N'How know ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (533, N'Departamento ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (534, N'Social media ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (535, N'Zapping ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (536, N'Bases de datos ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (537, N'Consumo ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (538, N'Btl', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (539, N'Atl ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (540, N'Métricas ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (541, N'Distribución ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (542, N'Marketing mix ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (543, N'Rating ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (544, N'Saturación ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (545, N'Compradores de precios ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (546, N'Compradores de valor ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (547, N'Descreme ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (548, N'Storyboard ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (549, N'Agencias ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (550, N'Branding ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (551, N'Top of mind ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (552, N'Periódicos', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (553, N'Anuncio ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (554, N'Autoservicio ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (555, N'Decisión de compra ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (556, N'Segmentación de mercado ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (557, N'Comerciales ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (558, N'Estandarización ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (559, N'Awarness ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (560, N'Key account ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (561, N'Fuerza de ventas ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (562, N'Competencia ', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (563, N'Canvas', N'084067a8-4529-4138-9295-d92fc6fc7593')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (564, N'Ideas', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (565, N'Emprendimiento', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (566, N'Emprender', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (567, N'Negocio', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (568, N'Consejos', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (569, N'Creatividad', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (570, N'Inteligencia emocional', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (571, N'Liderazgo', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (572, N'Deporte', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (573, N'Absentismo laboral', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (574, N'Capacitación', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (575, N'Experiencia', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
GO
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (576, N'Salarios', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (577, N'Conocimiento', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (578, N'Habilidades', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (579, N'Cualidades', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (580, N'Aptitudes', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (581, N'Cargo', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (582, N'Puesto de trabajo', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (583, N'Remuneración ', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (584, N'Bonificación', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (585, N'Estrategia', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (586, N'Auditoria', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (587, N'Beneficio', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (588, N'Buen gobierno', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (589, N'Buenas prácticas', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (590, N'Clima laboral', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (591, N'Código de coducta', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (592, N'Competencias', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (593, N'Derecho laboral', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (594, N'Desempleo', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (595, N'Despido', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (596, N'Trabajo enequipo', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (597, N'Entrevista laboral', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (598, N'Sostenibilidad', N'4cfe14a9-a671-4acd-a256-563f7aad6f61')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (599, N'Mejoramiento', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (600, N'Lean', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (601, N'Servicios', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (602, N'Fila', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (603, N'Eficiencia', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (604, N'Efectividad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (605, N'Desperdicios', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (606, N'Eficacia', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (607, N'Riesgos', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (608, N'Pareto', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (609, N'Calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (610, N'Producto', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (611, N'Calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (612, N'Satisfacción del usuario', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (613, N'Capacidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (614, N'Políia de calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (615, N'Gestión', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (616, N'Aseguramiento de la calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (617, N'Ambiente de trabajo', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (618, N'Procedimientos', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (619, N'Estandarización', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (620, N'No conformidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (621, N'Conformidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (622, N'Acción preventiva', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (623, N'Acción correctiva', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (624, N'Reporceso', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (625, N'Documento', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (626, N'Manuel de la calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (627, N'Validación ', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (628, N'Verificación', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (629, N'Auditoría', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (630, N'Queja', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (631, N'Retroalimentación', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (632, N'Oportunidad de mejora', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (633, N'Phva', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (634, N'Proceso de mejora', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (635, N'Proyecto', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (636, N'Análisis swot', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (637, N'Lean start up', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (638, N'Despilfarro', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (639, N'Inventario', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (640, N'Cadena de valor', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (641, N'Materiales', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (642, N'Almacén ', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (643, N'Almacenaje', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (644, N'Aprovisionamiento', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (645, N'Canal de distribución', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (646, N'Código de barras', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (647, N'Comercio electónico', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (648, N'Contenedor', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (649, N'Costo', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (650, N'Mantenimiento', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (651, N'Cross docking', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (652, N'Demanda', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (653, N'Distribución', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (654, N'Envase', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (655, N'Eoq', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (656, N'Flete', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (657, N'Inventario', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (658, N'Tqm', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (659, N'Gestión de la calidad total', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (660, N'Gestión de stock', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (661, N'Just in time', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (662, N'Logística de abastecimiento', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (663, N'Logística de distribución', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (664, N'Logístca de producción', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (665, N'Logística inversa', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (666, N'Transporte', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (667, N'Pincking', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (668, N'Scm', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (669, N'Supply chain manangment', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (670, N'Servicio al cliente', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (671, N'Stock', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (672, N'Seguridad', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (673, N'Unidad de carga', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (674, N'Tránsito', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (675, N'Zona de picking', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
GO
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (677, N'Inventario', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (678, N'Inventario', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (679, N'Cadena de valor', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (680, N'Materiales', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (681, N'Almacén ', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (682, N'Almacenaje', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (683, N'Aprovisionamiento', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (684, N'Canal de distribución', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (685, N'Código de barras', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (686, N'Comercio electónico', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (687, N'Contenedor', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (688, N'Costo', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (689, N'Mantenimiento', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (690, N'Cross docking', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (691, N'Demanda', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (692, N'Distribución', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (693, N'Envase', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (694, N'Eoq', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (695, N'Flete', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (696, N'Inventario', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (697, N'Tqm', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (698, N'Gestión de la calidad total', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (699, N'Gestión de stock', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (700, N'Just in time', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (701, N'Logística de abastecimiento', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (702, N'Logística de distribución', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (703, N'Logístca de producción', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (704, N'Logística inversa', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (705, N'Transporte', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (706, N'Pincking', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (707, N'Scm', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (708, N'Supply chain manangment', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (709, N'Servicio al cliente', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (710, N'Stock', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (711, N'Seguridad', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (712, N'Unidad de carga', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (713, N'Tránsito', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (714, N'Zona de picking', N'dd381671-7d0e-4011-ab1d-d5e4981f67f6')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (755, N'Mejoramiento', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (756, N'Lean', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (757, N'Servicios', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (758, N'Fila', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (759, N'Eficiencia', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (760, N'Efectividad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (761, N'Desperdicios', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (762, N'Eficacia', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (763, N'Riesgos', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (764, N'Pareto', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (765, N'Calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (766, N'Producto', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (767, N'Calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (768, N'Satisfacción del usuario', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (769, N'Capacidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (770, N'Políia de calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (771, N'Gestión', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (772, N'Aseguramiento de la calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (773, N'Ambiente de trabajo', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (774, N'Procedimientos', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (775, N'Estandarización', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (776, N'No conformidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (777, N'Conformidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (778, N'Acción preventiva', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (779, N'Acción correctiva', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (780, N'Reporceso', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (781, N'Documento', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (782, N'Manuel de la calidad', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (783, N'Validación ', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (784, N'Verificación', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (785, N'Auditoría', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (786, N'Queja', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (787, N'Retroalimentación', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (788, N'Oportunidad de mejora', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (789, N'Phva', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (790, N'Proceso de mejora', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (791, N'Proyecto', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (792, N'Análisis swot', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (793, N'Lean start up', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (794, N'Despilfarro', N'722efc46-dd1a-4ed7-9fb9-1133566a210e')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (795, N'Demanda', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (796, N'Oferta', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (797, N'Acción ordinaria', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (798, N'Acción preferencial', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (799, N'Actividad económica', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (800, N'Arancel', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (801, N'Ahorro', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (802, N'Agente comercial', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (803, N'Balance general', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (804, N'Banco', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (805, N'Bienes', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (806, N'Bolsa de valores', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (807, N'Brecha fiscal', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (808, N'Bonos', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (809, N'Contraloría', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (810, N'Cuenta de ahorros', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (811, N'Cuenta de capital', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (812, N'Costo fijo ', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (813, N'Costo variable', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (814, N'Punto de equilibrio', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (815, N'Costo directo', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (816, N'Costo indirecto', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
GO
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (817, N'Consumidor', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (818, N'Devaluación ', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (819, N'Deflación', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (820, N'Déficit', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (821, N'Desempleo', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (822, N'Deuda ', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (823, N'Dofa', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (824, N'Flujo de efectivo', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (825, N'Ganancia', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (826, N'Globalización ', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (827, N'Hipoteca', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (828, N'Impuestos', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (829, N'Índice', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (830, N'Indicador', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (831, N'Ingreso', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (832, N'Inversión ', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (833, N'Inflación ', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (834, N'Mercado', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (835, N'Oferta', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (836, N'Pib', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (837, N'Política de ingresos', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (838, N'Pasivo', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (839, N'Prima', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (840, N'Presupuesto', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (841, N'Productividad', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (842, N'Rentabilidad', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (843, N'Renta gravable', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (844, N'Renta líquida', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (845, N'Rut', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (846, N'Salario', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (847, N'Tasas', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (848, N'Trm', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (849, N'Utilidades', N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (850, N'Estrategia', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (851, N'Coach', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (852, N'Coaching', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (854, N'Autoconfianza', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (856, N'Auodisciplina', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (857, N'Autoregulación ', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (858, N'Carisma', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (860, N'Emprendedor', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (862, N'Fidelización', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (863, N'Habilidades sociales', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (864, N'Empatía', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (866, N'Hábitos', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (868, N'Juicios', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (869, N'Libertad', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (870, N'Paradigma', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (872, N'Perspectiva', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (874, N'Procrastinación ', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (875, N'Líder', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (876, N'Cualidades', N'19e232b9-26b0-4e4d-a22b-98177941c3f2')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (877, N'Accion estrategica', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (878, N'Concentracion estrategica', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (879, N'Planeacion estrategica', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (880, N'Cultura estrategica', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (881, N'Tema organizacional ', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (882, N'Administracion estrategica', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (883, N'Alianzas', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (884, N'Curva de experiencia', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (885, N'Estrategia de crecimiento', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (886, N'Estrategia de recesion ', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (887, N'Estructura competitiva', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (888, N'Globalizacion ', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (889, N'Grupos estrategicos', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (890, N'Innovacion ', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (891, N'Metas', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (892, N'Objetivos', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (893, N'Nivel corporativo', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (894, N'Valor agregado', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (895, N'Ventaja competitiva', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (896, N'Proceso administrativo', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (897, N'Corto plazo', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (898, N'Mediano plazo', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (899, N'Largo plazo', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (900, N'Estrategia agresiva', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (901, N'Estrategia conservadora', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (902, N'Estrategia indizada', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (903, N'Estrategia patrimonial', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (904, N'Estratificacion ', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (905, N'Estructura financiera', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (906, N'Evaluacion ', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (907, N'Rentabilidad', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (908, N'Inversion ', N'6a9051b5-6a43-481a-ac4e-7fed206a63a8')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (909, N'Fianza', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (910, N'Cargo', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (911, N'Juicio', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (912, N'Pruebas', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (913, N'Jurado', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (914, N'Audiencia ', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (915, N'Acusacion ', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (916, N'Peticion', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (917, N'Sentencia', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (918, N'Cargo', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (919, N'Negociacion ', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (920, N'Audiencia preeliminar', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (921, N'Comparencia', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (922, N'Causa probable', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (923, N'Fiscal', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (924, N'Citacion', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
GO
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (925, N'Testimonio', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (926, N'Veredicto', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (927, N'Orden judicial', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (928, N'Testigo', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (929, N'Conocimiento juridico', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (930, N'Abogado', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (931, N'Normas', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (932, N'Constitucion politica', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (933, N'Derecho constitucional', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (934, N'Tributario', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (935, N'Estado', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (936, N'Organismos publicos ', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (937, N'Justicia', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (938, N'Denunca', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (939, N'Derecho de representacion', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (940, N'Garantia', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (941, N'Legitimo', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (942, N'Alegaciones', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (943, N'Ley', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (944, N'Impugnacion de testigos', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (945, N'Jurisdiccion ', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (946, N'Tribunal', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (947, N'Recusacion', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (948, N'Medida cautelar', N'a51d54c3-5c01-4999-885c-3a22eeecca87')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (949, N'Base de datos', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (950, N'Cibernetica', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (951, N'Hipertexto', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (952, N'Inteligencia artificial', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (953, N'Robotica', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (954, N'Programacion', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (955, N'Redes', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (956, N'Internet', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (957, N'Realidad virtual', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (958, N'Telecomunicaciones', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (959, N'Buscador', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (960, N'Algoritmo', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (961, N'Computador', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (962, N'Antivirus', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (963, N'Aplicación', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (964, N'Archivos', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (965, N'Byte', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (966, N'Cpu', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (967, N'Circuito integrado', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (968, N'Dispositivo', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (969, N'Hipervinculo', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (970, N'Icono', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (971, N'Informatica', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (972, N'Software', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (973, N'Link', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (974, N'Memoria ram', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (975, N'Microsoft', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (976, N'Mouse', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (977, N'Pagina web', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (978, N'Usuario', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (979, N'Windows', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (980, N'Variables', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (981, N'Home page', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (982, N'Blog', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (983, N'Chat', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (984, N'Disco duro', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (985, N'Navegacion ', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (986, N'Hosting', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (987, N'Java', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (988, N'Modem', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (989, N'Macintosh', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (990, N'Servidor', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (991, N'Redes sociales', N'b49bab47-e488-4ca0-9935-8fabc2e3b4a9')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (992, N'Activo', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (993, N'Activo fijo', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (994, N'Anticipo', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (995, N'Acciones comunes', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (996, N'Acciones preferentes', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (997, N'Balance general', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (998, N'Capital', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (999, N'Cuenta', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1000, N'Contador', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1001, N'Costo', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1002, N'Credito', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1003, N'Depreciacion', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1004, N'Cuentas por pagar', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1005, N'Documento', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1006, N'Inventario', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1007, N'Ingreso', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1008, N'Ventas', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1009, N'Compras', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1010, N'Contabilidad financiera', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1011, N'Debito', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1012, N'Credito', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1013, N'Cuentas nominales', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1014, N'Tangible', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1015, N'Intangible', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1016, N'Pasivo', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1017, N'Pagare', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1018, N'Impuesto ', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1019, N'Presupuesto', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1020, N'Dividendos', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1021, N'Patrimonio', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1022, N'Ganancia bruta', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1023, N'Ganancia neta', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1024, N'Tramite', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
GO
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1025, N'Liquidez', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1026, N'Ahorro', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1027, N'Amortizacion', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1028, N'Analisis de sensibilidad', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1029, N'Cartera', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1030, N'Cheque', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1031, N'Deuda', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1032, N'Dinero', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1033, N'Negocios', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1034, N'Economia', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1035, N'Estado financiero', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1036, N'Flujo de caja', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1037, N'Evasion fiscal', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1038, N'Hipoteca', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1039, N'Indemnizacion ', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1040, N'Intereses', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1041, N'Margen neto', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
INSERT [Questions].[Keywords] ([Id], [Text], [CategoryId]) VALUES (1042, N'Mercado', N'c63a1017-bd3c-4eb6-97bd-7b650b28b705')
SET IDENTITY_INSERT [Questions].[Keywords] OFF
SET IDENTITY_INSERT [Questions].[QuestionCategories] ON 

INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (1, N'4aa7344b-9224-48b3-95cf-bfd25485debb', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (2, N'084067a8-4529-4138-9295-d92fc6fc7593', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (3, N'4cfe14a9-a671-4acd-a256-563f7aad6f61', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (4, N'722efc46-dd1a-4ed7-9fb9-1133566a210e', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (5, N'dd381671-7d0e-4011-ab1d-d5e4981f67f6', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (6, N'2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (7, N'6a9051b5-6a43-481a-ac4e-7fed206a63a8', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (8, N'a51d54c3-5c01-4999-885c-3a22eeecca87', N'01e92b7f-461a-c467-4591-08d4186efbfd')
INSERT [Questions].[QuestionCategories] ([Id], [CategoryId], [QuestionId]) VALUES (9, N'c63a1017-bd3c-4eb6-97bd-7b650b28b705', N'01e92b7f-461a-c467-4591-08d4186efbfd')
SET IDENTITY_INSERT [Questions].[QuestionCategories] OFF
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'bf06d7fd-5d5b-c047-2766-08d40fb28b1c', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'77c71c82-db80-c848-cefd-08d40fb58bb1', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'3d6b7c5b-a0b1-c308-3d65-08d40fb5e21a', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'1c2c68a0-eb2a-c680-1454-08d40fba5d4f', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'6252e370-4e4e-c9dc-c4c2-08d4175f573c', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'465907fb-37b2-cd13-8fa5-08d417649e77', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'c07a9e6b-bd19-cd90-af5e-08d417678312', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'e5776225-defb-c430-687d-08d41767cb87', N'Body bidy body', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Some title', N'00000000-0000-0000-0000-000000000000', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'9b9d3bc6-56e2-c194-3ec9-08d41778eeed', N'How to call javascript function inside Xamarin.Forms webview?', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'How to call javascript function inside Xamarin.Forms webview?', N'00000000-0000-0000-0000-000000000000', 0)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'89cae1c1-122c-ca8f-ffd6-08d4177aa3fd', N'How to call javascript function inside Xamarin.Forms webview?', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'How to call javascript function inside Xamarin.Forms webview?', N'00000000-0000-0000-0000-000000000000', 0)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'b8b1dcb1-eea2-c85a-c404-08d4177b0d98', N'How to call javascript function inside Xamarin.Forms webview?', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'How to call javascript function inside Xamarin.Forms webview?', N'00000000-0000-0000-0000-000000000000', 0)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'f72bf04e-d95a-cee2-7dc9-08d4179f7703', N'<p>Question details</p>', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'If you were on death row, and were given the chance to listen to one last song before your execution, what would it be?', N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'7be1d8cd-3b77-c520-fa44-08d417a36c6a', N'<p>Question details</p>', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'What is the biggest mistake made by a multi-billion dollar company?', N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'c5c5ab19-c549-c584-7c30-08d417a3d8af', N'<p>Question details</p>', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Por qué es importante seleccionar bien el nombre de mi empresa?', N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'b1e9d669-af13-cb61-fa53-08d417a3ff2a', N'<p>De acuerdo con el foro econ&oacute;mico mundial, todos somos creativos. Sin embargo, algunos explotan m&aacute;s esa creatividad que otros, que a fuerza de no entrenarla terminan pensando que carecen rotundamente de ella o que la han perdido. Si perteneces a este segundo grupo, no desesperes: ejercitar la creatividad es como ir al gimnasio; para que d&eacute; resultados hay que ejercitarla d&iacute;a a d&iacute;a. Te dejamos diez trucos para que tu mente vuelva a ser la f&aacute;brica de ideas que era.</p>

<p>&nbsp;</p>

<p><strong>1. Crea un cuaderno de ideas</strong></p>

<p>Puede parecerte anticuado, pero la mejor idea para volver a tener buenas ideas es llevar contigo un peque&ntilde;o cuaderno donde escribir lo que se te ocurra. De lo contrario, los momentos de inspiraci&oacute;n caer&aacute;n en el olvido y nunca podr&aacute;s recurrir a ellos.</p>

<p>&nbsp;</p>

<p><strong>2. Haz sesiones de&nbsp;<em>brainstorming</em></strong></p>

<p>Cuando salgas a correr, antes de dormir, mientras vas en el tren de camino al trabajo, cuando te des un largo ba&ntilde;o&hellip; cualquier momento es bueno para tener una sesi&oacute;n de lluvia de ideas con uno mismo. Aunque la mayor&iacute;a de cosas que se te ocurran parezcan absurdas, es el mejor entrenamiento para tu mente y para evitar un bloqueo creativo.</p>

<p>&nbsp;</p>

<p><strong>3. Escribe diez nuevas ideas cada d&iacute;a</strong></p>

<p>No hace falta que est&eacute;n encaminadas hacia una direcci&oacute;n determinada; ni siquiera es necesario que tengan sentido. Pueden ser ideas locas, absurdas, sin utilidad pr&aacute;ctica, pero forzar&aacute; a tu cerebro a poner el modo creativo &lsquo;on&rsquo;. Postadata: las seis primeras son f&aacute;ciles; las otras cuarto exigen un esfuerzo extra.</p>

<p>&nbsp;</p>

<p><strong>4. Dibuja</strong></p>

<p>No hace falta que se te de bien dibujar: atr&eacute;vete a armarte de un l&aacute;piz o boli y un trozo de papel y da rienda suelta a tu imaginaci&oacute;n. Trata de expresar tus ideas a trav&eacute;s de dibujos, esbozos, gr&aacute;ficos y esquemas. De verdad, es divertido y puede ser incluso revelador.</p>

<p>&nbsp;</p>

<p><strong>5. Busca nuevas experiencias</strong></p>

<p>La rutina es el veneno m&aacute;s poderoso contra la creatividad. La mente se acomoda, pone el piloto autom&aacute;tico y siente que ya no tiene que seguir trabajando. Salir de la zona de confort, buscar nuevas perspectivas y experiencias es como zambullirse en una piscina de creatividad.</p>

<p>&nbsp;</p>

<p><strong>6. Apaga por un rato tus aparatos electr&oacute;nicos</strong></p>

<p>Al&eacute;jate del ordenador. Pon el m&oacute;vil en &lsquo;modo avi&oacute;n&rsquo;. Desp&eacute;gate de las distracciones que llevan consigo los aparatos electr&oacute;nicos. Te sentir&aacute;s m&aacute;s despierto y tambi&eacute;n m&aacute;s focalizado, y las ideas fluir&aacute;n con mayor facilidad sin tanto ruido de fondo.</p>

<p>&nbsp;</p>

<p><strong>7. Hazte un caf&eacute;</strong></p>

<p>Es un hecho: el caf&eacute; despierta la mente y ayuda a potenciar la creatividad. Piensa en &eacute;l como en la gasolina de tus ideas. Ojo: no estamos sugiriendo que te encomiendes a los efectos de la cafe&iacute;na. Pero si en alg&uacute;n momento concreto sientes que necesitas un empujoncito extra, es una buena idea recurrir a &eacute;l.</p>

<p>&nbsp;</p>

<p><strong>8. Rod&eacute;ate de personas creativas</strong></p>

<p>Sal con gente creativa, que te inspire y te d&eacute;&nbsp;<em>feedback</em>. La creatividad es altamente contagiosa.</p>

<p>&nbsp;</p>

<p><strong>9. Expresa tu creatividad a trav&eacute;s de ti mismo</strong></p>

<p>Apuesta por expresar tu creatividad en tu forma de ser y comportarte, a la hora de expresarte y vestirte, y crea una imagen m&aacute;s aut&eacute;ntica y original de ti mismo.</p>

<p>&nbsp;</p>

<p><strong>10. No seas un obst&aacute;culo para ti mismo</strong></p>

<p>Deja en el felpudo los pensamientos negativos, aquellos que te dicen que no eres lo suficientemente creativo o que no tienes lo que hay que tener para llegar a ideas brillantes. En realidad, la creatividad es m&aacute;s un modo que la caracter&iacute;stica de determinados cerebros. Si las cosas no salen con la naturalidad esperada, date un respiro, reflexiona, y vuelve a empezar. No fuerces las cosas: asume cuanto antes que la creatividad y la producci&oacute;n de ideas es un h&aacute;bito, y los h&aacute;bitos llevan tiempo.</p>
', NULL, NULL, CAST(N'0001-01-01 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Cómo puedo desarrollar mi creatividad?', N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'01e92b7f-461a-c467-4591-08d4186efbfd', N'<p>Question details</p>', N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', CAST(N'2016-11-29 21:47:06.6036679' AS DateTime2), CAST(N'2016-11-29 21:47:06.6036679' AS DateTime2), NULL, NULL, NULL, NULL, N'Cómo puedo desarrollar mi creatividad?', N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', NULL)
INSERT [Questions].[Questions] ([Id], [Body], [CreatedBy], [CreatedOn], [DTS], [IsActive], [IsDeleted], [ModifiedBy], [ModifiedOn], [Title], [UserId], [ViewCount]) VALUES (N'c75af4b2-26dc-4834-97b4-27ca85728bd7', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus,', NULL, CAST(N'2016-12-11 00:00:00.0000000' AS DateTime2), CAST(N'2016-12-11 00:00:00.0000000' AS DateTime2), NULL, NULL, NULL, NULL, N'Title 234234 34', N'9f5b4ead-f9e7-49da-b0fa-1683195cfcba', NULL)
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [Identity].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [RoleNameIndex]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [RoleNameIndex] ON [Identity].[AspNetRoles]
(
	[NormalizedName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [Identity].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [Identity].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [Identity].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_AspNetUserRoles_UserId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_UserId] ON [Identity].[AspNetUserRoles]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [EmailIndex]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [Identity].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UserNameIndex]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [Identity].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_OpenIddictApplications_ClientId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_OpenIddictApplications_ClientId] ON [Identity].[OpenIddictApplications]
(
	[ClientId] ASC
)
WHERE ([ClientId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_OpenIddictTokens_ApplicationId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_OpenIddictTokens_ApplicationId] ON [Identity].[OpenIddictTokens]
(
	[ApplicationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_OpenIddictTokens_AuthorizationId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_OpenIddictTokens_AuthorizationId] ON [Identity].[OpenIddictTokens]
(
	[AuthorizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Answers_QuestionId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_Answers_QuestionId] ON [Questions].[Answers]
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Comments_AnswerId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_Comments_AnswerId] ON [Questions].[Comments]
(
	[AnswerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Comments_QuestionID]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_Comments_QuestionID] ON [Questions].[Comments]
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Likes_AnswerId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_Likes_AnswerId] ON [Questions].[Likes]
(
	[AnswerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Likes_QuestionId]    Script Date: 11/29/2016 9:50:15 PM ******/
CREATE NONCLUSTERED INDEX [IX_Likes_QuestionId] ON [Questions].[Likes]
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
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
USE [master]
GO
ALTER DATABASE [AltaPerspectiva] SET  READ_WRITE 
GO
