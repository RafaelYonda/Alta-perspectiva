namespace AltaPerspectiva.Core.Infrastructure
{
    using System;

    public abstract class Auditable
    {
        public bool? IsActive { get; set; }

        public bool? IsDeleted { get; set; }

        public Guid? CreatedBy { get; set; }

        public DateTime? CreatedOn { get; set; }

        public Guid? ModifiedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public DateTime DTS { get; set; }

        public void SetAuditFieldsForCreate(Guid createdByUserId)
        {
            this.IsActive = true;
            this.IsDeleted = false;
            this.CreatedBy = createdByUserId;
            this.CreatedOn = DateTime.Now;
            this.DTS = DateTime.Now;
        }

        public void SetAuditFieldsForModify(Guid modifiedByUserId)
        {
            this.ModifiedBy = modifiedByUserId;
            this.ModifiedOn = DateTime.Now;
        }

        public void SetAuditFieldsForDelete(Guid modifiedByUserId)
        {
            this.IsActive = false;
            this.IsDeleted = true;
            this.ModifiedBy = modifiedByUserId;
            this.ModifiedOn = DateTime.Now;
        }
    }
}
