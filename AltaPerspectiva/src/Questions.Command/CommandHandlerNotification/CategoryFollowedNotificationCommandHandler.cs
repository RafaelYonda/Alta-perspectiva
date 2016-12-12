namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;    
    using System.Diagnostics;

    public class CategoryFollowedNotificationCommandHandler : ICommandHandler<FollowCategoryCommand>
	{
		public void Execute(FollowCategoryCommand command)
		{
			Debug.WriteLine("CategoryFollowedNotificationCommandHandler executed");

            /// notifications for questions answered            
			Console.WriteLine("		\"Category follwoed\" notifincation sent: ");
			Console.WriteLine("		{0} {1} {2} ", command.Id, command.CategoryId, null);
		}

		public void Dispose()
		{

		}
	}
}