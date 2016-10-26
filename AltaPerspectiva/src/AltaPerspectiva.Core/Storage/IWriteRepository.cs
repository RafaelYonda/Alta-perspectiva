namespace AltaPerspectiva.Core.Storage
{ 
    public interface IWriteRepository<in TEntity> : IUnitOfWork
        where TEntity : class
    {
        /// <summary>
        /// Add entity to repository
        /// </summary>
        /// <param name="entity">Item to add to repository</param>
        /// <returns>Entity after added to repository</returns>
        void Add(TEntity entity);

        /// <summary>
        /// Updates entity in repository
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        void Modify(TEntity item);

        /// <summary>
        /// Removes an entity from repository
        /// </summary>
        /// <param name="entity">Item to remove from repository</param>
        void Remove(TEntity entity);
    }
}
