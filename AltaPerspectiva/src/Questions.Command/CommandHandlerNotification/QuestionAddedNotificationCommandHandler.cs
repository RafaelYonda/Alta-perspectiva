namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;    
    using System.Diagnostics;

    public class QuestionAddedNotificationCommandHandler : ICommandHandler<AddQuestionCommand>
	{
		public void Execute(AddQuestionCommand command)
		{
			Debug.WriteLine("CreateUserNotificationCommandHandler executed");

            /// notifications for direct user question
            /// notification for  question list page using signalR
            /// notifications for category wise questions list
            /// if category subscription of user, 
			Console.WriteLine("		\"Question added\" notifincation sent: ");
			Console.WriteLine("		{0} {1} {2} {3}", command.Id, command.Title, command.User.Id, command.Date.ToString());
		}

		public void Dispose()
		{

		}
	}
}