using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AltaPerspectiva.Core
{
    public interface IEvent
    {
        Guid Id { get; }
    }
}
