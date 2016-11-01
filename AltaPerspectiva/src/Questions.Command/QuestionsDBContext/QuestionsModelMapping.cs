namespace Questions.Command.DbContext
{
    using Microsoft.EntityFrameworkCore;

    public static class ModelMappings
    {
        public static void ConfigureMappings(this ModelBuilder model)
        {
            // widgets
            model.Entity<Question>(e =>
            {
                e.ToTable("Question");

                e.HasKey(w => w.Id);

                e.Property(w => w.Id)
                    .HasColumnName("Id").IsRequired();

               

                //e.Property(w => w.Template)
                //    .HasColumnName("Template").IsRequired();

                //e.Property(w => w.Heading)
                //    .HasColumnName("Heading");

                //e.Property(w => w.Section)
                //    .HasColumnName("Section").IsRequired();

                //e.Property(w => w.Type)
                //    .HasColumnName("Type").IsRequired();

                //e.Property(w => w.IsEnabled)
                //    .HasColumnName("IsEnabled").IsRequired();

            });

            // user widgets
            //model.Entity<UserWidget>(e =>
            //{
            //    e.ToTable("UserWidgets");

            //    e.HasKey(w => new { w.UserId, w.WidgetId });

            //    e.Property(w => w.IsExpanded)
            //        .HasColumnName("IsExpanded");

            //    e.Property(w => w.IsEnabled)
            //        .HasColumnName("IsEnabled");

            //    e.Property(w => w.IsDraggable)
            //        .HasColumnName("IsDraggable").IsRequired();



            //});
        }
    }
}
