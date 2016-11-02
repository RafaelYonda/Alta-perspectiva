namespace AltaPerspectiva.Core.Infrastructure
{
    using System.Collections.Generic;
    public class PagedResult<TEntity> where TEntity: new()
    {
        public int Total { get; set; }

        public int PageNumber { get; set; }

        public int PageSize { get; set; }

        public IEnumerable<TEntity> Result { get; set; } 
    }
}
