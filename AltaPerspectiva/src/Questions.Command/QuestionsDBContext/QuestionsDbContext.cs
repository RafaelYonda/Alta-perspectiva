namespace Questions.Command.DbContext
{
    using Microsoft.EntityFrameworkCore;
    using AltaPerspectiva.Identity;

    public class QuestionsDbContext:DbContext
    {
        public QuestionsDbContext(DbContextOptions<QuestionsDbContext> options)
        : base(options)
        {
        }
       public DbSet<ApplicationUser> ApplicationUsers { get; }
       public DbSet<Question> Questions { get; set; }
       public DbSet<Answer> Answers { get; set; }
       public DbSet<Category> Categories { get; set; }
       public DbSet<Like> Likes { get; set; }
       public DbSet<Comment> Comments { get; set; }
       public DbSet<QuestionCategory> QuestionCategories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.ConfigureMappings();            
            // Configure model mappings
            modelBuilder.HasDefaultSchema("Questions");            
            
        }
    }
}
