using System;

namespace AltaPerspectiva.Core
{
    public interface ICommand
    {
        Guid Id { get; }
    }
}
