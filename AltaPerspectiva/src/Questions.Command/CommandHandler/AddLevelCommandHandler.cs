using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Command.DbContext;
using Questions.Domain;

namespace Questions.Command.CommandHandler
{
    public class AddLevelCommandHandler : EFCommandHandlerBase<AddLevelCommand, QuestionsDbContext>,
        ICommandHandler<AddLevelCommand>
    {
        public AddLevelCommandHandler(QuestionsDbContext dbContext)
            : base(dbContext)
        {
        }

        public override void Execute(AddLevelCommand command)
        {
            Debug.WriteLine("AddLevelCommandHandler executed");
            Level level=new Level();
            level.LevelName = command.LevelName;
            level.LevelRank = command.LevelRank;
            level.GenerateNewIdentity();
            DbContext.Levels.Add(level);
            DbContext.SaveChanges();

        }
    }

}
