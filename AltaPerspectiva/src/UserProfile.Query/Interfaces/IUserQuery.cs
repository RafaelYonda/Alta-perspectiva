﻿using AltaPerspectiva.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserProfile.Query.Interfaces
{
    public interface IUserQuery: IQuery
    {
        bool IsUserAdmin(string connectionString, Guid userId);
    }
}