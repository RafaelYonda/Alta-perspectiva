using AltaPerspectiva.Core;

namespace AltaPerspectiva.Core
{
    public interface ICommandHandler<TCommand> where TCommand : Command
    {
        void Execute(TCommand command);
    }
}
