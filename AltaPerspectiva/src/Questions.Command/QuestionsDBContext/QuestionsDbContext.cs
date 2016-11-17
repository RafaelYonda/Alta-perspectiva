namespace Questions.Command.DbContext
{
    using Microsoft.EntityFrameworkCore;
    using Questions.Domain;

    public class QuestionsDbContext:DbContext
    {
       public QuestionsDbContext(DbContextOptions<QuestionsDbContext> options)
        : base(options)
        {
        }     
       public DbSet<Question> Questions { get; set; }
       public DbSet<Answer> Answers { get; set; }
       public DbSet<Category> Categories { get; set; }
       public DbSet<Like> Likes { get; set; }
       public DbSet<Comment> Comments { get; set; }
       public DbSet<QuestionCategory> QuestionCategories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure model mappings
            modelBuilder.HasDefaultSchema("Questions");

            base.OnModelCreating(modelBuilder);            

            modelBuilder.ConfigureMappings();                                
            
        }
    }
}
