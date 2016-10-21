using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace AltaPerspectiva.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
