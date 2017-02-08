using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Blog.Domain;

namespace Blog.Command.BlogDbContext
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options)
        : base(options)
        {
        }
        public DbSet<Domain.Blog> Blogs { get; set; }
        public DbSet<BlogComment> BlogComments { get; set; }
        public DbSet<BlogLike> BlogLikes { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure model mappings
            modelBuilder.HasDefaultSchema("Blog");
            base.OnModelCreating(modelBuilder);
            modelBuilder.ConfigureMappings();
        }
    }
}
