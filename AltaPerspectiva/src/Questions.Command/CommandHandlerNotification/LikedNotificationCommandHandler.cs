namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;    
    using System.Diagnostics;

    public class LikedNotificationCommandHandler : ICommandHandler<AddLikeCommand>
	{
		public void Execute(AddLikeCommand command)
		{
			Debug.WriteLine("LikedNotificationCommandHandler executed");

            /// notifications for questions answered            
			Console.WriteLine("		\"Comment added\" notifincation sent: ");
			Console.WriteLine("		{0} {1} {2} ", command.Id, command.QuestionId, null);
		}

		public void Dispose()
		{

		}
	}
}