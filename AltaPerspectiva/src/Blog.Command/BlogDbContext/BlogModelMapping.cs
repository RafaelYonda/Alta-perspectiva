using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Domain;

namespace Blog.Command.BlogDbContext
{
    public static class BlogModelMapping
    {
        public static void ConfigureMappings(this ModelBuilder model)
        {
            //MAping of Credential to multiple Education,Places,Employemnts
            model.Entity<Domain.Blog>(e =>
            {
                e.ToTable("Blogs");
                e.HasKey(a => a.Id);
                e.HasMany<BlogPost>(q => q.BlogPosts).WithOne(k => k.Blog).HasForeignKey(k => k.BlogId);
             
            });
            model.Entity<BlogPost>(e =>
            {
                e.ToTable("BlogPosts");
                e.HasKey(a => a.Id);
                e.HasMany<BlogComment>(q => q.BlogComments).WithOne(k => k.BlogPost).HasForeignKey(k => k.BlogPostId);
                e.HasMany<BlogLike>(q => q.BlogLikes).WithOne(k => k.BlogPost).HasForeignKey(k => k.BlogPostId);

            });

        }
    }
}
