using System.Threading.Tasks;

namespace AltaPerspectiva.Core.Storage
{
    public interface IUnitOfWork
    {
        /// <summary>
        /// Saves changes to underlying storage
        /// </summary>
        Task SaveChangesAsync();
    }
}
