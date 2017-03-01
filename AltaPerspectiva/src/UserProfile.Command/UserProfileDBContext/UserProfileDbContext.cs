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
        public DbSet<Credential> Credentials { get; set; }
        public DbSet<Employment> Employments { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<OtherExperience> OtherExperiences { get; set; }
        public DbSet<VirtualStore> VirtualStores { get; set; }
        public DbSet<ProductComment> ProductComments { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure model mappings
            modelBuilder.HasDefaultSchema("UserProfile");
            base.OnModelCreating(modelBuilder);
            modelBuilder.ConfigureMappings();
        }
    }
}
