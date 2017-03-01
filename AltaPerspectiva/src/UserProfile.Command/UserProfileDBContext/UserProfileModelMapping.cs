using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Command.UserProfileDBContext
{
    public static class UserProfileModelMapping
    {
        public static void ConfigureMappings(this ModelBuilder model)
        {
            //MAping of Credential to multiple Education,Places,Employemnts
            model.Entity<Credential>(e =>
            {
                e.ToTable("Credentials");
                e.HasKey(a => a.Id);
                e.HasMany<Education>(q => q.Educations).WithOne(k => k.Credential).HasForeignKey(k => k.CredentialId);
                e.HasMany<Place>(q => q.Places).WithOne(k => k.Credential).HasForeignKey(k => k.CredentialId);
                e.HasMany<Employment>(q => q.Employments).WithOne(k => k.Credential).HasForeignKey(k => k.CredentialId);
            });

            model.Entity<VirtualStore>(e =>
            {
                e.ToTable("VirtualStores");
                e.HasKey(a => a.Id);
                e.HasMany<ProductComment>(q => q.ProductComments).WithOne(k => k.VirtualStore).HasForeignKey(k => k.VirtualStoreId);
               
            });

        }
    }
}
