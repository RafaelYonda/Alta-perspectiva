namespace Questions.Command
{
    using System;
    using AltaPerspectiva.Core;
    using AltaPerspectiva.Identity;
    using System.Collections.Generic;
    using Domain;

    public class AddLevelCommand : ICommand
    {
        public AddLevelCommand(int levelRank, String levelName)
        {
            LevelRank = levelRank;
            LevelName = levelName;
        }    
       
        public Guid Id { get;  set; }
        public int LevelRank { get; set; }
        public String LevelName { get; set; }

    }
}

