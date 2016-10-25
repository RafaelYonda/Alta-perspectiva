using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AltaPerspectiva.Core.Storage
{
    public class ReadRepository<TEntity> : IReadOnlyRepository<TEntity> 
        where TEntity : class
    {
        protected DbContext DbContext { get; }

        protected DbSet<TEntity> DbSet { get; } 

        public ReadRepository(DbContext context)
        {
            DbContext = context;
            DbSet = context.Set<TEntity>();
        }

   
        public async Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> predicate = null)
        { 
            return predicate == null 
                ? await DbSet.ToListAsync()
                : await DbSet.Where(predicate).ToListAsync();
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync<TKey>(int pageIndex, int pageSize, Expression<Func<TEntity, TKey>> order, Expression<Func<TEntity, bool>> predicate = null)
            where TKey : class
        {
            var orderedQueryable = predicate == null
                ? DbSet.OrderBy(order)
                : DbSet.Where(predicate).OrderBy(order);

            return await orderedQueryable.Skip(pageIndex*pageSize).Take(pageSize).ToListAsync();
        }

       
        public async Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return predicate == null
                ? await DbSet.FirstOrDefaultAsync()
                : await DbSet.FirstOrDefaultAsync(predicate);
        }
    }
}
