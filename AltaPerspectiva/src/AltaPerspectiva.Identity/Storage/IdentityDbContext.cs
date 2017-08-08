using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AltaPerspectiva.Identity
{
    public class ApplicationUserDbContext : IdentityDbContext<ApplicationUser,IdentityRole,string>
    {
        public ApplicationUserDbContext(DbContextOptions options)
            : base(options) { }             
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            // Set database schema
            builder.HasDefaultSchema("Identity");

        }
    }
}
