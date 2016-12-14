

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
        public IQueryable<ContractInfo> ContractInfoes
        {
            get
            {
                // Don't track changes to query results
                return Set<ContractInfo>().AsNoTracking();
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("UserProfile");
            // Need this since there is no DbSet<Customer> property
            modelBuilder.Entity<ContractInfo>().ToTable("ContractInfoes");
           

        }
    }
}
