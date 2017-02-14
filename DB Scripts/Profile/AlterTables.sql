USE [AltaPerspectiva]
GO

ALTER TABLE Questions.Questions ADD
	IsDirectQuestion bit NOT NULL CONSTRAINT DF_Questions_IsDirectQuestion DEFAULT (0)
GO