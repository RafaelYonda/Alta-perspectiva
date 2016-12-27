﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;

namespace UserProfile.Query
{
    public interface IPracticeAreaQuery:IQuery
    {
        IEnumerable<PracticeArea> Execute(Guid id);
    }
}
