namespace Questions.Query.DbContext
{
    using Microsoft.EntityFrameworkCore;
    using Questions.Domain;
    
    using System.Linq;

    public class QuestionsQueryDbContext:DbContext
    {
        public QuestionsQueryDbContext(DbContextOptions<QuestionsQueryDbContext> options)
        : base(options)
        {
        }
        public IQueryable<Question> Questions
        {
            get
            {
                // Don't track changes to query results
                return Set<Question>().AsNoTracking();
            }
        }

        public IQueryable<Answer> Answers
        {
            get
            {
                // Don't track changes to query results
                return Set<Answer>().AsNoTracking();
            }
        }


        public IQueryable<Category> Categories
        {
            get
            {
                // Don't track changes to query results
                return Set<Category>().AsNoTracking();
            }
        }


        public IQueryable<Like> Likes
        {
            get
            {
                // Don't track changes to query results
                return Set<Like>().AsNoTracking();
            }
        }


        public IQueryable<Comment> Comments
        {
            get
            {
                // Don't track changes to query results
                return Set<Comment>().AsNoTracking();
            }
        }

        public IQueryable<QuestionCategory> QuestionCategories
        {
            get
            {
                // Don't track changes to query results
                return Set<QuestionCategory>().AsNoTracking();
            }
        }

        public IQueryable<CategoryFollower> CategoryFollowers
        {
            get
            {
                // Don't track changes to query results
                return Set<CategoryFollower>().AsNoTracking();
            }
        }

        public IQueryable<Keyword> Keywords
        {
            get
            {
                // Don't track changes to query results
                return Set<Keyword>().AsNoTracking();
            }
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("Questions");
            // Need this since there is no DbSet<Customer> property
            modelBuilder.Entity<Question>().ToTable("Questions");
            modelBuilder.Entity<Answer>().ToTable("Answers");
            modelBuilder.Entity<Category>().ToTable("Categories");
            modelBuilder.Entity<Like>().ToTable("Likes");
            modelBuilder.Entity<Comment>().ToTable("Comments");
            modelBuilder.Entity<QuestionCategory>().ToTable("QuestionCategories");
            modelBuilder.Entity<Keyword>().ToTable("Keywords");
            modelBuilder.Entity<CategoryFollower>().ToTable("CategoryFollowers");

        }

    }
}