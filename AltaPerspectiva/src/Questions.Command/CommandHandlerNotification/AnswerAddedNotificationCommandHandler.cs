namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;    
    using System.Diagnostics;

    public class AnswerAddedNotificationCommandHandler : ICommandHandler<AddAnswerCommand>
	{
		public void Execute(AddAnswerCommand command)
		{
			Debug.WriteLine("CreateAnswerNotificationCommandHandler executed");

            /// notifications for questions answered            
			Console.WriteLine("		\"Answer added\" notifincation sent: ");
			Console.WriteLine("		{0} {1} {2} {3}", command.Id, command.QuestionId, null, command.AnswerDate.ToString());
		}

		public void Dispose()
		{

		}
	}
}