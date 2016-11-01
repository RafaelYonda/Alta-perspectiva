namespace Questions.Command.DbContext
{
    using Microsoft.EntityFrameworkCore;    
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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("Questions");

            base.OnModelCreating(modelBuilder);
            // Configure model mappings
            modelBuilder.ConfigureMappings();
        }
    }
}
