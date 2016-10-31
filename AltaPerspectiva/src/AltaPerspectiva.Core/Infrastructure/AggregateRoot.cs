using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace AltaPerspectiva.Core.Infrastructure
{
    /// <summary>
    /// Aggregate base class, which factors out some common infrastructure that
    /// all aggregates have (ID and event application).
    /// </summary>
    public abstract class AggregateRoot 
    {
        Guid _Id;
        public virtual Guid Id
        {
            get
            {
                return _Id;
            }
            protected set
            {
                _Id = value;
            }
        }

        public void GenerateNewIdentity()
        {
            if (IsTransient())
                this.Id = IdentityGenerator.NewSequentialGuid();
        }

        /// <summary>
        /// Check if this entity is transient, ie, without identity at this moment
        /// </summary>
        /// <returns>True if entity is transient, else false</returns>
        public bool IsTransient()
        {
            return this.Id == Guid.Empty;
        }

    }
}
