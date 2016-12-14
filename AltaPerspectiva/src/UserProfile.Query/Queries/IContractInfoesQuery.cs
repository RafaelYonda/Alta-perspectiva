﻿using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace UserProfile.Query.Queries
{
    public interface IContractInfoesQuery: IQuery
    {
        IEnumerable<ContractInfo> Execute();
    }
}
