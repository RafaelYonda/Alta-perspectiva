﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace AltaPerspectiva.Core
{
    public interface IEventStore
    {
        IEnumerable LoadEventsFor<TAggregate>(Guid id);
        void SaveEventsFor<TAggregate>(Guid id, int eventsLoaded, ArrayList newEvents);
    }
}
