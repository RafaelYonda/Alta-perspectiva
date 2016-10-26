using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AltaPerspectiva.Core.Storage
{
    public class WriteRepository<TEntity> : IWriteRepository<TEntity>
        where TEntity : class
    {
        protected DbContext DbContext { get; }

        protected DbSet<TEntity> DbSet { get; } 

        public WriteRepository(DbContext context)
        {
            DbContext = context;
            DbSet = context.Set<TEntity>();
        }

        public Task SaveChangesAsync()
        {
            // Save all changes
            return DbContext.SaveChangesAsync(true);
        }   

        public virtual void Add(TEntity entity)
        {
            DbSet.Add(entity);
        }


        public virtual void Modify(TEntity entity)
        {
            DbSet.Update(entity);
        }

        public virtual void Remove(TEntity entity)
        {
            DbSet.Remove(entity);
        }      
    }
}
