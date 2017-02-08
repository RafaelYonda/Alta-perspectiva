using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

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
        public DbSet<Following> Followings { get; set; }
        public DbSet<Follower> Followers { get; set; }
       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure model mappings
            modelBuilder.HasDefaultSchema("UserProfile");
            base.OnModelCreating(modelBuilder);
            modelBuilder.ConfigureMappings();
        }
    }
}
