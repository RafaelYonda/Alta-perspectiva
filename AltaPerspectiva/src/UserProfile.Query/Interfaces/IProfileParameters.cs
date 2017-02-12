﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using UserProfile.Domain.ReadModel;

namespace UserProfile.Query.Interfaces
{
    public interface IProfileParameters : IQuery
    {
        ProfileParameter GetProfileParameter(Guid credentialId);

        UserInfoDetails GetUserInfoDetails(Guid userId);
    }
}