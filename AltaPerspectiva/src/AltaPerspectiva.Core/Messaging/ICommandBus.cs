using System;
using AltaPerspectiva.Core;

namespace AltaPerspectiva.Core
{
    public interface ICommandBus
    {
        void Send<T>(T command) where T : Command;
    }
}
