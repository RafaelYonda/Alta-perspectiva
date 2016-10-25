using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AltaPerspectiva.Core.Storage
{
    public interface IReadOnlyRepository<TEntity>
        where TEntity : class
    {
        /// <summary>
        /// Gets the first entity matching the query predicate
        /// </summary>
        /// <param name="filter">The query predicate</param>
        /// <returns>If any, the first TEntity matching the query predicate; otherwise null</returns>
        Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter);

        /// <summary>
        /// Get all entities matching the query predicate
        /// </summary>
        /// <param name="filter">The filter to match</param>
        /// <returns>If any, collection of TEntity; otherwise empty collection</returns>
        Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null);

        /// <summary>
        /// Get all entities matching the query predicate; but returning the data in a page
        /// </summary>
        /// <param name="pageIndex">The pagee number</param>
        /// <param name="pageSize">Number of TEntity per page</param>
        /// <param name="order">Order expression</param>
        /// <param name="predicate">Query predicate</param>
        /// <returns>If any, collection of TEntity; otherwise empty collection</returns>
        Task<IEnumerable<TEntity>> GetAllAsync<TKey>(int pageIndex, int pageSize, Expression<Func<TEntity, TKey>> order,
            Expression<Func<TEntity, bool>> predicate = null)
            where TKey : class;
    }
}
