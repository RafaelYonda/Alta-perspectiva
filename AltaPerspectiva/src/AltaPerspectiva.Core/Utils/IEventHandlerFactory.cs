using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AltaPerspectiva.Core
{
    public interface IEventHandlerFactory
    {
        IEnumerable<IEventHandler<T>> GetHandlers<T>() where T : Event;
    }
}
