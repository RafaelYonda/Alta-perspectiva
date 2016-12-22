﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;

namespace UserProfile.Command.Commands
{
    public class AddPracticeAreaCommand :ICommand
    {
        public AddPracticeAreaCommand(Guid userId,String practiceAreaName)
        {
            UserId = userId;
            PracticeAreaName = practiceAreaName;
        }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }

        public String PracticeAreaName { get; set; }
    }
}