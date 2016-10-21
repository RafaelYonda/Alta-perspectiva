using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace AltaPerspectiva.Identity
{
    public class PasswordValidator : IPasswordValidator<ApplicationUser>
    {
        public Task<IdentityResult> ValidateAsync(UserManager<ApplicationUser> manager, ApplicationUser user, string password)
        {
            throw new NotImplementedException();
        }
    }
}
