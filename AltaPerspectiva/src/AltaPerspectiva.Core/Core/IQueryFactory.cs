namespace AltaPerspectiva.Core
{
	public interface IQueryFactory
	{
		T ResolveQuery<T>()
			where T : class, IQuery;
	}
}