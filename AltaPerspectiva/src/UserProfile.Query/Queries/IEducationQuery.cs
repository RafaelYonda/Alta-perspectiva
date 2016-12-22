﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public interface IEducationQuery:IQuery
    {
        IEnumerable<Education> Execute(Guid id);
    }
}
