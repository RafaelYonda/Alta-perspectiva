using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Command.UserProfileDBContext
{
    public class UserProfileDbContext: DbContext
    {
        public UserProfileDbContext(DbContextOptions<UserProfileDbContext> options)
        : base(options)
        {
        }
        public DbSet<Biography> Biography { get; set; }
        public DbSet<ContractInformation> ContractInformation { get; set; }
        public DbSet<Education> Education { get; set; }
        public DbSet<Experience> Experience { get; set; }
        public DbSet<Insight> Insight { get; set; }
        public DbSet<PracticeArea> PracticeArea { get; set; }
        public DbSet<Skill> Skill { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure model mappings
            modelBuilder.HasDefaultSchema("UserProfile");
            base.OnModelCreating(modelBuilder);
            modelBuilder.ConfigureMappings();
        }
    }
}
