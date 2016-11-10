namespace Questions.Command.DbContext
{
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

            });
        }
    }
}
