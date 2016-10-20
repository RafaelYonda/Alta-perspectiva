using System;
using AltaPerspectiva.Core;

namespace AltaPerspectiva.Core
{
    public interface IEventBus
    {
        void Publish<T>(T @event) where T : Event;
    }   
}
