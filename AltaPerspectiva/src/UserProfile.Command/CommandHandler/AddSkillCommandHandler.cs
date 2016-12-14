using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using UserProfile.Command.Commands;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Domain;

namespace UserProfile.Command.CommandHandler
{
    public class AddSkillCommandHandler : EFCommandHandlerBase<AddSkillCommand, UserProfileDbContext>, ICommandHandler<AddSkillCommand>
    {
        public AddSkillCommandHandler(UserProfileDbContext dbContext)
			: base(dbContext)
		{
        }
        public override void Execute(AddSkillCommand command)
        {
            Debug.WriteLine("AddSkillCommandHandler executed");

            Skill skill = new Skill();
            skill.GenerateNewIdentity();
            skill.UserId = command.UserId;
            skill.SkillName = command.SkillName;
            
            DbContext.Skill.Add(skill);
            DbContext.SaveChanges();



            /*Some ID modification*/
           // ContractInformation contractInformation = GetContractInfo(command.Id);
            // 
            //Answer answer = new Answer();
            //answer.GenerateNewIdentity();
            //// create new answers. generate id then add to questions

            //answer.QuestionId = command.QuestionId;
            //answer.Text = command.Text;
            //answer.UserId = command.UserId;
            //answer.CreatedOn = DateTime.Now;
            //answer.CreatedBy = command.UserId;
            //answer.DTS = DateTime.Now;

            //DbContext.Answers.Add(answer);
            //DbContext.SaveChanges();

           // command.Id = skill.Id;
        }

        //private ContractInformation GetContractInfo(Guid id)
        //{
        //    return DbContext
        //            .ContractInformation
        //            // .Where(q => q.Id == id)
        //            .SingleOrDefault();

        //}
    }
    
}
