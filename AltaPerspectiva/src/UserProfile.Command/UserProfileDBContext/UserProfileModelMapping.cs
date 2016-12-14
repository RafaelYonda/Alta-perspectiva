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
            //No need if no one to many mapping
            //// ContractInformation
            //model.Entity<ContractInformation>(e =>
            //{
            //    e.ToTable("ContractInformation");

            //    e.HasKey(q => q.Id);
            //   // e.Property(q => q.FirstName).HasColumnName("FirstName").IsRequired();


            //});
        }
    }
}
