namespace Questions.Command.DbContext
{
    using AltaPerspectiva.Identity;
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

                e.HasOne<ApplicationUser>(a => a.User).WithOne();

                e.HasMany<Answer>(a => a.Answers).WithOne(q => q.Question).HasForeignKey(a => a.QuestionId);

                e.HasMany<Comment>(c => c.Comments).WithOne(q => q.Question).HasForeignKey(c => c.QuestionID);

                e.HasMany<Like>(l => l.Likes).WithOne(q => q.Question).HasForeignKey(l => l.QuestionId);

                e.HasMany<QuestionCategory>(c => c.Categories).WithOne(q => q.Question).HasForeignKey(qc => qc.QuestionId);

            });

            // answers
            model.Entity<Answer>(e =>
            {
                e.ToTable("Answers");

                e.HasKey(a => a.Id);

                e.Property(a => a.Text);

                e.Property(a => a.AnswerDate);

                e.HasOne<ApplicationUser>(a => a.User);

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

                e.Property(c => c.Name);

                e.HasMany<QuestionCategory>(q => q.Questions).WithOne(c => c.Category).HasForeignKey(qc => qc.QuestionId);
                
            });


            // comments
            model.Entity<Comment>(e =>
            {
                e.ToTable("Comments");

                e.HasKey(a => a.Id);

                e.Property(a => a.CommentText);

                e.Property(c => c.CommentDate);

                e.HasOne<ApplicationUser>(a => a.User).WithOne();

            });

            // likes
            model.Entity<Like>(e =>
            {
                e.ToTable("Likes");

                e.HasOne<ApplicationUser>(a => a.user).WithOne();      

            });
        }
    }
}
