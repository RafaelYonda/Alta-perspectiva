using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Blog.Domain;
using Blog = Blog.Domain.Blog;

namespace Blog.Query
{
    public class BlogQueryDbContext : DbContext
    {
        public BlogQueryDbContext(DbContextOptions<BlogQueryDbContext> options)
        : base(options)
        {
        }
        public IQueryable<Domain.Blog> Blogs
        {
            get
            {
                // Don't track changes to query results
                return Set<Domain.Blog>().AsNoTracking();
            }
        }
        public IQueryable<BlogPost> BlogPosts
        {
            get
            {
                // Don't track changes to query results
                return Set<BlogPost>().AsNoTracking();
            }
        }

        public IQueryable<BlogLike> BlogLikes
        {
            get
            {
                // Don't track changes to query results
                return Set<BlogLike>().AsNoTracking();
            }
        }

        public IQueryable<BlogComment> BlogComments
        {
            get
            {
                // Don't track changes to query results
                return Set<BlogComment>().AsNoTracking();
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("Blog");
            // Need this since there is no DbSet<Customer> property
            modelBuilder.Entity<Domain.Blog>().ToTable("Blogs");
            
            modelBuilder.Entity<BlogComment>().ToTable("BlogComments");
            modelBuilder.Entity<BlogLike>().ToTable("BlogLikes");
            modelBuilder.Entity<BlogPost>().ToTable("BlogPosts");
        }
    }
}
