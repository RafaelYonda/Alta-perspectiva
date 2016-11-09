using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenID.Web.Account {
    public class ForgotPasswordViewModel {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
