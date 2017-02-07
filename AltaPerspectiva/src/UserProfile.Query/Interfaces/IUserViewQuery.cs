﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain;
using UserProfile.Domain.AllModels;

namespace UserProfile.Query
{
    public interface IUserViewQuery : IQuery
    {
        UserView GetUserView(Guid userId);
    }
}
