namespace AltaPerspectiva.Core.Infrastructure
{
    using Microsoft.EntityFrameworkCore;
    public class AltaperspectivaQuestionsDbContext:DbContext
    {
        public AltaperspectivaQuestionsDbContext(DbContextOptions<AltaperspectivaQuestionsDbContext> options)
        : base(options)
        {
        }
        // public DbSet<Widget> Widgets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure model mappings
            modelBuilder..ConfigureMappings();
        }
    }
}
