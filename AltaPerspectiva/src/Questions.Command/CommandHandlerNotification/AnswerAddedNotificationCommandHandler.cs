namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;    
    using System.Diagnostics;

    public class AnswerAddedNotificationCommandHandler : ICommandHandler<AddQuestionCommand>
	{
		public void Execute(AddQuestionCommand command)
		{
			Debug.WriteLine("CreateAnswerNotificationCommandHandler executed");

            /// notifications for questions answered            
			Console.WriteLine("		\"Answer added\" notifincation sent: ");
			Console.WriteLine("		{0} {1} {2} {3}", command.Id, command.Title, null, command.Date.ToString());
		}

		public void Dispose()
		{

		}
	}
}