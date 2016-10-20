using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AltaPerspectiva.Core
{
    public interface IEventHandler<TEvent> where TEvent : Event
    {
        void Handle(TEvent handle);
    }
}
