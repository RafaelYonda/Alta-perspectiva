using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Microsoft.Extensions.DependencyInjection;


namespace AltaPerspectiva.Core
{
    public class DependencyMapEventHandlerFactory : IEventHandlerFactory
    {
        public IEnumerable<IEventHandler<T>> GetHandlers<T>() where T : Event
        {
            IServiceCollection services = new ServiceCollection();
            IServiceProvider provider = services.BuildServiceProvider();
            var handlers = GetHandlerType<T>();
            
            var lstHandlers = handlers.Select(handler => (IEventHandler<T>) provider.GetService(handler)).ToList();
            return lstHandlers;
        }

        private static IEnumerable<Type> GetHandlerType<T>() where T : Event
        {

            var handlers = typeof(IEventHandler<>).GetTypeInfo().Assembly.GetExportedTypes()
               .Where(x => x.GetInterfaces()
                   .Any(a => a.IsGenericParameter && a.GetGenericTypeDefinition() == typeof(IEventHandler<>))).Where(h => h.GetInterfaces().Any(ii => ii.GetGenericArguments().Any(aa => aa == typeof(T)))).ToList();

            //var handlers = typeof(IEventHandler<>).AssemblyQualifiedName.GetExportedTypes()
            //    .Where(x => x.GetInterfaces()
            //        .Any(a => a. && a.GetGenericTypeDefinition() == typeof(IEventHandler<>))).Where(h => h.GetInterfaces().Any(ii => ii.GetGenericArguments().Any(aa => aa == typeof(T)))).ToList();


            return handlers;
        }
    }
}
