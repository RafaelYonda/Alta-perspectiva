namespace Questions.Command.DbContext
{
    using Questions.Domain;
    using Microsoft.EntityFrameworkCore;

    public static class ModelMappings
    {
        public static void ConfigureMappings(this ModelBuilder model)
        {
            // questions
            model.Entity<Question>(e =>
            {
                e.ToTable("Questions");

                e.HasKey(q => q.Id);

                e.Property(q => q.Title)
                    .HasColumnName("Title").IsRequired();

                e.Property(q => q.Body)
                    .HasColumnName("Body").IsRequired();

                e.Property(p => p.UserId)
                    .HasColumnName("UserId").IsRequired();               

                e.HasMany<Answer>(a => a.Answers).WithOne(q => q.Question).HasForeignKey(a => a.QuestionId);

                e.HasMany<Comment>(c => c.Comments).WithOne(q => q.Question).HasForeignKey(c => c.QuestionID);

                e.HasMany<Like>(l => l.Likes).WithOne(q => q.Question).HasForeignKey(l => l.QuestionId);

                e.HasMany<QuestionCategory>(c => c.Categories).WithOne().HasForeignKey("QuestionId");
               // e.HasMany<DirectQuestion>(c => c.DirectQuestions).WithOne().HasForeignKey("QuestionId");
               // e.HasMany<Bookmark>(c => c.Bookmarks).WithOne().HasForeignKey("QuestionId");



            });

            // answers
            model.Entity<Answer>(e =>
            {
                e.ToTable("Answers");

                e.HasKey(a => a.Id);

                e.Property(a => a.Text);

                e.Property(a => a.AnswerDate);

                e.Property(p => p.UserId)
                   .HasColumnName("UserId").IsRequired();

                e.HasOne<Question>(q=>q.Question).WithMany(a=>a.Answers).HasForeignKey(a=>a.QuestionId);

                e.HasMany<Like>(l => l.Likes).WithOne(l => l.Answer).HasForeignKey(a => a.AnswerId);       

            });

            //question categories
            model.Entity<QuestionCategory>(e =>
            {
                e.ToTable("QuestionCategories");

                e.HasKey(c => c.Id);                
            });

            // categories
            model.Entity<Category>(e =>
            {
                e.ToTable("Categories");

                e.HasKey(c => c.Id);

                e.Property(c => c.Name).IsRequired();

                e.Property(c => c.Active);

                e.Property(c => c.Description);

                e.Property(c => c.Sequence);

                e.Property(c => c.Image);

                e.HasMany<QuestionCategory>(q => q.Questions).WithOne(c => c.Category).HasForeignKey(qc => qc.CategoryId);

                e.HasMany<Keyword>(q => q.Keywords).WithOne(k => k.Category).HasForeignKey(k => k.CategoryId);

                //Question topic and level
                e.HasMany<Topic>(q => q.Topics).WithOne(k => k.Category).HasForeignKey(k => k.CategoryId);

            });

            //keywords
            model.Entity<Keyword>(e =>
            {
                e.ToTable("Keywords");

                e.HasKey(c => c.Id);

                e.Property(c => c.Text);              

            });

            // comments
            model.Entity<Comment>(e =>
            {
                e.ToTable("Comments");

                e.HasKey(a => a.Id);

                e.Property(a => a.CommentText);

                e.Property(c => c.CommentDate);

                e.Property(p=> p.UserID)
                   .HasColumnName("UserId").IsRequired();

            });

            // likes
            model.Entity<Like>(e =>
            {
                e.ToTable("Likes");

                e.HasKey(a => a.Id);

                e.Property(p => p.UserId)
                    .HasColumnName("UserId").IsRequired();

            });

            //Question topic and level
            model.Entity<Level>(e =>
            {
                e.ToTable("Levels");
                e.HasKey(a => a.Id);
                e.HasMany<QuestionLevel>(q => q.QuestionLevels).WithOne(k => k.Level).HasForeignKey(k => k.LevelId);
            });

            model.Entity<QuestionLevel>(e =>
            {
                e.ToTable("QuestionLevels");
                e.HasKey(a => a.Id);
                //e.Property(a => a.Id);
            });
            model.Entity<QuestionTopic>(e =>
            {
                e.ToTable("QuestionTopics");
                e.HasKey(a => a.Id);
                //e.Property(a=> a.Id);
            });
            model.Entity<Topic>(e =>
            {
                e.ToTable("Topics");
                e.HasKey(a => a.Id);
                e.HasMany<QuestionTopic>(q => q.QuestionTopics).WithOne(k => k.Topic).HasForeignKey(k => k.TopicId);
            });

            model.Entity<Bookmark>(e =>
            {
                e.ToTable("Bookmarks");
                e.HasKey(a => a.Id);
                
            });

            //QuestionReports
            model.Entity<QuestionReport>(e =>
            {
                e.ToTable("QuestionReports");

                e.HasKey(c => c.Id);
            });

         model.Entity<ShareQuestion>(e =>
            {
                e.ToTable("ShareQuestions");

                e.HasKey(c => c.Id);
            });

            model.Entity<QuestionFollowing>(e =>
            {
                e.ToTable("QuestionFollowings");

                e.HasKey(c => c.Id);
            });

          

        }
    }
}
