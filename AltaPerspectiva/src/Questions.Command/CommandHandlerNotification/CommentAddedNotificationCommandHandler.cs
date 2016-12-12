namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;    
    using System.Diagnostics;

    public class CommentAddedNotificationCommandHandler : ICommandHandler<AddCommentCommand>
	{
		public void Execute(AddCommentCommand command)
		{
			Debug.WriteLine("CommentAddedNotificationCommandHandler executed");

            /// notifications for questions answered            
			Console.WriteLine("		\"Comment added\" notifincation sent: ");
			Console.WriteLine("		{0} {1} {2} {3}", command.Id, command.QuestionId, null, command.CommentText);
		}

		public void Dispose()
		{

		}
	}
}