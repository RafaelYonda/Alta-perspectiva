namespace AltaPerspectiva.Core.Infrastructure
{
    using Microsoft.EntityFrameworkCore;
    public abstract class EFQueryBase<TContext> : IQuery
		where TContext : DbContext
	{
		protected readonly TContext DbContext;

		protected EFQueryBase(TContext dbContext)
		{
			DbContext = dbContext;
		}
	}
}