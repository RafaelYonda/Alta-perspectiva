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
        public DbSet<ContractInfo> ContractInfoes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure model mappings
            modelBuilder.HasDefaultSchema("UserProfile");
            base.OnModelCreating(modelBuilder);
            modelBuilder.ConfigureMappings();
        }
    }
}
