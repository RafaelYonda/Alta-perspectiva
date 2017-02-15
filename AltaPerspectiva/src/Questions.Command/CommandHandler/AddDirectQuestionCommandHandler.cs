using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.Commands;
using Questions.Command.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questions.Domain;

namespace Questions.Command.CommandHandler
{
    public class AddDirectQuestionCommandHandler : EFCommandHandlerBase<DirectQuestionCommand, QuestionsDbContext>,
        ICommandHandler<DirectQuestionCommand>
    {
        public AddDirectQuestionCommandHandler(QuestionsDbContext dbContext)
			: base(dbContext)
		{
        }

        public override void Execute(DirectQuestionCommand command)
        {
            // 
            Question question = new Question();
            question.GenerateNewIdentity();
            // create new answers. generate id then add to questions

            question.Title = command.Title;
            question.Body = command.Body ?? "";
            question.UserId = command.UserId;
            //IsAnonums added
            question.IsAnonymous = command.IsAnonymous;
            //DirectQuestionAdded
            question.IsDirectQuestion = command.IsDirectQuestion;
            question.CreatedOn = command.Date;
            question.CreatedBy = command.UserId;
            question.DTS = command.Date;

        

            foreach (var cid in command.CategoryIds)
            {
                QuestionCategory qc = new QuestionCategory();
                qc.CategoryId = cid;
                qc.QuestionId = question.Id;
                question.Categories.Add(qc);
            }

            DbContext.Questions.Add(question);


            


            DbContext.SaveChanges();

            command.Id = question.Id;


            DirectQuestion directQuestion=new DirectQuestion();
            directQuestion.QuestionId = question.Id;
            directQuestion.QuestionAskedToUser = command.QuestionAskedToUser;

            DbContext.DirectQuestions.Add(directQuestion);
            DbContext.SaveChanges();
            //command.Id = directQuestion.Id;
        }
       
    }
}
