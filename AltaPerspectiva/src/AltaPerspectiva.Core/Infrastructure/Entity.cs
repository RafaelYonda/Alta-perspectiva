namespace AltaPerspectiva.Core.Infrastructure
{
    using System;
    /// <summary>
    /// Aggregate base class, which factors out some common infrastructure that
    /// all aggregates have (ID and event application).
    /// </summary>
    public abstract class Entity: Auditable
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
