

namespace UserProfile.Query
{
    using UserProfile.Domain;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;
    using Domain.AllModels;

    public class UserProfileQueryDbContext : DbContext
    {
        public UserProfileQueryDbContext(DbContextOptions<UserProfileQueryDbContext> options)
        : base(options)
        {
        }
        public IQueryable<Credential> Credentials
        {
            get
            {
                // Don't track changes to query results
                return Set<Credential>().AsNoTracking();
            }
        }
        public IQueryable<Employment> Employments
        {
            get
            {
                // Don't track changes to query results
                return Set<Employment>().AsNoTracking();
            }
        }
        public IQueryable<Education> Educations
        {
            get
            {
                // Don't track changes to query results
                return Set<Education>().AsNoTracking();
            }
        }
        public IQueryable<Place> Places
        {
            get
            {
                // Don't track changes to query results
                return Set<Place>().AsNoTracking();
            }
        }
        public IQueryable<OtherExperience> OtherExperiences
        {
            get
            {
                // Don't track changes to query results
                return Set<OtherExperience>().AsNoTracking();
            }
        }
        public IQueryable<Following> Followings
        {
            get
            {
                // Don't track changes to query results
                return Set<Following>().AsNoTracking();
            }
        }
        public IQueryable<Follower> Followers
        {
            get
            {
                // Don't track changes to query results
                return Set<Follower>().AsNoTracking();
            }
        }

      

        public IQueryable<Blog> Blogs
        {
            get
            {
                // Don't track changes to query results
                return Set<Blog>().AsNoTracking();
            }
        } public IQueryable<BlogPost> BlogPosts
        {
            get
            {
                // Don't track changes to query results
                return Set<BlogPost>().AsNoTracking();
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("UserProfile");
    
            modelBuilder.Entity<Credential>().ToTable("Credentials");
            modelBuilder.Entity<Employment>().ToTable("Employments");
            modelBuilder.Entity<Education>().ToTable("Educations");
            modelBuilder.Entity<Place>().ToTable("Places");
            modelBuilder.Entity<OtherExperience>().ToTable("OtherExperiences");
            modelBuilder.Entity<Following>().ToTable("Followings");
            modelBuilder.Entity<Follower>().ToTable("Followers");
            modelBuilder.Entity<UserView>().ToTable("UserViews");
            modelBuilder.Entity<Blog>().ToTable("Blogs");
            modelBuilder.Entity<BlogPost>().ToTable("BlogPosts");
        }
    }
}
