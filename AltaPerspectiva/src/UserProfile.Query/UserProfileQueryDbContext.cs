

namespace UserProfile.Query
{
    using UserProfile.Domain;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;

    public class UserProfileQueryDbContext : DbContext
    {
        public UserProfileQueryDbContext(DbContextOptions<UserProfileQueryDbContext> options)
        : base(options)
        {
        }
        public IQueryable<Biography> Biography
        {
            get
            {
                // Don't track changes to query results
                return Set<Biography>().AsNoTracking();
            }
        }
        public IQueryable<ContractInformation> ContractInfomation
        {
            get
            {
                // Don't track changes to query results
                return Set<ContractInformation>().AsNoTracking();
            }
        }
        public IQueryable<Education> Education
        {
            get
            {
                // Don't track changes to query results
                return Set<Education>().AsNoTracking();
            }
        }
        public IQueryable<Experience> Experience
        {
            get
            {
                // Don't track changes to query results
                return Set<Experience>().AsNoTracking();
            }
        }
        public IQueryable<Insight> Insight
        {
            get
            {
                // Don't track changes to query results
                return Set<Insight>().AsNoTracking();
            }
        }
        public IQueryable<PracticeArea> PracticeArea
        {
            get
            {
                // Don't track changes to query results
                return Set<PracticeArea>().AsNoTracking();
            }
        }
        public IQueryable<Skill> Skill
        {
            get
            {
                // Don't track changes to query results
                return Set<Skill>().AsNoTracking();
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("UserProfile");
            // Need this since there is no DbSet<Customer> property
            modelBuilder.Entity<Biography>().ToTable("Biography");
            modelBuilder.Entity<ContractInformation>().ToTable("ContractInformation");
            modelBuilder.Entity<Education>().ToTable("Education");
            modelBuilder.Entity<Experience>().ToTable("Experience");
            modelBuilder.Entity<Insight>().ToTable("Insight");
            modelBuilder.Entity<PracticeArea>().ToTable("PracticeArea");
            modelBuilder.Entity<Skill>().ToTable("Skill");

        }
    }
}
