namespace Questions.Command
{
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Core.Infrastructure;
    using DbContext;
    using System.Diagnostics;
    using System.Linq;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Routing;
    using Domain;

    /// <summary>
    ///     Create new inactive user
    /// </summary>
    /// 

    public class AddQuestionCommandHandler : EFCommandHandlerBase<AddQuestionCommand, QuestionsDbContext>,
		ICommandHandler<AddQuestionCommand>
	{
		public AddQuestionCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
		}

		public override void Execute(AddQuestionCommand command)
		{
			Debug.WriteLine("AddQuestionCommandHandler executed");

            // 
            Question question = new Question();
            question.GenerateNewIdentity();

            // create new answers. generate id then add to questions

            question.Answers = command.Answers;
            question.Title = command.Title;
            question.Body = command.Body;

            DbContext.Questions.Add(question);
			DbContext.SaveChanges();

			command.Id = question.Id;
		}
	}
}